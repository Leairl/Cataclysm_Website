using System.Net.WebSockets;
using System.Text.Json.Serialization;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;
using StackExchange.Redis;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly ILogger<ActivityController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public ActivityController(ILogger<ActivityController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        "dynamic-classic-us" is static name for region in us, need to find other static region names in developer.battle.net
        */
        [HttpGet("LadderHistory")]
        public async Task<ActionResult<List<ActivityCharacterSummary>>> GetLadderHistory(string bracket, string region, int skip, int take)
        {
            var fullLeaderboard = await _warcraftCachedData.GetBracketActivityPage(bracket, region);
            var firstHundredPlayers = fullLeaderboard.Skip(skip).Take(take);
            var LeaderboardEntry = firstHundredPlayers.Select(async p =>
            {
                var ProfileSummaryEntry = await _warcraftCachedData.GetCharSummary(p.NewPlayer.Character.Realm.Slug, p.NewPlayer.Character.Name, region);
                return new ActivityCharacterSummary
                {
                    // 2 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                    prevPvpEntry = p.OldPlayer,
                    currPvpEntry = p.NewPlayer,
                    timeDifference = p.NewPlayer.Time.TimeAgo(),
                    charSummary = ProfileSummaryEntry
                };
            });
            var result = await Task.WhenAll(LeaderboardEntry);
            return Ok(result);

        }
        [HttpPost("LadderHistoryFiltered")]
        public async Task<ActionResult<List<ActivityCharacterSummary>>> GetLadderHistoryFiltered(string bracket, string region, List<string> classes, int skip, int take)
        {
            List<ActivityCharacterSummary> result = [];
            List<PlayerActivity?> filteredLadder = [];
            foreach (
                var charClass in classes
            )
            {
                var fullLeaderboard = await _warcraftCachedData.GetBracketClassFilteredActivityPage(bracket, region, charClass);
                filteredLadder.AddRange(fullLeaderboard);
            }
            filteredLadder = filteredLadder.Where(p => p.NewPlayer != null).OrderBy(r => r?.NewPlayer?.Rank).Skip(skip).Take(take).ToList();
            //going through the list of all selected filters, connects our leaderboardentries to our profilesummary, and combines the players
            var LadderLeaderboardEntries = filteredLadder.Select(async ladderEntry =>
            {
                var ProfileSummaryEntry = await _warcraftCachedData.GetCharSummary(ladderEntry.NewPlayer.Character.Realm.Slug, ladderEntry.NewPlayer.Character.Name, region);
                return new ActivityCharacterSummary
                {
                    // 2 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                    prevPvpEntry = ladderEntry.OldPlayer,
                    currPvpEntry = ladderEntry.NewPlayer,
                    timeDifference = ladderEntry.NewPlayer.Time.TimeAgo(),
                    charSummary = ProfileSummaryEntry
                };  
            });
            result = result.Concat(await Task.WhenAll(LadderLeaderboardEntries)).ToList();
            //displays correct ranking and returns all selected classes we want to filter
            return Ok(result);

        }
        public class ActivityCharacterSummary
        {
            [JsonPropertyName("time")]
            public string timeDifference { get; init; }

            [JsonPropertyName("currPvpEntry")]
            public PvpLeaderboardEntryandTime currPvpEntry { get; init; }

            [JsonPropertyName("prevPvpEntry")]
            public PvpLeaderboardEntryandTime prevPvpEntry { get; init; }

            [JsonPropertyName("charSummary")]
            public CharacterProfileSummary charSummary { get; set; }
        }
    }
}