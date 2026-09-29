using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;

namespace Dragonblight_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RealmController : ControllerBase
    {
        private readonly ILogger<RealmController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public RealmController(ILogger<RealmController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        [HttpGet("GetRealms")]
        public async Task<ActionResult<RealmsIndex>> GetRealms(string region)
        {
            try
            {
                var result = await _warcraftCachedData.GetRealms(region, HttpContext.GetGameFlavor());
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching realms.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
    }
}