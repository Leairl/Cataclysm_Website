using System.Security.Cryptography.X509Certificates;
using ArgentPonyWarcraftClient;
using FuzzySharp;
using Microsoft.AspNetCore.Mvc;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SearchController : ControllerBase
    {
        private readonly ILogger<SearchController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public SearchController(ILogger<SearchController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        Allows a user to do a character search from the Home screen.
        Does CharacterSearch by searching all characters (server & character name) for containing search string
        */
        [HttpGet("SearchChar")]
        //Iactionresult used when you have action results incoming (200/401/404)
        public async Task<IActionResult> SearchChar(string search)
        {
            //return character name and character score with descending order of outscore, uses select for specific properties in a list.
            var allCharacters = await _warcraftCachedData.CachedCharacters();
            //takes top 10 closest typed characters in search bar.
            var SearchChars = Process.ExtractTop(search, allCharacters, limit: 10);
            var top10CharSummaries = SearchChars.Select(async player =>
            {
                //when pulled out of redis, rearrange back into original key
                //GetCharSummary is using InsertCacheCharacter (we split and rearrange this data after pulling from redis)
                var playerSplit = player.Value.Split(',');
                return await _warcraftCachedData.GetCharSummary(playerSplit[1], playerSplit[0], RegionHelper.SimplifyRegion(playerSplit[2]));
            });
            var result = await Task.WhenAll(top10CharSummaries);
            return Ok(result);
            
        }
    }
}
