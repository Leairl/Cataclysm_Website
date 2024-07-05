using ArgentPonyWarcraftClient;

class CharacterCacheService(IWarcraftRedisProxy redisProxy)
{
    //uses PvpLeaderboardEntry in generic method in order to locate character slug / name in warcraft client
    public async Task BatchCacheCharSummary(string region, PvpLeaderboardEntry[] array, int batchSize = 5)
    {
        var batchAmount = array.Length/batchSize;
        for(int i = 0; i<batchAmount; i++)
        {

            var slice = array.Skip(i*batchSize).Take(batchSize);
            //obtains character realm, character name, and region.
            await Parallel.ForEachAsync(slice, async (player, auth) => {
                await redisProxy.GetCharSummary(player.Character.Realm.Slug, player.Character.Name, region);
            });
        };
    }
    //get rbgLeaderboard in redis (defined method with a defined type to execute x function)
    public async Task CacheRBGLadder(string region)
    {
        //not using string since we are executing from GetRBGLeaderboard method in warcraftclient
        var rbgLeaderboard = await redisProxy.GetRBGLeaderboard(region);
        await BatchCacheCharSummary(region, rbgLeaderboard.Entries);
    }
    //get 2v2Leaderboard in redis (defined method with a defined type to execute x function)
    public async Task Cache2v2Ladder(string region)
    {
        //not using string since we are executing from Get2v2Leaderboard method in warcraftclient
        var leaderboard2v2 = await redisProxy.Get2v2Leaderboard(region);
        await BatchCacheCharSummary(region, leaderboard2v2.Entries);
    }
    //get Leaderboard3v3 in redis (defined method with a defined type to execute x function)
    public async Task Cache3v3Ladder(string region)
    {
        //not using string since we are executing from Get3v3Leaderboard method in warcraftclient
        var leaderboard3v3 = await redisProxy.Get3v3Leaderboard(region);
        await BatchCacheCharSummary(region, leaderboard3v3.Entries);
    }
    //get Leaderboard5v5 in redis (defined method with a defined type to execute x function)
    public async Task Cache5v5Ladder(string region)
    {
        //not using string since we are executing from Get5v5Leaderboard method in warcraftclient
        var leaderboard5v5 = await redisProxy.Get5v5Leaderboard(region);
        await BatchCacheCharSummary(region, leaderboard5v5.Entries);
    }
    public async Task CacheAllLadders(string region)
    {
        await CacheRBGLadder(region);
        await Cache5v5Ladder(region);
        await Cache3v3Ladder(region);
        await Cache2v2Ladder(region);

    }

}
