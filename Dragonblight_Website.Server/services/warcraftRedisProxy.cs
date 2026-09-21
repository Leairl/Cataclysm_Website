using System.Text.Json;
using System.Text.RegularExpressions;
using ArgentPonyWarcraftClient;
using StackExchange.Redis;

class WarcraftRedisProxy(WarcraftClient _warcraftClient, IConnectionMultiplexer redis, ILogger<WarcraftRedisProxy> logger) : IWarcraftRedisProxy
{
    public WarcraftClient? overrideClient{get; set;}
    private WarcraftClient warcraftClient{get {
        if (overrideClient != null){
            return overrideClient;
        }
        return _warcraftClient;
    }}
    //Cached entries are JSON of the models these methods return, so adding a field to one of those
    //models changes nothing already in Redis: a character looked up before the change keeps coming
    //back with the new field empty until its key expires, which is a day for some of them. Raising
    //this number retires every cached entry at once, and it has to be raised whenever a cached model
    //gains a field the site reads.
    private const string SchemaVersion = "v2:";

    //the key a cache entry actually lives under
    private static string VersionedKey(string key) => SchemaVersion + key;

    public async Task<T?> GetRedisData<T>(string key)
    {  //async call to return data (of generic type), second type is to define the type.
        var db = redis.GetDatabase(); //var to redis database
        var StringRedis = await db.StringGetAsync(key); //var to get jsonstring from redis of key
        if (!StringRedis.HasValue) //return null if nothing for key
        {
            return default(T);
        }
        var result = JsonSerializer.Deserialize<T>(StringRedis!); //deserialize jsonstring redis to obj of key
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
        await SaveToRedis(VersionedKey(key), BlizzardData, expiration); //calls to savetoredis method with blizzardData (set in other methods below, and is currently a generic function here)
        return BlizzardData; //returns warcraftclient data after saved to redis on UI
    }

    public async Task<T> GetBlizzardDataCached<T>(string key, Func<Task<T>> BlizzardCall, TimeSpan expiration)
    {
        //has unique key for each character, results in no duplicate characters pulled from redis
        var res = await GetRedisData<T>(VersionedKey(key));
        if (res == null || res is 0)
        {
            res = await GetBlizzardData(key, BlizzardCall, expiration);
        }
        return res;
    }
    public async Task<PvpLeaderboard> Get2v2Leaderboard(string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var ns = GetDynamicRegion(region, flavor);
        return await GetBlizzardDataCached<PvpLeaderboard>("get2v2Leaderboard" + ns, async () =>
        {
            var curr2v2Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, flavor), "2v2", ns, GetRegion(ns), GetLocale(ns));
            return curr2v2Leaderboard.Value;
        }, TimeSpan.FromHours(3)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }

    public async Task<PvpLeaderboard> Get3v3Leaderboard(string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var ns = GetDynamicRegion(region, flavor);
        return await GetBlizzardDataCached<PvpLeaderboard>("get3v3Leaderboard" + ns, async () =>
        {
            var curr3v3Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, flavor), "3v3", ns, GetRegion(ns), GetLocale(ns));
            return curr3v3Leaderboard.Value;
        }, TimeSpan.FromHours(3)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }


    public async Task<PvpLeaderboard> Get5v5Leaderboard(string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var ns = GetDynamicRegion(region, flavor);
        return await GetBlizzardDataCached<PvpLeaderboard>("get5v5Leaderboard" + ns, async () =>
        {
            var curr5v5Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, flavor), "5v5", ns, GetRegion(ns), GetLocale(ns));
            return curr5v5Leaderboard.Value;
        }, TimeSpan.FromHours(3)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }

    public async Task<CharacterSpecializationsSummary> GetPlayerTalents(string server, string characterName, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        region = GetProfileRegion(region, flavor);
        return await GetBlizzardDataCached<CharacterSpecializationsSummary>("characterSpecSummary" + characterName + server + region, async () =>
        {
            var charSpecSummary = await warcraftClient.GetCharacterSpecializationsSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
            return charSpecSummary.Value;
        }, TimeSpan.FromHours(6));
    }

    //The retail talent trees a spec draws from: one call returns the class tree, the spec tree
    //and every hero tree, each node carrying the grid position Wowhead lays them out by.
    //Static game data, so it is cached for a month. A failure returns null and is not cached,
    //so the next request retries instead of serving an empty tree for 30 days.
    public async Task<TalentTree?> GetTalentTree(int specId, string region, GameFlavor flavor = GameFlavor.Retail)
    {
        var ns = GetStaticRegion(region, flavor);
        return await GetBlizzardDataCached<TalentTree?>("TalentTree" + specId + ns, async () =>
        {
            var index = await warcraftClient.GetTalentTreeIndexAsync(ns, GetRegion(ns), GetLocale(ns));
            if (!index.Success)
            {
                return null;
            }
            //a tree belongs to a class, not a spec, and the index is the only place the pairing
            //is published - each spec entry's href ends in the spec id it is for.
            var href = index.Value.SpecTalentTrees?
                .FirstOrDefault(t => t.Key?.Href?.ToString().Contains($"/playable-specialization/{specId}?") == true)
                ?.Key?.Href?.ToString();
            var treeId = TalentTreeIdFromHref(href);
            if (treeId == null)
            {
                return null;
            }
            var tree = await warcraftClient.GetTalentTreeAsync(treeId.Value, specId, ns, GetRegion(ns), GetLocale(ns));
            return tree.Success ? tree.Value : null;
        }, TimeSpan.FromDays(30));
    }

    //pulls 774 out of .../data/wow/talent-tree/774/playable-specialization/253?namespace=...
    private static int? TalentTreeIdFromHref(string? href)
    {
        var match = Regex.Match(href ?? "", @"talent-tree/(\d+)/playable-specialization");
        return match.Success ? int.Parse(match.Groups[1].Value) : null;
    }

        public async Task<string> GetCharacterSpecName(string server, string characterName, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        return await GetBlizzardDataCached<string>(flavor.KeyPrefix() + "characterSpecName" + characterName + server + region, async () =>
        {
            if (flavor == GameFlavor.Retail)
            {
                return "";
            }
            var talents = await GetPlayerTalents(server, characterName, region, flavor);
            var activeSpecialization = talents?.SpecializationGroups.Where(s => s.IsActive).FirstOrDefault();
            var specName = activeSpecialization?.Specializations?.OrderByDescending(spec => spec.SpentPoints)?.FirstOrDefault()?.SpecializationName;
            return specName ?? "";

        }, TimeSpan.FromHours(6));
    }

    public async Task<PvpLeaderboard> GetRBGLeaderboard(string region, GameFlavor flavor = GameFlavor.MistsClassic) //get rbgLeaderboard in redis
    {
        var ns = GetDynamicRegion(region, flavor);
        return await GetBlizzardDataCached<PvpLeaderboard>("currRbgLadder" + ns, async () =>
        {
            var currRbgLadder = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, flavor), "rbg", ns, GetRegion(ns), GetLocale(ns));
            return currRbgLadder.Value;
        }, TimeSpan.FromHours(3)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }
    public async Task<PvpRewardsIndex> GetPvPRewards(string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {

        var ns = GetDynamicRegion(region, flavor);
        int season = await GetSeason(region, flavor);
        return await GetBlizzardDataCached<PvpRewardsIndex>("GetPvPRewards" + season + ns, async () =>
        {
            var ActivePvpRewards = await warcraftClient.GetPvpRewardsIndexAsync(season, ns, GetRegion(ns), GetLocale(ns));
            return ActivePvpRewards.Value;
        }, TimeSpan.FromHours(6)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }
    public async Task AddToLadderHistory(string key, string region, PvpLeaderboard currLadder, GameFlavor flavor = GameFlavor.MistsClassic) //get rbgLeaderboard in redis
    {
        var currLadderAndTime = new PvpLeaderboardAndTime
        {
            Entries = currLadder.Entries,
            Links = currLadder.Links,
            Name = currLadder.Name,
            Season = currLadder.Season,
            Time = DateTime.Now
        };
        var db = redis.GetDatabase();
        await db.ListRightPushAsync(flavor.KeyPrefix() + key + region, JsonSerializer.Serialize(currLadderAndTime));
    }
    public async Task InsertToPlayerPageActivity(string bracket, string region, PvpLeaderboardEntry player, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var PvpLeaderboardEntryandTime = new PvpLeaderboardEntryandTime
        {
            Character = player.Character,
            Faction = player.Faction,
            Rank = player.Rank,
            Rating = player.Rating,
            SeasonMatchStatistics = player.SeasonMatchStatistics,
            Tier = player.Tier,
            Time = DateTime.Now
        };
        var db = redis.GetDatabase();
        await db.ListRightPushAsync(flavor.KeyPrefix() + "actvity" + bracket + region + player.Character.Id, JsonSerializer.Serialize(PvpLeaderboardEntryandTime));
    }
    public async Task<IEnumerable<PvpLeaderboardEntryandTime?>> GetPlayerPageActivity(string bracket, string region, string characterId, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = flavor.KeyPrefix() + "actvity" + bracket + region + characterId;
        var ladder = await db.ListRangeAsync(keyAndRegion);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return ladder.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PvpLeaderboardEntryandTime>(player!);
        }).ToList();
    }
    public async Task InsertToBracketActivityPage(string bracket, string region, PvpLeaderboardEntry oldPlayer, PvpLeaderboardEntry newPlayer, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var OldPvpLeaderboardEntryandTime = new PvpLeaderboardEntryandTime
        {
            Character = oldPlayer.Character,
            Faction = oldPlayer.Faction,
            Rank = oldPlayer.Rank,
            Rating = oldPlayer.Rating,
            SeasonMatchStatistics = oldPlayer.SeasonMatchStatistics,
            Tier = oldPlayer.Tier,
            Time = DateTime.Now.Subtract(TimeSpan.FromHours(3))
        };
        var NewPvpLeaderboardEntryandTime = new PvpLeaderboardEntryandTime
        {
            Character = newPlayer.Character,
            Faction = newPlayer.Faction,
            Rank = newPlayer.Rank,
            Rating = newPlayer.Rating,
            SeasonMatchStatistics = newPlayer.SeasonMatchStatistics,
            Tier = newPlayer.Tier,
            Time = DateTime.Now
        };
        var newPlayerActivity = new PlayerActivity
        {
            OldPlayer = OldPvpLeaderboardEntryandTime,
            NewPlayer = NewPvpLeaderboardEntryandTime
        };
        var db = redis.GetDatabase();
        await db.ListRightPushAsync(flavor.KeyPrefix() + "actvity" + bracket + region, JsonSerializer.Serialize(newPlayerActivity));
    }
    public async Task BracketPlayerExpiration(string bracket, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = flavor.KeyPrefix() + "actvity" + bracket + region;
        var expiredPlayers = await GetBracketActivityPage(bracket, region);
        int c = 0;
        foreach (var expiredPlayer in expiredPlayers)
        {
            if (expiredPlayer == null || (DateTime.Now - expiredPlayer!.NewPlayer.Time) > TimeSpan.FromHours(12))
            {
                c++;
            }
        }
        if (c > 0)
        {
            await db.ListTrimAsync(keyAndRegion, c, -1);
        }
    }
    public async Task<IEnumerable<PlayerActivity?>> GetBracketActivityPage(string bracket, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = flavor.KeyPrefix() + "actvity" + bracket + region;
        var ladder = await db.ListRangeAsync(keyAndRegion);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return ladder.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PlayerActivity>(player!);
        }).Where(p => p != null && p.NewPlayer != null && p.OldPlayer != null).ToList();
    }
    public async Task<IEnumerable<PlayerActivity?>> GetBracketClassFilteredActivityPage(string bracket, string region, string characterClass, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = flavor.KeyPrefix() + "activity" + bracket + "_" + characterClass + "_" + region;
        var ladder = await db.ListRangeAsync(keyAndRegion);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return ladder.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PlayerActivity>(player!);
        }).Where(p => p != null && p.NewPlayer != null && p.OldPlayer != null).ToList();
    }
    public async Task<IEnumerable<PvpLeaderboardAndTime?>> GetLadderHistory(string key, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        region = GetDynamicRegion(region, flavor);
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = flavor.KeyPrefix() + key + region;

        var ladder = await db.ListRangeAsync(keyAndRegion);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return ladder.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PvpLeaderboardAndTime>(player!);
        }).ToList();
    }
    public Region GetRegion(string region)
    {
        if (region == "us" || region.Contains("-us"))
        {
            return Region.US;
        }
        return Region.Europe;
    }
    public Locale GetLocale(string region)
    {
        if (region == "us" || region.Contains("-us"))
        {
            return Locale.en_US;
        }
        return Locale.en_GB;
    }
    //seasons differ per flavor, so the namespace is derived here rather than assumed
    public async Task<int> GetSeason(string region, GameFlavor flavor = GameFlavor.MistsClassic) // get currSeason in redis
    {
        var ns = GetDynamicRegion(region, flavor);
        return await GetBlizzardDataCached<int>("GetCurrSeason" + ns, async () =>
        {
            var GetCurrSeason = await warcraftClient.GetPvpSeasonsIndexAsync(ns, GetRegion(ns), GetLocale(ns));
            return GetCurrSeason.Value.CurrentSeason.Id;
        }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }
    // get character summary in redis
    public async Task<CharacterPvpBracketStatistics> GetPvpBracketRating(string server, string characterName, string pvpBracket, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        //creates unique character key from their server, character name, and region (this will prevent any duplicates)
        region = GetProfileRegion(region, flavor);
        var result = await GetBlizzardDataCached<CharacterPvpBracketStatistics>("GetCharacterRating" + server + characterName + pvpBracket + region, async () =>
        {
            //gets character data from wow api
            //storing into GetCharacter and pulls data with server, characterName, and region
            var GetCharacter = await warcraftClient.GetCharacterPvpBracketStatisticsAsync(server, characterName, pvpBracket, region, GetRegion(region), GetLocale(region));
            if (GetCharacter != null)
            {
                return GetCharacter.Value;
            }
            return new CharacterPvpBracketStatistics();
        }, TimeSpan.FromHours(2)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        if (result == new CharacterPvpBracketStatistics())
        {
            redis.GetDatabase().KeyDelete(VersionedKey("GetCharacterRating" + server + characterName + pvpBracket + region));
            result = await GetBlizzardDataCached<CharacterPvpBracketStatistics>("GetCharacterRating" + server + characterName + pvpBracket + region, async () =>
            {
                //gets character data from wow api
                //storing into GetCharacter and pulls data with server, characterName, and region
                var GetCharacter = await warcraftClient.GetCharacterPvpBracketStatisticsAsync(server, characterName, pvpBracket, region, GetRegion(region), GetLocale(region));
                if (GetCharacter != null)
                {
                    return GetCharacter.Value;
                }
                return new CharacterPvpBracketStatistics();
            }, TimeSpan.FromHours(2)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        }
        return result;
    }
    public async Task<CharacterStatisticsSummary> GetCharacterStats(string server, string characterName, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        //creates unique character key from their server, character name, and region (this will prevent any duplicates)
        region = GetProfileRegion(region, flavor);
        var result = await GetBlizzardDataCached<CharacterStatisticsSummary>("GetCharacterStats" + server + characterName + region, async () =>
        {
            //gets character data from wow api
            //storing into GetCharacter and pulls data with server, characterName, and region
            var GetCharacterStats = await warcraftClient.GetCharacterStatisticsSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
            if (GetCharacterStats != null)
            {
                return GetCharacterStats.Value;
            }
            return new CharacterStatisticsSummary();
        }, TimeSpan.FromHours(6)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        if (result == new CharacterStatisticsSummary())
        {
            redis.GetDatabase().KeyDelete(VersionedKey("GetCharacterStats" + server + characterName + region));
            result = await GetBlizzardDataCached<CharacterStatisticsSummary>("GetCharacterStats" + server + characterName + region, async () =>
            {
                //gets character data from wow api
                //storing into GetCharacter and pulls data with server, characterName, and region
                var GetCharacterStats = await warcraftClient.GetCharacterStatisticsSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
                if (GetCharacterStats != null)
                {
                    return GetCharacterStats.Value;
                }
                return new CharacterStatisticsSummary();
            }, TimeSpan.FromHours(6)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        }
        return result;
    }

    public async Task<CharacterProfileSummary> GetCharSummary(string server, string characterName, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        logger.LogInformation("Getting char summary for" + " " + characterName + " " + server);
        //creates unique character key from their server, character name, and region (this will prevent any duplicates)
        region = GetProfileRegion(region, flavor);
        var result = await GetBlizzardDataCached<CharacterProfileSummary>("GetCharacter" + server + characterName + region, async () =>
        {
            //gets character data from wow api
            //storing into GetCharacter and pulls data with server, characterName, and region
            var GetCharacter = await warcraftClient.GetCharacterProfileSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
            if (GetCharacter != null)
            {
                //call method to insert char name in cache
                await InsertCacheCharacter(characterName, server, region, flavor);
                return GetCharacter.Value;
            }
            return new CharacterProfileSummary();
        }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        if (result == new CharacterProfileSummary())
        {
            redis.GetDatabase().KeyDelete(VersionedKey("GetCharacter" + server + characterName + region));
            result = await GetBlizzardDataCached<CharacterProfileSummary>("GetCharacter" + server + characterName + region, async () =>
            {
                //gets character data from wow api
                //storing into GetCharacter and pulls data with server, characterName, and region
                var GetCharacter = await warcraftClient.GetCharacterProfileSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
                if (GetCharacter != null)
                {
                    //call method to insert char name in cache
                    return GetCharacter.Value;
                }
                return new CharacterProfileSummary();
            }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        }
        return result;
    }

    // get character summary in redis for character appearance
    public async Task<CharacterAppearanceSummary> GetCharAppearance(string server, string characterName, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        region = GetProfileRegion(region, flavor);
        var result = await GetBlizzardDataCached<CharacterAppearanceSummary>("GetCharacterAppearance" + server + characterName + region, async () =>
        {
            //gets character data from wow api
            //storing into GetCharacter and pulls data with server, characterName, and region
            var GetCharacter = await warcraftClient.GetCharacterAppearanceSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
            if (GetCharacter != null)
            {
                //call method to insert char name in cache
                return GetCharacter.Value;
            }
            return new CharacterAppearanceSummary();
        }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        if (result == new CharacterAppearanceSummary())
        {
            redis.GetDatabase().KeyDelete(VersionedKey("GetCharacterAppearance" + server + characterName + region));
            result = await GetBlizzardDataCached<CharacterAppearanceSummary>("GetCharacterAppearance" + server + characterName + region, async () =>
            {
                //gets character data from wow api
                //storing into GetCharacter and pulls data with server, characterName, and region
                var GetCharacter = await warcraftClient.GetCharacterAppearanceSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
                if (GetCharacter != null)
                {
                    //call method to insert char name in cache
                    return GetCharacter.Value;
                }
                return new CharacterAppearanceSummary();
            }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        }
        return result;
    }
    // get character summary in redis for character appearance
    public async Task<CharacterAchievementsSummary> GetCharacterAchievements(string server, string characterName, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        region = GetProfileRegion(region, flavor);
        var result = await GetBlizzardDataCached<CharacterAchievementsSummary>("GetCharacterAchievements" + server + characterName + region, async () =>
        {
            //gets character data from wow api
            //storing into GetCharacter and pulls data with server, characterName, and region
            var GetCharacter = await warcraftClient.GetCharacterAchievementsSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
            if (GetCharacter != null)
            {
                //call method to insert char name in cache
                return GetCharacter.Value;
            }
            return new CharacterAchievementsSummary();
        }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        if (result == new CharacterAchievementsSummary())
        {
            redis.GetDatabase().KeyDelete(VersionedKey("GetCharacterAchievements" + server + characterName + region));
            result = await GetBlizzardDataCached<CharacterAchievementsSummary>("GetCharacterAchievements" + server + characterName + region, async () =>
            {
                //gets character data from wow api
                //storing into GetCharacter and pulls data with server, characterName, and region
                var GetCharacter = await warcraftClient.GetCharacterAchievementsSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
                if (GetCharacter != null)
                {
                    //call method to insert char name in cache
                    return GetCharacter.Value;
                }
                return new CharacterAchievementsSummary();
            }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        }
        return result;
    }
    // get character summary in redis for character equipment
    public async Task<CharacterEquipmentSummary> GetCharEquipment(string server, string characterName, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        region = GetProfileRegion(region, flavor);
        var result = await GetBlizzardDataCached<CharacterEquipmentSummary>("GetCharacterEquipment" + server + characterName + region, async () =>
        {
            //gets character data from wow api
            //storing into GetCharacter and pulls data with server, characterName, and region
            var GetCharacter = await warcraftClient.GetCharacterEquipmentSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
            if (GetCharacter != null)
            {
                //call method to insert char name in cache
                return GetCharacter.Value;
            }
            return new CharacterEquipmentSummary();
        }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        if (result == new CharacterEquipmentSummary())
        {
            redis.GetDatabase().KeyDelete(VersionedKey("GetCharacterEquipment" + server + characterName + region));
            result = await GetBlizzardDataCached<CharacterEquipmentSummary>("GetCharacterEquipment" + server + characterName + region, async () =>
            {
                //gets character data from wow api
                //storing into GetCharacter and pulls data with server, characterName, and region
                var GetCharacter = await warcraftClient.GetCharacterEquipmentSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
                if (GetCharacter != null)
                {
                    //call method to insert char name in cache
                    return GetCharacter.Value;
                }
                return new CharacterEquipmentSummary();
            }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        }
        return result;
    }
    //for this method, we are retrieving a list of characters for CachedCharacters
    public async Task<List<string>> CachedCharacters(GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        //CachedCharacters is the KEY for CachedCharacters method, ListRange makes CachedCharacters a list
        var characterList = await db.ListRangeAsync(flavor.KeyPrefix() + "CachedCharacters");
        return characterList.Select(character =>
        {
            //convert character to string (for our list of strings)
            return character.ToString();
        }).ToList();
    }

    //for this method, we are putting in a single character for InsertCacheCharacter
    public async Task InsertCacheCharacter(string characterName, string server, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        await db.ListRemoveAsync(flavor.KeyPrefix() + "CachedCharacters", characterName.ToLowerInvariant() + "," + server + "," + region);
        //CachedCharacters is the KEY for CachedCharacters method, and pushes character into already made list, string with commas seperated by it (JAX SAYS THIS IS BAD DONT REPLICATE)
        await db.ListRightPushAsync(flavor.KeyPrefix() + "CachedCharacters", characterName.ToLowerInvariant() + "," + server + "," + region);
    }
    public async Task<List<PvpLeaderboardEntry?>> CachedClassCharacters(string region, string characterClass, string bracket, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        //connect strings from InsertCacheClassCharacter to key in CachedClassCharacters
        string key = flavor.KeyPrefix() + bracket + "_" + characterClass + "_" + region;

        //views filtered list from the key (changes from bracket or characterClass from InsertCacheClassCharacter)
        var characterList = await db.ListRangeAsync(key);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return characterList.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PvpLeaderboardEntry>(player!);
        }).ToList();
    }
    public async Task ClearAllCachedClassCharacters(string bracket, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        List<string> wowClasses = ["All Classes", "Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Druid", "Monk"];
        var db = redis.GetDatabase(); //var to redis database
        //clears all cached class characters
        foreach (var wowClass in wowClasses)
        {
            await db.KeyDeleteAsync(flavor.KeyPrefix() + bracket + "_" + wowClass + "_" + region);
            await BracketClassPlayerExpiration(bracket, region, wowClass, flavor);
        }
    }
    public async Task SavePvpCharacterSummary(PvpCharacterSummary newPvpCharacterSummary, string bracket, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        //add spec and class of character from pvpleaderboardentries to dbleaderboardentries 
        var db = redis.GetDatabase();
        string key = flavor.KeyPrefix() + bracket + "_" + region + "_LADDER_COMBINED";
        
        var serializedPvPCharSummary = JsonSerializer.Serialize(newPvpCharacterSummary);
        await db.ListRemoveAsync(key, serializedPvPCharSummary);
        await db.ListRightPushAsync(key, serializedPvPCharSummary);

    }
        public async Task ClearPvpCharacterSummary(string bracket, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase();
        await db.KeyDeleteAsync(flavor.KeyPrefix() + bracket + "_" + region + "_LADDER_COMBINED");

    }
    public async Task<List<PvpCharacterSummary?>> GetPvpLeaderSummaries(string bracket, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        var characterList = await db.ListRangeAsync(flavor.KeyPrefix() + bracket + "_" + region + "_LADDER_COMBINED");
        return characterList.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PvpCharacterSummary>(player!);
        }).ToList();
    }
    public async Task InsertCacheClassCharacter(string bracket, PvpLeaderboardEntry player, CharacterProfileSummary characterClass, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    //these all return a string, allowing us to connected to cachedclasscharacters function
    {
        if (region == null) { return; }
        if (bracket == null) { return; }
        if (characterClass == null) { return; }
        if (characterClass.CharacterClass == null) { return; }
        string key = flavor.KeyPrefix() + bracket + "_" + characterClass.CharacterClass.Name + "_" + region;
        var db = redis.GetDatabase(); //var to redis database
        //looks at a player, finds the correct data and puts it inside the key values, then goes inside of sectioned list of data
        var serializedPlayer = JsonSerializer.Serialize(player);
        await db.ListRemoveAsync(key, serializedPlayer);
        await db.ListRightPushAsync(key, serializedPlayer);
    }
    public async Task InsertActivityCacheClassCharacter(string bracket, PvpLeaderboardEntry oldPlayer, PvpLeaderboardEntry newPlayer, CharacterProfileSummary characterClass, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    //these all return a string, allowing us to connect ed to cachedclasscharacters function
    {
        var OldPvpLeaderboardEntryandTime = new PvpLeaderboardEntryandTime
        {
            Character = oldPlayer.Character,
            Faction = oldPlayer.Faction,
            Rank = oldPlayer.Rank,
            Rating = oldPlayer.Rating,
            SeasonMatchStatistics = oldPlayer.SeasonMatchStatistics,
            Tier = oldPlayer.Tier,
            Time = DateTime.Now.Subtract(TimeSpan.FromHours(3))
        };
        var NewPvpLeaderboardEntryandTime = new PvpLeaderboardEntryandTime
        {
            Character = newPlayer.Character,
            Faction = newPlayer.Faction,
            Rank = newPlayer.Rank,
            Rating = newPlayer.Rating,
            SeasonMatchStatistics = newPlayer.SeasonMatchStatistics,
            Tier = newPlayer.Tier,
            Time = DateTime.Now
        };
        var newPlayerActivity = new PlayerActivity
        {
            OldPlayer = OldPvpLeaderboardEntryandTime,
            NewPlayer = NewPvpLeaderboardEntryandTime
        };
        if (oldPlayer == null) { return; }
        if (newPlayer == null) { return; }
        if (region == null) { return; }
        if (bracket == null) { return; }
        if (characterClass == null) { return; }
        if (characterClass.CharacterClass == null) { return; }
        string key = flavor.KeyPrefix() + "activity" + bracket + "_" + characterClass.CharacterClass.Name + "_" + region;
        var db = redis.GetDatabase(); //var to redis database
        //looks at a player, finds the correct data and puts it inside the key values, then goes inside of sectioned list of data
        var serializedPlayer = JsonSerializer.Serialize(newPlayerActivity);
        await db.ListRemoveAsync(key, serializedPlayer);
        await db.ListRightPushAsync(key, serializedPlayer);
    }
    public async Task BracketClassPlayerExpiration(string bracket, string region, string characterClass, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = flavor.KeyPrefix() + "activity" + bracket + "_" + characterClass + "_" + region;
        var expiredPlayers = await GetBracketClassFilteredActivityPage(bracket, region, characterClass);
        int c = 0;
        foreach (var expiredPlayer in expiredPlayers)
        {
            if (expiredPlayer == null || (DateTime.Now - expiredPlayer!.NewPlayer.Time) > TimeSpan.FromHours(12))
            {
                c++;
            }
        }
        if (c > 0)
        {
            await db.ListTrimAsync(keyAndRegion, c, -1);
        }
    }
    public string GetProfileRegion(string region, GameFlavor flavor = GameFlavor.MistsClassic)
        => "profile-" + flavor.NamespaceSegment() + region;
    public string GetDynamicRegion(string region, GameFlavor flavor = GameFlavor.MistsClassic)
        => "dynamic-" + flavor.NamespaceSegment() + region;
    public string GetStaticRegion(string region, GameFlavor flavor = GameFlavor.MistsClassic)
        => "static-" + flavor.NamespaceSegment() + region;

    //gets an item's icon media, scoped to the game flavor so retail and classic
    //never share a cache entry for the same item id
    public async Task<ItemMedia?> GetItemIcon(int itemId, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        region = GetStaticRegion(region, flavor);
        return await GetBlizzardDataCached<ItemMedia?>("ItemIcon" + itemId + region, async () =>
        {
            var getItemIcon = await warcraftClient.GetItemMediaAsync(itemId, region, GetRegion(region), GetLocale(region));
            //a failed request still returns a result object, with Success false and a null Value.
            //returning null keeps the failure out of the cache so the next call retries.
            return getItemIcon.Success ? getItemIcon.Value : null;
        }, TimeSpan.FromDays(30));
    }
    //inventory type names Blizzard returns, mapped to the numbers the model viewer files armor under
    private static readonly Dictionary<string, int> InventoryTypes = new()
    {
        ["HEAD"] = 1, ["NECK"] = 2, ["SHOULDER"] = 3, ["BODY"] = 4, ["CHEST"] = 5, ["WAIST"] = 6,
        ["LEGS"] = 7, ["FEET"] = 8, ["WRIST"] = 9, ["HAND"] = 10, ["FINGER"] = 11, ["TRINKET"] = 12,
        ["WEAPON"] = 13, ["SHIELD"] = 14, ["RANGED"] = 15, ["CLOAK"] = 16, ["TWOHWEAPON"] = 17,
        ["BAG"] = 18, ["TABARD"] = 19, ["ROBE"] = 20, ["WEAPONMAINHAND"] = 21, ["WEAPONOFFHAND"] = 22,
        ["HOLDABLE"] = 23, ["AMMO"] = 24, ["THROWN"] = 25, ["RANGEDRIGHT"] = 26, ["QUIVER"] = 27, ["RELIC"] = 28,
    };

    //Model viewer display info for an item: item -> appearance -> item_display_info_id.
    //Retail only - Blizzard has no item-appearance endpoint for classic (it 404s).
    //Raid and PvP gear lists one appearance per variant and the equipment response can't say
    //which is worn, so this takes the first, which is also the one Wowhead shows.
    //Failures return null and are not cached, so the next request retries.
    public async Task<ItemDisplayInfo?> GetItemDisplayInfo(int itemId, string region, GameFlavor flavor)
    {
        var ns = GetStaticRegion(region, flavor);
        return await GetBlizzardDataCached<ItemDisplayInfo?>("ItemDisplayInfo" + itemId + ns, async () =>
        {
            var item = await warcraftClient.GetItemAsync(itemId, ns, GetRegion(ns), GetLocale(ns));
            var appearanceId = item.Success ? item.Value.Appearances?.FirstOrDefault()?.Id : null;
            if (appearanceId == null)
            {
                return null;
            }
            var appearance = await warcraftClient.GetItemAppearanceAsync(appearanceId.Value, ns, GetRegion(ns), GetLocale(ns));
            if (!appearance.Success)
            {
                return null;
            }
            var inventoryType = InventoryTypes.GetValueOrDefault(item.Value.InventoryType?.Type ?? "", 0);
            return new ItemDisplayInfo(itemId, inventoryType, appearance.Value.Id, appearance.Value.ItemDisplayInfoId);
        }, TimeSpan.FromDays(30));
    }
    public async Task ClearLeaderboard(string bracket, string region, GameFlavor flavor = GameFlavor.MistsClassic)
    {
        region = GetDynamicRegion(region, flavor);
        string key = "";
        if (bracket == "rbg")
        {
            key = "currRbgLadder" + region;
        }
        if (bracket == "2v2")
        {
            key = "get2v2Leaderboard" + region;
        }
        if (bracket == "3v3")
        {
            key = "get3v3Leaderboard" + region;
        }
        if (bracket == "5v5")
        {
            key = "get5v5Leaderboard" + region;
        }
        var db = redis.GetDatabase();
        await db.KeyDeleteAsync(key);
    }

}
