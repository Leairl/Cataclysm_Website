using System.Text.Json;
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
        await SaveToRedis(key, BlizzardData, expiration); //calls to savetoredis method with blizzardData (set in other methods below, and is currently a generic function here)
        return BlizzardData; //returns warcraftclient data after saved to redis on UI
    }

    public async Task<T> GetBlizzardDataCached<T>(string key, Func<Task<T>> BlizzardCall, TimeSpan expiration)
    {
        //has unique key for each character, results in no duplicate characters pulled from redis
        var res = await GetRedisData<T>(key);
        if (res == null || res is 0)
        {
            res = await GetBlizzardData(key, BlizzardCall, expiration);
        }
        return res;
    }
    public async Task<PvpLeaderboard> Get2v2Leaderboard(string region)
    {
        region = GetDynamicRegion(region);
        return await GetBlizzardDataCached<PvpLeaderboard>("get2v2Leaderboard" + region, async () =>
        {
            var curr2v2Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region), "2v2", region, GetRegion(region), GetLocale(region));
            return curr2v2Leaderboard.Value;
        }, TimeSpan.FromHours(3)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }

    public async Task<PvpLeaderboard> Get3v3Leaderboard(string region)
    {
        region = GetDynamicRegion(region);
        return await GetBlizzardDataCached<PvpLeaderboard>("get3v3Leaderboard" + region, async () =>
        {
            var curr3v3Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region), "3v3", region, GetRegion(region), GetLocale(region));
            return curr3v3Leaderboard.Value;
        }, TimeSpan.FromHours(3)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }


    public async Task<PvpLeaderboard> Get5v5Leaderboard(string region)
    {
        region = GetDynamicRegion(region);
        return await GetBlizzardDataCached<PvpLeaderboard>("get5v5Leaderboard" + region, async () =>
        {
            var curr5v5Leaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region), "5v5", region, GetRegion(region), GetLocale(region));
            return curr5v5Leaderboard.Value;
        }, TimeSpan.FromHours(3)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }

    public async Task<CharacterSpecializationsSummary> GetPlayerTalents(string server, string characterName, string region)
    {
        region = GetProfileRegion(region);
        return await GetBlizzardDataCached<CharacterSpecializationsSummary>("characterSpecSummary" + characterName + server + region, async () =>
        {
            var charSpecSummary = await warcraftClient.GetCharacterSpecializationsSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
            return charSpecSummary.Value;
        }, TimeSpan.FromHours(6));
    }

        public async Task<string> GetCharacterSpecName(string server, string characterName, string region)
    {
        return await GetBlizzardDataCached<string>("characterSpecName" + characterName + server + region, async () =>
        {
            var talents = await GetPlayerTalents(server, characterName, region);
            var activeSpecialization = talents?.SpecializationGroups.Where(s => s.IsActive).FirstOrDefault();
            var specName = activeSpecialization?.Specializations?.OrderByDescending(spec => spec.SpentPoints)?.FirstOrDefault()?.SpecializationName;
            return specName ?? "";
        }, TimeSpan.FromHours(6));
    }

    public async Task<PvpLeaderboard> GetRBGLeaderboard(string region) //get rbgLeaderboard in redis
    {
        region = GetDynamicRegion(region);
        return await GetBlizzardDataCached<PvpLeaderboard>("currRbgLadder" + region, async () =>
        {
            var currRbgLadder = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region), "rbg", region, GetRegion(region), GetLocale(region));
            return currRbgLadder.Value;
        }, TimeSpan.FromHours(3)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }
    public async Task<PvpRewardsIndex> GetPvPRewards(string region)
    {

        region = GetDynamicRegion(region);
        int season = await GetSeason(region);
        return await GetBlizzardDataCached<PvpRewardsIndex>("GetPvPRewards" + season + region, async () =>
        {
            var ActivePvpRewards = await warcraftClient.GetPvpRewardsIndexAsync(season, region, GetRegion(region), GetLocale(region));
            return ActivePvpRewards.Value;
        }, TimeSpan.FromHours(6)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }
    public async Task AddToLadderHistory(string key, string region, PvpLeaderboard currLadder) //get rbgLeaderboard in redis
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
        await db.ListRightPushAsync(key + region, JsonSerializer.Serialize(currLadderAndTime));
    }
    public async Task InsertToPlayerPageActivity(string bracket, string region, PvpLeaderboardEntry player)
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
        await db.ListRightPushAsync("actvity" + bracket + region + player.Character.Id, JsonSerializer.Serialize(PvpLeaderboardEntryandTime));
    }
    public async Task<IEnumerable<PvpLeaderboardEntryandTime?>> GetPlayerPageActivity(string bracket, string region, string characterId)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = "actvity" + bracket + region + characterId;
        var ladder = await db.ListRangeAsync(keyAndRegion);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return ladder.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PvpLeaderboardEntryandTime>(player!);
        }).ToList();
    }
    public async Task InsertToBracketActivityPage(string bracket, string region, PvpLeaderboardEntry oldPlayer, PvpLeaderboardEntry newPlayer)
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
        await db.ListRightPushAsync("actvity" + bracket + region, JsonSerializer.Serialize(newPlayerActivity));
    }
    public async Task BracketPlayerExpiration(string bracket, string region)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = "actvity" + bracket + region;
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
    public async Task<IEnumerable<PlayerActivity?>> GetBracketActivityPage(string bracket, string region)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = "actvity" + bracket + region;
        var ladder = await db.ListRangeAsync(keyAndRegion);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return ladder.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PlayerActivity>(player!);
        }).Where(p => p != null && p.NewPlayer != null && p.OldPlayer != null).ToList();
    }
    public async Task<IEnumerable<PlayerActivity?>> GetBracketClassFilteredActivityPage(string bracket, string region, string characterClass)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = "activity" + bracket + "_" + characterClass + "_" + region;
        var ladder = await db.ListRangeAsync(keyAndRegion);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return ladder.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PlayerActivity>(player!);
        }).Where(p => p != null && p.NewPlayer != null && p.OldPlayer != null).ToList();
    }
    public async Task<IEnumerable<PvpLeaderboardAndTime?>> GetLadderHistory(string key, string region)
    {
        region = GetDynamicRegion(region);
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = key + region;

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
    public async Task<int> GetSeason(string region) // get currSeason in redis
    {
        return await GetBlizzardDataCached<int>("GetCurrSeason" + region, async () =>
        {
            var GetCurrSeason = await warcraftClient.GetPvpSeasonsIndexAsync(region, GetRegion(region), GetLocale(region));
            return GetCurrSeason.Value.CurrentSeason.Id;
        }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of pvpleaderboard to get rbg ladder + region from redis
    }
    // get character summary in redis
    public async Task<CharacterPvpBracketStatistics> GetPvpBracketRating(string server, string characterName, string pvpBracket, string region)
    {
        //creates unique character key from their server, character name, and region (this will prevent any duplicates)
        region = GetProfileRegion(region);
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
            redis.GetDatabase().KeyDelete("GetCharacterRating" + server + characterName + pvpBracket + region);
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
    public async Task<CharacterStatisticsSummary> GetCharacterStats(string server, string characterName, string region)
    {
        //creates unique character key from their server, character name, and region (this will prevent any duplicates)
        region = GetProfileRegion(region);
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
            redis.GetDatabase().KeyDelete("GetCharacterStats" + server + characterName + region);
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

    public async Task<CharacterProfileSummary> GetCharSummary(string server, string characterName, string region)
    {
        logger.LogInformation("Getting char summary for" + " " + characterName + " " + server);
        //creates unique character key from their server, character name, and region (this will prevent any duplicates)
        region = GetProfileRegion(region);
        var result = await GetBlizzardDataCached<CharacterProfileSummary>("GetCharacter" + server + characterName + region, async () =>
        {
            //gets character data from wow api
            //storing into GetCharacter and pulls data with server, characterName, and region
            var GetCharacter = await warcraftClient.GetCharacterProfileSummaryAsync(server, characterName, region, GetRegion(region), GetLocale(region));
            if (GetCharacter != null)
            {
                //call method to insert char name in cache
                await InsertCacheCharacter(characterName, server, region);
                return GetCharacter.Value;
            }
            return new CharacterProfileSummary();
        }, TimeSpan.FromDays(1)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
        if (result == new CharacterProfileSummary())
        {
            redis.GetDatabase().KeyDelete("GetCharacter" + server + characterName + region);
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
    public async Task<CharacterAppearanceSummary> GetCharAppearance(string server, string characterName, string region)
    {
        region = GetProfileRegion(region);
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
            redis.GetDatabase().KeyDelete("GetCharacterAppearance" + server + characterName + region);
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
    public async Task<CharacterAchievementsSummary> GetCharacterAchievements(string server, string characterName, string region)
    {
        region = GetProfileRegion(region);
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
            redis.GetDatabase().KeyDelete("GetCharacterAchievements" + server + characterName + region);
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
    public async Task<CharacterEquipmentSummary> GetCharEquipment(string server, string characterName, string region)
    {
        region = GetProfileRegion(region);
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
            redis.GetDatabase().KeyDelete("GetCharacterEquipment" + server + characterName + region);
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
    public async Task<List<string>> CachedCharacters()
    {
        var db = redis.GetDatabase(); //var to redis database
        //CachedCharacters is the KEY for CachedCharacters method, ListRange makes CachedCharacters a list
        var characterList = await db.ListRangeAsync("CachedCharacters");
        return characterList.Select(character =>
        {
            //convert character to string (for our list of strings)
            return character.ToString();
        }).ToList();
    }

    //for this method, we are putting in a single character for InsertCacheCharacter
    public async Task InsertCacheCharacter(string characterName, string server, string region)
    {
        var db = redis.GetDatabase(); //var to redis database
        await db.ListRemoveAsync("CachedCharacters", characterName.ToLowerInvariant() + "," + server + "," + region);
        //CachedCharacters is the KEY for CachedCharacters method, and pushes character into already made list, string with commas seperated by it (JAX SAYS THIS IS BAD DONT REPLICATE)
        await db.ListRightPushAsync("CachedCharacters", characterName.ToLowerInvariant() + "," + server + "," + region);
    }
    public async Task<List<PvpLeaderboardEntry?>> CachedClassCharacters(string region, string characterClass, string bracket)
    {
        var db = redis.GetDatabase(); //var to redis database
        //connect strings from InsertCacheClassCharacter to key in CachedClassCharacters
        string key = bracket + "_" + characterClass + "_" + region;

        //views filtered list from the key (changes from bracket or characterClass from InsertCacheClassCharacter)
        var characterList = await db.ListRangeAsync(key);
        //convert player to pvpleaderboardentry (for our filtered list of strings)
        return characterList.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PvpLeaderboardEntry>(player!);
        }).ToList();
    }
    public async Task ClearAllCachedClassCharacters(string bracket, string region)
    {
        List<string> wowClasses = ["All Classes", "Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Druid"];
        var db = redis.GetDatabase(); //var to redis database
        //clears all cached class characters
        foreach (var wowClass in wowClasses)
        {
            await db.KeyDeleteAsync(bracket + "_" + wowClass + "_" + region);
            await BracketClassPlayerExpiration(bracket, region, wowClass);
        }
    }
    public async Task SavePvpCharacterSummary(PvpCharacterSummary newPvpCharacterSummary, string bracket, string region)
    {
        //add spec and class of character from pvpleaderboardentries to dbleaderboardentries 
        var db = redis.GetDatabase();
        string key = bracket + "_" + region + "_LADDER_COMBINED";
        
        var serializedPvPCharSummary = JsonSerializer.Serialize(newPvpCharacterSummary);
        await db.ListRemoveAsync(key, serializedPvPCharSummary);
        await db.ListRightPushAsync(key, serializedPvPCharSummary);

    }
        public async Task ClearPvpCharacterSummary(string bracket, string region)
    {
        var db = redis.GetDatabase();
        await db.KeyDeleteAsync(bracket + "_" + region + "_LADDER_COMBINED");

    }
    public async Task<List<PvpCharacterSummary?>> GetPvpLeaderSummaries(string bracket, string region)
    {
        var db = redis.GetDatabase(); //var to redis database
        var characterList = await db.ListRangeAsync(bracket + "_" + region + "_LADDER_COMBINED");
        return characterList.Where(p => p.HasValue).Select(player =>
        {
            //deserialized out of json to become an object.
            return JsonSerializer.Deserialize<PvpCharacterSummary>(player!);
        }).ToList();
    }
    public async Task InsertCacheClassCharacter(string bracket, PvpLeaderboardEntry player, CharacterProfileSummary characterClass, string region)
    //these all return a string, allowing us to connected to cachedclasscharacters function
    {
        if (region == null) { return; }
        if (bracket == null) { return; }
        if (characterClass == null) { return; }
        if (characterClass.CharacterClass == null) { return; }
        string key = bracket + "_" + characterClass.CharacterClass.Name + "_" + region;
        var db = redis.GetDatabase(); //var to redis database
        //looks at a player, finds the correct data and puts it inside the key values, then goes inside of sectioned list of data
        var serializedPlayer = JsonSerializer.Serialize(player);
        await db.ListRemoveAsync(key, serializedPlayer);
        await db.ListRightPushAsync(key, serializedPlayer);
    }
    public async Task InsertActivityCacheClassCharacter(string bracket, PvpLeaderboardEntry oldPlayer, PvpLeaderboardEntry newPlayer, CharacterProfileSummary characterClass, string region)
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
        string key = "activity" + bracket + "_" + characterClass.CharacterClass.Name + "_" + region;
        var db = redis.GetDatabase(); //var to redis database
        //looks at a player, finds the correct data and puts it inside the key values, then goes inside of sectioned list of data
        var serializedPlayer = JsonSerializer.Serialize(newPlayerActivity);
        await db.ListRemoveAsync(key, serializedPlayer);
        await db.ListRightPushAsync(key, serializedPlayer);
    }
    public async Task BracketClassPlayerExpiration(string bracket, string region, string characterClass)
    {
        var db = redis.GetDatabase(); //var to redis database
        string keyAndRegion = "activity" + bracket + "_" + characterClass + "_" + region;
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
    public string GetProfileRegion(string region)
    {
        return "profile-classic-" + region;
    }

    public string GetDynamicRegion(string region)
    {
        return "dynamic-classic-" + region;
    }
    public async Task<ItemMedia> GetItemIcon(int itemId)
    {
        return await GetBlizzardDataCached<ItemMedia>("ItemIcon" + itemId, async () =>
        {
            //gets character data from wow api
            //storing into GetCharacter and pulls data with server, characterName, and region
            var getItemIcon = await warcraftClient.GetItemMediaAsync(itemId, "static-classic-us");
            if (getItemIcon != null)
            {
                //call method to insert char name in cache
                return getItemIcon.Value;
            }
            return new ItemMedia();
        }, TimeSpan.FromDays(30)); //uses getredisproxy generic type of characterprofilesummer to get profile summary + region from redis
    }
    public async Task ClearLeaderboard(string bracket, string region)
    {
        region = GetDynamicRegion(region);
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
