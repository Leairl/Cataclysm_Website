using ArgentPonyWarcraftClient;

public interface IWarcraftRedisProxy
{
    Task<PvpLeaderboard> Get3v3Leaderboard(string region);
    Task<PvpLeaderboard> Get2v2Leaderboard(string region);
    Task<PvpLeaderboard> Get5v5Leaderboard(string region);
    Task<PvpLeaderboard> GetRBGLeaderboard(string region);
    Task<int> GetSeason(string region);
}
