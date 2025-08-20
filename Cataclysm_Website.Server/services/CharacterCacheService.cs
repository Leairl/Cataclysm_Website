using ArgentPonyWarcraftClient;
using StackExchange.Redis;
using TwitchLib.Api.Helix.Models.Entitlements;

class CharacterCacheService(IWarcraftRedisProxy redisProxy, ILogger<CharacterCacheService> logger, IConfiguration Config, IConnectionMultiplexer redis)
{
    //uses PvpLeaderboardEntry in generic method in order to locate character slug / name in warcraft client
    public async Task BatchCacheCharSummary(string bracket, string region, PvpLeaderboardEntry[] oldarray, PvpLeaderboardEntry[] newarray, int batchSize = 5)
    {
        using var HttpClient = new HttpClient();
        using var RateLimitedHttpClient = new RateLimitedHttpClient(HttpClient);
        var clientId = Config[region.ToLower() + bracket.ToLower() + "bracket-battlenetApi:clientId"];
        var clientSecret = Config[region.ToLower() + bracket.ToLower() + "bracket-battlenetApi:clientSecret"];
        var warcraftClient = new WarcraftClient(clientId, clientSecret, Region.US, Locale.en_US, RateLimitedHttpClient);
        redisProxy.overrideClient = warcraftClient;
        await redisProxy.ClearAllCachedClassCharacters(bracket, region);
        await redisProxy.ClearPvpCharacterSummary(bracket, region);
        var batchAmount = newarray.Length/batchSize;
        decimal percent = 0;
        await redis.GetDatabase().StringSetAsync(bracket + region + "SyncStatus", percent.ToString());
        for(int i = 0; i<batchAmount; i++)
        {
            var slice = newarray.Skip(i*batchSize).Take(batchSize);
            //obtains character realm, character name, and region.
            foreach(var player in slice) {
                try 
                {
                    var oldPlayer = oldarray.FirstOrDefault(p => {
                        return p.Character.Id == player.Character.Id;
                    });
                    var summary = await redisProxy.GetCharSummary(player.Character.Realm.Slug, player.Character.Name, region);
                    if (summary == new CharacterProfileSummary())
                    {
                        redis.GetDatabase().KeyDelete("GetCharacter" + player.Character.Realm.Slug + player.Character.Name + region);
                        await Task.Delay(500);
                        summary = await redisProxy.GetCharSummary(player.Character.Realm.Slug, player.Character.Name, region);
                    }
                    var talents = await redisProxy.GetCharacterSpecName(player.Character.Realm.Slug, player.Character.Name, region);
                    if (talents == "")
                    {
                        redis.GetDatabase().KeyDelete("characterSpecSummary" + player.Character.Name + player.Character.Realm.Slug + region);
                        redis.GetDatabase().KeyDelete("characterSpecName" + player.Character.Name + player.Character.Realm.Slug + region);
                        await Task.Delay(500);
                        talents = await redisProxy.GetCharacterSpecName(player.Character.Realm.Slug, player.Character.Name, region);
                    }
                    var newPvpCharSummary = new PvpCharacterSummary
                        {
                        PvpEntry = player,
                        charSummary = summary,
                        spec = talents
                        };
                    await redisProxy.SavePvpCharacterSummary(newPvpCharSummary, bracket, region);
                    if (oldPlayer != null && oldPlayer.SeasonMatchStatistics.Played != player.SeasonMatchStatistics.Played) {
                        await redisProxy.InsertToBracketActivityPage(bracket, region, oldPlayer, player);
                        await redisProxy.InsertActivityCacheClassCharacter(bracket, oldPlayer, player, summary, region);
                        await redisProxy.InsertToPlayerPageActivity(bracket, region, player);
                    };
                    await redisProxy.InsertCacheClassCharacter(bracket, player, summary, region);
                }
                catch (Exception ex) 
                {
                    logger.LogError(ex, "Error in BatchCacheCharSummary");
                }
            }
            percent = (decimal)(i+1)/batchAmount;
            await redis.GetDatabase().StringSetAsync(bracket + region + "SyncStatus", percent.ToString());
        };
        await redisProxy.BracketPlayerExpiration(bracket, region);
        redisProxy.overrideClient = null;
    }
    //get rbgLeaderboard in redis (defined method with a defined type to execute x function)
    public async Task CacheRBGLadder(string region)
    {
        //not using string since we are executing from GetRBGLeaderboard method in warcraftclient
        try
        {
            var oldRbgLeaderboard = await redisProxy.GetRBGLeaderboard(region);
            await redisProxy.ClearLeaderboard("rbg", region);
            var newRbgLeaderboard = await redisProxy.GetRBGLeaderboard(region);
            await BatchCacheCharSummary("rbg", region, oldRbgLeaderboard.Entries.ToArray(), newRbgLeaderboard.Entries.ToArray());
        }
        catch (Exception ex) 
        {
            logger.LogError(ex, "Error in CacheRBGLadder");
        }
    }
    //get 2v2Leaderboard in redis (defined method with a defined type to execute x function)
    public async Task Cache2v2Ladder(string region)
    {
        try
        {
            //not using string since we are executing from Get2v2Leaderboard method in warcraftclient
            var oldleaderboard2v2 = await redisProxy.Get2v2Leaderboard(region);
            await redisProxy.ClearLeaderboard("2v2", region);
            var new2v2Leaderboard = await redisProxy.Get2v2Leaderboard(region);
            await BatchCacheCharSummary("2v2", region, oldleaderboard2v2.Entries.ToArray(), new2v2Leaderboard.Entries.ToArray());
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in Cache2v2Ladder");
        }
    }
    //get Leaderboard3v3 in redis (defined method with a defined type to execute x function)
    public async Task Cache3v3Ladder(string region)
    {
        try
        {
            //not using string since we are executing from Get3v3Leaderboard method in warcraftclient
            var oldleaderboard3v3 = await redisProxy.Get3v3Leaderboard(region);
            await redisProxy.ClearLeaderboard("3v3", region);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboard3v3 = await redisProxy.Get3v3Leaderboard(region);
            await BatchCacheCharSummary("3v3", region, oldleaderboard3v3.Entries.ToArray(), newleaderboard3v3.Entries.ToArray());
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in Cache3v3Ladder");
        }
    }
    //get Leaderboard5v5 in redis (defined method with a defined type to execute x function)
    public async Task Cache5v5Ladder(string region)
    {
        try
        {
            //not using string since we are executing from Get5v5Leaderboard method in warcraftclient
            var oldleaderboard5v5 = await redisProxy.Get5v5Leaderboard(region);
            await redisProxy.ClearLeaderboard("5v5", region);
            var newleaderboard5v5 = await redisProxy.Get5v5Leaderboard(region);
            await BatchCacheCharSummary("5v5", region, oldleaderboard5v5.Entries.ToArray(), newleaderboard5v5.Entries.ToArray());
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in Cache5v5Ladder");
        }
    }
    public async Task CacheAllLadders(string region)
    {
        await CacheRBGLadder(region);
        await Cache5v5Ladder(region);
        await Cache3v3Ladder(region);
        await Cache2v2Ladder(region);

    }

}
