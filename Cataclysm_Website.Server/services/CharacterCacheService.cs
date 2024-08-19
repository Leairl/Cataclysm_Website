using ArgentPonyWarcraftClient;

class CharacterCacheService(IWarcraftRedisProxy redisProxy)
{
    //uses PvpLeaderboardEntry in generic method in order to locate character slug / name in warcraft client
    public async Task BatchCacheCharSummary(Bracket bracket, string region, PvpLeaderboardEntry[] array, int batchSize = 5)
    {
        var batchAmount = array.Length/batchSize;
        for(int i = 0; i<batchAmount; i++)
        {

            var slice = array.Skip(i*batchSize).Take(batchSize);
            //obtains character realm, character name, and region.
            await Parallel.ForEachAsync(slice, async (player, auth) => {
                var summary = await redisProxy.GetCharSummary(player.Character.Realm.Slug, player.Character.Name, region);
                await redisProxy.InsertCacheClassCharacter(bracket, player, summary, region);
            });
        };
    }
    //get rbgLeaderboard in redis (defined method with a defined type to execute x function)
    public async Task CacheRBGLadder(string region)
    {
        //not using string since we are executing from GetRBGLeaderboard method in warcraftclient
        var rbgLeaderboard = await redisProxy.GetRBGLeaderboard(region);
        await BatchCacheCharSummary(rbgLeaderboard.Bracket, region, rbgLeaderboard.Entries.Take(2500).ToArray());
    }
    //get 2v2Leaderboard in redis (defined method with a defined type to execute x function)
    public async Task Cache2v2Ladder(string region)
    {
        //not using string since we are executing from Get2v2Leaderboard method in warcraftclient
        var leaderboard2v2 = await redisProxy.Get2v2Leaderboard(region);
        await BatchCacheCharSummary(leaderboard2v2.Bracket, region, leaderboard2v2.Entries.Take(2500).ToArray());
    }
    //get Leaderboard3v3 in redis (defined method with a defined type to execute x function)
    public async Task Cache3v3Ladder(string region)
    {
        //not using string since we are executing from Get3v3Leaderboard method in warcraftclient
        var leaderboard3v3 = await redisProxy.Get3v3Leaderboard(region);
        await BatchCacheCharSummary(leaderboard3v3.Bracket, region, leaderboard3v3.Entries.Take(2500).ToArray());
    }
    //get Leaderboard5v5 in redis (defined method with a defined type to execute x function)
    public async Task Cache5v5Ladder(string region)
    {
        //not using string since we are executing from Get5v5Leaderboard method in warcraftclient
        var leaderboard5v5 = await redisProxy.Get5v5Leaderboard(region);
        await BatchCacheCharSummary(leaderboard5v5.Bracket, region, leaderboard5v5.Entries.Take(2500).ToArray());
    }
    public async Task CacheAllLadders(string region)
    {
        await CacheRBGLadder(region);
        await Cache5v5Ladder(region);
        await Cache3v3Ladder(region);
        await Cache2v2Ladder(region);

    }

}
