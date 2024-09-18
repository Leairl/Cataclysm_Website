using System.Security.Cryptography.X509Certificates;
using System.Text.Json.Serialization;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;
using TwitchLib.Api.Helix.Models.ChannelPoints;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PvpLeaderboardController : ControllerBase
    {
        private readonly ILogger<PvpLeaderboardController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public PvpLeaderboardController(ILogger<PvpLeaderboardController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        "dynamic-classic-us" is static name for region in us, need to find other static region names in developer.battle.net
        */
        [HttpGet("Get3v3Ladder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> Get3v3Ladder(int skip, int take, string region)
        {
            try
            {
                var fullLeaderboard = await _warcraftCachedData.Get3v3Leaderboard(region);
                var firstHundred3v3Players = fullLeaderboard.Entries.Skip(skip).Take(take);
                var Leaderboard3v3Entry = firstHundred3v3Players.Select(async entry3v3 =>
                {
                    // connect our controller to our service to retrieve character profile data
                    var ProfileSummaryEntry = await _warcraftCachedData.GetCharSummary(entry3v3.Character.Realm.Slug, entry3v3.Character.Name, region);
                    return new PvpCharacterSummary
                    {
                        // 2 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                        PvpEntry = entry3v3,
                        charSummary = ProfileSummaryEntry
                    };
                });
                var result = await Task.WhenAll(Leaderboard3v3Entry);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the 3v3 ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("Get2v2Ladder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> Get2v2Ladder(int skip, int take, string region)
        {
            try
            {
                var fullLeaderboard = await _warcraftCachedData.Get2v2Leaderboard(region);
                var firstHundred2v2Players = fullLeaderboard.Entries.Skip(skip).Take(take);
                var Leaderboard2v2Entry = firstHundred2v2Players.Select(async entry2v2 =>
                {
                    var ProfileSummaryEntry = await _warcraftCachedData.GetCharSummary(entry2v2.Character.Realm.Slug, entry2v2.Character.Name, region);
                    return new PvpCharacterSummary
                    {
                        // 2 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                        PvpEntry = entry2v2,
                        charSummary = ProfileSummaryEntry
                    };
                });
                var result = await Task.WhenAll(Leaderboard2v2Entry);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the 2v2 ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("Get5v5Ladder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> Get5v5Ladder(int skip, int take, string region)
        {
            try
            {
                var fullLeaderboard = await _warcraftCachedData.Get5v5Leaderboard(region);
                var firstHundred5v5Players = fullLeaderboard.Entries.Skip(skip).Take(take);
                var Leaderboard5v5Entry = firstHundred5v5Players.Select(async entry5v5 =>
                {
                    var ProfileSummaryEntry = await _warcraftCachedData.GetCharSummary(entry5v5.Character.Realm.Slug, entry5v5.Character.Name, region);
                    return new PvpCharacterSummary
                    {
                        // 2 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                        PvpEntry = entry5v5,
                        charSummary = ProfileSummaryEntry
                    };
                });
                var result = await Task.WhenAll(Leaderboard5v5Entry);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the 5v5 ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetRBGLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetRBGLadder(int skip, int take, string region)
        {
            try
            {
                var fullLeaderboard = await _warcraftCachedData.GetRBGLeaderboard(region);
                var firstHundredRBGPlayers = fullLeaderboard.Entries.Skip(skip).Take(take);
                var RBGLeaderboardEntry = firstHundredRBGPlayers.Select(async rbgEntry =>
                {
                    var ProfileSummaryEntry = await _warcraftCachedData.GetCharSummary(rbgEntry.Character.Realm.Slug, rbgEntry.Character.Name, region);
                    return new PvpCharacterSummary
                    {
                        // 2 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                        PvpEntry = rbgEntry,
                        charSummary = ProfileSummaryEntry
                    };
                });
                var result = await Task.WhenAll(RBGLeaderboardEntry);
                return Ok(result);
                //needs to create a seperate instance of pvpseasonreward to implement our rank property
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the RBG ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetPvPRewards")]
        public async Task<ActionResult<IEnumerable<PvpSeasonRewardWithRank>>> GetPvPRewards(string region)
        {
            try
            {
                var pvpSeasonRewardWithRank = (await _warcraftCachedData.GetPvPRewards(region)).Rewards.Select(async r =>
                {
                    return new PvpSeasonRewardWithRank
                    {
                        Bracket = r.Bracket,
                        Achievement = r.Achievement,
                        RatingCutoff = r.RatingCutoff,
                        Faction = r.Faction,
                        rank = await GetRankFromCutoffs(r.RatingCutoff, r.Bracket.Type, region)
                    };
                });
                var result = await Task.WhenAll(pvpSeasonRewardWithRank);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the PvP rewards.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
        // generates an instance to compare data with (using record) as opposed to checking the instance of that class
        public record PvpSeasonRewardWithRank : PvpSeasonReward
            
        {
           [JsonPropertyName("rank")]
            public int rank { get; set; }
        }
        [HttpGet("GetRankFromCutoffs")]
        public async Task<int> GetRankFromCutoffs(int cutoff, string bracket, string region)
        {
            try
            {
                if (bracket == "ARENA_2v2")
                {
                    return (await _warcraftCachedData.Get2v2Leaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "ARENA_3v3")
                {
                    return (await _warcraftCachedData.Get3v3Leaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "ARENA_5v5")
                {
                    return (await _warcraftCachedData.Get5v5Leaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "BATTLEGROUNDS")
                {
                    return (await _warcraftCachedData.GetRBGLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                return 0;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the rank from cutoffs.");
                return 0;
            }
        }

        [HttpPost("GetLadderFiltered")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetLadderFiltered(int skip, int take, string region, List<string> classes, string bracket)
        // foreach allows us to select multiple classes on our leaderboard
        {
            try
            {
                List<PvpCharacterSummary> result = [];
                List<PvpLeaderboardEntry?> filteredLadder = [];
                foreach (var charClass in classes)
                {
                    var fullLeaderboard = await _warcraftCachedData.CachedClassCharacters(region, charClass, bracket);
                    filteredLadder.AddRange(fullLeaderboard);
                }
                filteredLadder = filteredLadder.OrderBy(r => r?.Rank).Skip(skip).Take(take).ToList();
                //going through the list of all selected filters, connects our leaderboardentries to our profilesummary, and combines the players
                var LadderLeaderboardEntries = filteredLadder.Where(p => p != null).Select(p => p!).Select(async ladderEntry =>
                {
                    var ProfileSummaryEntries = await _warcraftCachedData.GetCharSummary(ladderEntry.Character.Realm.Slug, ladderEntry.Character.Name, region);
                    return new PvpCharacterSummary
                    {
                        // 2 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                        PvpEntry = ladderEntry,
                        charSummary = ProfileSummaryEntries
                    };
                });
                result = result.Concat(await Task.WhenAll(LadderLeaderboardEntries)).ToList();
                //displays correct ranking and returns all selected classes we want to filter
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the filtered ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
        public class PvpCharacterSummary
        {
            [JsonPropertyName("pvpEntry")]
            public required PvpLeaderboardEntry PvpEntry { get; init; }

            [JsonPropertyName("charSummary")]
            public required CharacterProfileSummary charSummary { get; init; }
        }
    }
}
