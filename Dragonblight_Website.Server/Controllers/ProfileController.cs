using System.Globalization;
using System.Text;
using System.Text.Json.Serialization;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;
using StackExchange.Redis;

namespace Cataclysm_Website.Server.Controllers
{
    //uses "api/ to seperate our backend controllers from our frontend
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly ILogger<ProfileController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable

        public ProfileController(ILogger<ProfileController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        private async Task UpdateBracketSummary(string bracket, string region, string characterName, string server, CharacterProfileSummary result, string specName)
        {
            var ladder = await _warcraftCachedData.GetPvpLeaderSummaries(bracket, region);
            var playerSummary = ladder.FirstOrDefault(x => x?.charSummary.Name.ToLower() == characterName.ToLower() 
                                                    && x.charSummary.Realm.Slug.ToLower() == server.ToLower());
            if (playerSummary != null && playerSummary.PvpEntry != null) 
            {
                await _warcraftCachedData.SavePvpCharacterSummary(new PvpCharacterSummary
                {
                    charSummary = result,
                    spec = specName,
                    PvpEntry = playerSummary.PvpEntry
                }, bracket, region);
            }
        }
        /* 
        Allows a user to load up character profiles from blizzard API.
        */
        [HttpGet("GetProfile")]
        //Iactionresult used when you have action results incoming (200/401/404)
        public async Task<ActionResult<CharacterProfileSummaryAndSpec>> GetProfile(string server, string characterName, string region)
        {
            try
            {
                var result = await _warcraftCachedData.GetCharSummary(server.ToLower(), characterName.ToLower(), region);
                var specName = await _warcraftCachedData.GetCharacterSpecName(server.ToLower(), characterName.ToLower(), region);
                // spin off a background thread to update the 2v2,3v3,5v5,rbg char summary and spec name
                _ = Task.Run(async () => {
                    await UpdateBracketSummary("2v2", region, characterName, server, result, specName);
                    await UpdateBracketSummary("3v3", region, characterName, server, result, specName);
                    await UpdateBracketSummary("5v5", region, characterName, server, result, specName);
                    await UpdateBracketSummary("rbg", region, characterName, server, result, specName);
                });
                return Ok(new CharacterProfileSummaryAndSpec
                {
                    // 2 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                    charSummary = result,
                    spec = specName
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting character profile.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetAppearance")]
        public async Task<ActionResult<CharacterAppearanceSummary>> GetAppearance(string server, string characterName, string region)
        {
            try
            {
                var result = await _warcraftCachedData.GetCharAppearance(server.ToLower(), characterName.ToLower(), region);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting character appearance.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetEquipment")]
        public async Task<ActionResult<CharacterEquipmentSummary>> GetEquipment(string server, string characterName, string region)
        {
            try
            {
                var result = await _warcraftCachedData.GetCharEquipment(server.ToLower(), characterName.ToLower(), region);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting character equipment.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
        public class CharacterProfileSummaryAndSpec
        {
            [JsonPropertyName("charSummary")]
            public required CharacterProfileSummary charSummary { get; init; }
            
            [JsonPropertyName("spec")]
            public required string spec { get; init; }
        }
    }
}
