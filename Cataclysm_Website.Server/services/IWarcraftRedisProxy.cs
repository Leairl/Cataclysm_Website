using ArgentPonyWarcraftClient;

public interface IWarcraftRedisProxy
{
    Task<PvpLeaderboard> Get3v3Leaderboard(string region);
    Task<PvpLeaderboard> Get2v2Leaderboard(string region);
    Task<PvpLeaderboard> Get5v5Leaderboard(string region);
    Task<PvpLeaderboard> GetRBGLeaderboard(string region);

    Task InsertCacheCharacter(string characterName, string server, string region);
    Task InsertCacheClassCharacter(string bracket, PvpLeaderboardEntry player, CharacterProfileSummary summary, string region);
    Task ClearAllCachedClassCharacters(string bracket, string region);
    Task<List<string>> CachedCharacters();
    Task<List<PvpLeaderboardEntry?>> CachedClassCharacters(string region, string characterClass, string bracket);
    Task<IEnumerable<PvpLeaderboardAndTime?>> GetLadderHistory(string key, string region);
    Task<CharacterProfileSummary> GetCharSummary(string server, string characterName, string region);
    Task<PvpRewardsIndex> GetPvPRewards(string region);
    Task<CharacterAppearanceSummary> GetCharAppearance(string server, string characterName, string region);
    Task<CharacterEquipmentSummary> GetCharEquipment(string server, string characterName, string region);
    Task<CharacterPvpBracketStatistics> GetPvpBracketRating(string server, string characterName, string pvpBracket, string region);
    Task<CharacterStatisticsSummary> GetCharacterStats(string server, string characterName, string region);
    Task<CharacterAchievementsSummary> GetCharacterAchievements(string server, string characterName, string region);
    Task<ItemMedia> GetItemIcon(int itemId);
    Task<CharacterSpecializationsSummary> GetPlayerTalents(string server, string characterName, string region);

    Task<int> GetSeason(string region);
}
