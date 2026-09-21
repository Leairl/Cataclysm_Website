using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;

namespace Dragonblight_Website.Server.Controllers
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
        //Retail only: the class, spec and hero talent trees the character's spec draws from,
        //with every node's grid position. Classic talents need no tree - the pane is a fixed
        //6x3 grid that ships with the client.
        [HttpGet("GetTalentTree")]
        public async Task<ActionResult<TalentTree>> GetTalentTree(int specId, string region)
        {
            try
            {
                var result = await _warcraftCachedData.GetTalentTree(specId, region, HttpContext.GetGameFlavor());
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting the talent tree.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetCharacterTalents")]
        public async Task<ActionResult<CharacterSpecializationsSummary>> GetCharacterTalents(string server, string characterName, string region)
        {
            try
            {
                var result = await _warcraftCachedData.GetPlayerTalents(server.ToLower(), characterName.ToLower(), region, HttpContext.GetGameFlavor());
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting character talents.");
                return StatusCode(500, "An error occurred while processing your request.");
            }

        }
    }
}