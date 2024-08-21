using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TalentController : ControllerBase
    {
        private readonly ILogger<TalentController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public TalentController(ILogger<TalentController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        "dynamic-classic-us" is static name for region in us, need to find other static region names in developer.battle.net
        */
        [HttpGet("GetCharacterTalents")]
        public async Task<ActionResult<CharacterSpecializationsSummary>> GetCharacterTalents(string server, string characterName, string region)
        {
            var  result = await _warcraftCachedData.GetPlayerTalents(server.ToLower(), characterName.ToLower(), region);
            return Ok(result);

        }
    }
}