using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PvpStatController : ControllerBase
    {
        private readonly ILogger<PvpStatController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public PvpStatController(ILogger<PvpStatController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        "dynamic-classic-us" is static name for region in us, need to find other static region names in developer.battle.net
        */
        [HttpGet("GetPvPCurrentRating")]
        public async Task<ActionResult<List<CharacterPvpBracketStatistics>>> GetPvPCurrentRating(string server, string characterName, string region)
        {
            List<string> Brackets = ["2v2", "3v3", "5v5", "rbg"];
            List<CharacterPvpBracketStatistics> results = new List<CharacterPvpBracketStatistics>();
            foreach (var PvPBracket in Brackets)
            {
                results.Add(await _warcraftCachedData.GetPvpBracketRating(server.ToLower(), characterName.ToLower(), PvPBracket, region));
            }
            return Ok(results);
        }
    }
}