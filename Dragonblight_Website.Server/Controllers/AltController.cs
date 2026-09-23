using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;

namespace Dragonblight_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AltController : ControllerBase
    {
        private readonly ILogger<AltController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable

        public AltController(ILogger<AltController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData;
        }

        [HttpGet("GetAlts")]
        public async Task<ActionResult<List<GetAltsResponse>>> GetAlts(string server, string characterName, string region)
        {
            try
            {
                //flavor comes from the X-Game-Flavor header like every other endpoint
                var flavor = HttpContext.GetGameFlavor();
                server = server.ToLower();
                characterName = characterName.ToLower();
                //the account's other characters, as "charactername,server"
                var altInfo = await _warcraftCachedData.GetAlts(server, characterName, region, flavor);
                var alts = new List<GetAltsResponse>();
                foreach (var alt in altInfo)
                {
                    var parts = alt.Split(',');
                    if (parts.Length != 2)
                    {
                        continue;
                    }
                    var altName = parts[0];
                    var altServer = parts[1];
                    //class and spec come out of the summary caches the profile pages already fill
                    var summary = await _warcraftCachedData.GetCharSummary(altServer, altName, region, flavor);
                    alts.Add(new GetAltsResponse
                    {
                        name = summary?.Name ?? altName,
                        realm = altServer,
                        classchar = summary?.CharacterClass?.Name,
                        spec = await _warcraftCachedData.GetCharacterSpecName(altServer, altName, region, flavor),
                        rating2v2 = await BracketRating(altServer, altName, "2v2", region, flavor),
                        rating3v3 = await BracketRating(altServer, altName, "3v3", region, flavor),
                        ratingRbg = await BracketRating(altServer, altName, "rbg", region, flavor)
                    });
                }
                //a character with no alts is an empty list, not a missing character
                return Ok(alts);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching alt info for {CharacterName} in {Region}", characterName, region);
                return StatusCode(500, "Internal server error");
            }
        }

        //an unplayed bracket comes back as an empty statistics object, which reads as rating 0
        private async Task<int> BracketRating(string server, string characterName, string bracket, string region, GameFlavor flavor)
        {
            var stats = await _warcraftCachedData.GetPvpBracketRating(server, characterName, bracket, region, flavor);
            return stats?.Rating ?? 0;
        }
    }
    public class GetAltsResponse
    {
        [JsonPropertyName("name")]
        public string? name { get; set; }

        [JsonPropertyName("realm")]
        public string? realm { get; set; }

        [JsonPropertyName("classchar")]
        public string? classchar { get; set; }

        [JsonPropertyName("spec")]
        public string? spec { get; set; }

        [JsonPropertyName("rating2v2")]
        public int? rating2v2 { get; set; }

        [JsonPropertyName("rating3v3")]
        public int? rating3v3 { get; set; }

        [JsonPropertyName("ratingRbg")]
        public int? ratingRbg { get; set; }
    }
}
