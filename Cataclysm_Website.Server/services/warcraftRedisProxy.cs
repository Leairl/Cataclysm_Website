using System.Data.Common;
using System.Text.Json;
using System.Text.Json.Serialization;
using ArgentPonyWarcraftClient;
using StackExchange.Redis;

class warcraftRedisProxy(WarcraftClient warcraftClient, IConnectionMultiplexer redis) : IWarcraftRedisProxy
{
    public async Task<T?>GetRedisData<T>(string key)
    {  //async call to return data (of generic type), second type is to define the type.
        var db = redis.GetDatabase(); //var to redis database
        var StringRedis = await db.StringGetAsync(key); //var to get jsonstring from redis of key
            if (!StringRedis.HasValue) //return null if nothing for key
            {
                return default(T);
            }
        var result = JsonSerializer.Deserialize<T>(StringRedis); //deserialize jsonstring redis to obj of key
        return result;
    }
    
    public async Task SaveToRedis<T>(string key, T wowClass, TimeSpan expiration) //no inital generic type T since it's not needed to show saved redis data
    {
        var db = redis.GetDatabase(); //var to redis database
        var res = JsonSerializer.Serialize(wowClass); //serializes warcraftclient to string
        await db.StringSetAsync(key, res, expiration); //saves string in redis database
    }

    public async Task<T> GetBlizzardData<T>(string key, Func<Task<T>> BlizzardCall, TimeSpan expiration) 
    {
        var BlizzardData = await BlizzardCall(); //setting var of generic function
        await SaveToRedis(key, BlizzardData, expiration); //calls to savetoredis method with blizzardData (set in other methods below, and is currently a generic function here)
        return BlizzardData; //returns warcraftclient data after saved to redis on UI
    }

    public async Task<T> GetBlizzardDataCached<T>(string key, Func<Task<T>> BlizzardCall, TimeSpan expiration)
    {
        var res = await GetRedisData<T>(key);
        if (res == null || res is 0){
            res = await GetBlizzardData(key, BlizzardCall, expiration);
        }
        return res;
    }
    public async Task<PvpLeaderboard> Get2v2Leaderboard(string region)
    {
        return await GetBlizzardDataCached<PvpLeaderboard>("get2v2Leaderboard" + region, async () => {
            var curr2v2Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region), "2v2", region);
            return curr2v2Leaderboard.Value;
        },   TimeSpan.FromHours(6)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }

    public async Task<PvpLeaderboard> Get3v3Leaderboard(string region)
    {
        return await GetBlizzardDataCached<PvpLeaderboard>("get3v3Leaderboard" + region, async () => {
            var curr3v3Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region), "3v3", region);
            return curr3v3Leaderboard.Value;
        },   TimeSpan.FromHours(6)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }


    public async Task<PvpLeaderboard> Get5v5Leaderboard(string region)
    {
        return await GetBlizzardDataCached<PvpLeaderboard>("get5v5Leaderboard" + region, async () => {
            var curr5v5Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region), "5v5", region);
            return curr5v5Leaderboard.Value;
        },   TimeSpan.FromHours(6)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }

    public async Task<PvpLeaderboard> GetRBGLeaderboard(string region) //get rbgLeaderboard in redis
    {
        return await GetBlizzardDataCached<PvpLeaderboard>("currRbgLadder" + region, async () => {
            var currRbgLadder = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region), "rbg", region);
            return currRbgLadder.Value;
        },   TimeSpan.FromHours(6)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }
    public async Task<int> GetSeason(string region) // get currSeason in redis
    {
        return await GetBlizzardDataCached<int>("GetCurrSeason" + region, async () => {
            var GetCurrSeason = await warcraftClient.GetPvpSeasonsIndexAsync(region);
            return GetCurrSeason.Value.CurrentSeason.Id;
        },   TimeSpan.FromDays(1)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }
}
