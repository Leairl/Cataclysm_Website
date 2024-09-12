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
        public async Task<ActionResult<List<ActivityCharacterSummary>>> GetLadderHistory(string key, string region, int skip, int take)
        {
            var result = new List<ActivityCharacterSummary>();
            var LadderHistory = await _warcraftCachedData.GetLadderHistory(key, region);
            // Iterate through the list in reverse order and compare last element with the previous
            for (int i = LadderHistory.Count() - 1; i > 0; i--)
            {
                var currLadder = LadderHistory.ElementAt(i);
                var previousLadder = LadderHistory.ElementAt(i - 1);
                foreach (
                    var player in currLadder.Entries
                )
                {
                    var previousPlayer = previousLadder?.Entries.FirstOrDefault(prevPlayer => prevPlayer.Character.Id == player.Character.Id);
                    if (previousPlayer != null && player.SeasonMatchStatistics.Played != previousPlayer?.SeasonMatchStatistics.Played)
                    {
                        result.Add(new ActivityCharacterSummary { currPvpEntry = player, prevPvpEntry = previousPlayer, timeDifference = currLadder.Time.TimeAgo() });
                        //current ladder break
                        if (result.Count() >= skip + take)
                        {
                            break;
                        }
                    }

                }
                //ladder history break
                if (result.Count() >= skip + take)
                {
                    break;
                }
            }
             //getting character summary on page we are on, going through each character that rating has changed in the result list
            result = result.Skip(skip).Take(take).ToList();
            var asyncResult = result.Select(async activity => {
                activity.charSummary = await _warcraftCachedData.GetCharSummary(activity.currPvpEntry.Character.Realm.Slug, activity.currPvpEntry.Character.Name, region);
                return activity;
            });
            return Ok(await Task.WhenAll(asyncResult));
            

        }
        [HttpPost("LadderHistoryFiltered")]
        public async Task<ActionResult<List<ActivityCharacterSummary>>> GetLadderHistoryFiltered(string key, string region, List<string> classes, int skip, int take)
        {
            var result = new List<ActivityCharacterSummary>();
            var LadderHistory = await _warcraftCachedData.GetLadderHistory(key, region);
            // Iterate through the list in reverse order and compare last element with the previous
            for (int i = LadderHistory.Count() - 1; i > 0; i--)
            {
                var currLadder = LadderHistory.ElementAt(i);
                var previousLadder = LadderHistory.ElementAt(i - 1);
                foreach (
                    var player in currLadder.Entries
                )
                {
                    var previousPlayer = previousLadder.Entries.FirstOrDefault(prevPlayer => prevPlayer.Character.Id == player.Character.Id);
                    if (previousPlayer != null && player.SeasonMatchStatistics.Played != previousPlayer?.SeasonMatchStatistics.Played)
                    {
                        var charSummary = await _warcraftCachedData.GetCharSummary(player.Character.Realm.Slug, player.Character.Name, region);
                        if (charSummary != null && classes.Contains(charSummary.CharacterClass.Name)){
                            result.Add(new ActivityCharacterSummary { 
                                charSummary = charSummary,
                                currPvpEntry = player, 
                                prevPvpEntry = previousPlayer, 
                                timeDifference = currLadder.Time.TimeAgo() 
                            });
                        }
                        //current ladder break
                        if (result.Count() >= skip + take)
                        {
                            break;
                        }
                    }

                }
                //ladder history break
                if (result.Count() >= skip + take)
                {
                    break;
                }
            }
            //getting character summary on page we are on, going through each character that rating has changed in the result list
            result = result.Skip(skip).Take(take).ToList();
            return Ok(result);
        }
        public class ActivityCharacterSummary
        {
            [JsonPropertyName("time")]
            public string timeDifference { get; init; }

            [JsonPropertyName("currPvpEntry")]
            public PvpLeaderboardEntry currPvpEntry { get; init; }

            [JsonPropertyName("prevPvpEntry")]
            public PvpLeaderboardEntry prevPvpEntry { get; init; }

            [JsonPropertyName("charSummary")]
            public CharacterProfileSummary charSummary { get; set; }
        }
    }
}