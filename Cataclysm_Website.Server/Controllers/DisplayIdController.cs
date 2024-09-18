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

        public DisplayIdController(ILogger<DisplayIdController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetDisplayInfo")]
        //Iactionresult used when you have action results incoming (200/401/404)
        //pulls the displayidinfo of each item from wowhead xml page, and does a check to find the correct id displayed in our model viewer. 
        //Once item is found, we will pull display id from our ItemDisplayInfo helper.
        public ActionResult<ItemDisplayInfo> GetDisplayInfo(int item_id)
        {
            try
            {
                var itemDisplayInfo = ItemDisplayInfos.data.Where(i => i.id == item_id).First();
                return Ok(itemDisplayInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching display info for item ID {ItemId}", item_id);
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
        
    }
}
