using System.Globalization;
using System.Text;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly ILogger<ProfileController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable

        public ProfileController(ILogger<ProfileController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        Allows a user to load up character profiles from blizzard API.
        */
        [HttpGet("GetProfile")]
        //Iactionresult used when you have action results incoming (200/401/404)
        public async Task<ActionResult<CharacterProfileSummary>> GetProfile(string server, string characterName, string region)
        {
            var  result = await _warcraftCachedData.GetCharSummary(server.ToLower(), characterName.ToLower(), region);
            return Ok(result);

        }
        [HttpGet("GetAppearance")]
        public async Task<ActionResult<CharacterAppearanceSummary>> GetAppearance(string server, string characterName, string region)
        {
            var  result = await _warcraftCachedData.GetCharAppearance(server.ToLower(), characterName.ToLower(), region);
            return Ok(result);

        }

        [HttpGet("GetEquipment")]
        public async Task<ActionResult<CharacterEquipmentSummary>> GetEquipment(string server, string characterName, string region)
        {
            var  result = await _warcraftCachedData.GetCharEquipment(server.ToLower(), characterName.ToLower(), region);
            return Ok(result);

        }
    }
}
