using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StatController : ControllerBase
    {
        private readonly ILogger<StatController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public StatController(ILogger<StatController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        "dynamic-classic-us" is static name for region in us, need to find other static region names in developer.battle.net
        */
        [HttpGet("GetCharacterStats")]
        public async Task<ActionResult<CharacterStatisticsSummary>> GetCharacterStats(string server, string characterName, string region)
        {
            var  result = await _warcraftCachedData.GetCharacterStats(server.ToLower(), characterName.ToLower(), region);
            return Ok(result);

        }
    }
}