using System.Globalization;
using System.Text;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Cataclysm_Website.Server.Controller
{
    //uses "api/ to seperate our backend controllers from our frontend
    [ApiController]
    [Route("api/[controller]")]
    
    public class DisplayIdController : ControllerBase
    {
        private readonly ILogger<DisplayIdController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable

        public DisplayIdController(ILogger<DisplayIdController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }

        [HttpGet("GetDisplayInfo")]
        //Iactionresult used when you have action results incoming (200/401/404)
        //pulls the displayidinfo of each item from wowhead xml page, and does a check to find the correct id displayed in our model viewer. 
        //Once item is found, we will pull display id from our ItemDisplayInfo helper.
        public async Task<ActionResult<ItemDisplayInfo>> GetDisplayInfo(int item_id)
        {
            return Ok(ItemDisplayInfos.data.Where(i => i.id == item_id).First());
        }
        
    }
}
