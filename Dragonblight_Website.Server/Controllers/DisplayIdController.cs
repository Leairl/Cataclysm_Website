using System.Globalization;
using System.Text;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Dragonblight_Website.Server.Controller
{
    //uses "api/ to seperate our backend controllers from our frontend
    [ApiController]
    [Route("api/[controller]")]
    
    public class DisplayIdController : ControllerBase
    {
        private readonly ILogger<DisplayIdController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData;

        public DisplayIdController(ILogger<DisplayIdController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData;
        }

        [HttpGet("GetDisplayInfo")]
        //Iactionresult used when you have action results incoming (200/401/404)
        //pulls the displayidinfo of each item from wowhead xml page, and does a check to find the correct id displayed in our model viewer. 
        //Once item is found, we will pull display id from our ItemDisplayInfo helper.
        public async Task<ActionResult<ItemDisplayInfo>> GetDisplayInfo(int item_id)
        {
            if (HttpContext.GetGameFlavor() == GameFlavor.Retail)
            {
                //Item.csv holds MoP display ids, which the retail model viewer does not know
                //(item 21348 is 34348 on MoP but 96760 on retail), so retail asks Blizzard.
                //Static game data is identical across regions, so "us" serves everyone.
                var info = await _warcraftCachedData.GetItemDisplayInfo(item_id, "us", GameFlavor.Retail);
                return Ok(info ?? new ItemDisplayInfo(item_id, 0, 0, 0));
            }
            //MoP Classic: unchanged, served from Item.csv
            try
            {
                var itemDisplayInfo = ItemDisplayInfos.data.Where(i => i.id == item_id).First();
                return Ok(itemDisplayInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching display info for item ID {ItemId}", item_id);
                return Ok(new ItemDisplayInfo(item_id, 0, 0, 0)); // Return a default object with displayid set to 0
            }
        }
        
    }
}
