using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AchievementController : ControllerBase
    {
        private readonly ILogger<AchievementController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public AchievementController(ILogger<AchievementController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        "dynamic-classic-us" is static name for region in us, need to find other static region names in developer.battle.net
        */
        [HttpGet("GetCharacterAchievements")]
        public async Task<ActionResult<CharacterAchievementsSummary>> GetCharacterAchievements(string server, string characterName, string region)
        {
            var  result = await _warcraftCachedData.GetCharacterAchievements(server.ToLower(), characterName.ToLower(), region);
            return Ok(result);

        }
    }
}