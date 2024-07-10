using ArgentPonyWarcraftClient;

public interface IWarcraftRedisProxy
{
    Task<PvpLeaderboard> Get3v3Leaderboard(string region);
    Task<PvpLeaderboard> Get2v2Leaderboard(string region);
    Task<PvpLeaderboard> Get5v5Leaderboard(string region);
    Task<PvpLeaderboard> GetRBGLeaderboard(string region);
    Task InsertCacheCharacter(string characterName, string server, string region);
    Task<List<string>> CachedCharacters();
    Task<CharacterProfileSummary> GetCharSummary(string server, string characterName, string region);
    Task<CharacterAppearanceSummary> GetCharAppearance(string server, string characterName, string region);
    Task<CharacterEquipmentSummary> GetCharEquipment(string server, string characterName, string region);

    Task<int> GetSeason(string region);
}
