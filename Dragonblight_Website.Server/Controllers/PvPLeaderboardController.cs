using System.Security.Cryptography.X509Certificates;
using System.Text.Json.Serialization;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;
using StackExchange.Redis;
using TwitchLib.Api.Helix.Models.ChannelPoints;

namespace Dragonblight_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PvpLeaderboardController : ControllerBase
    {
        private readonly ILogger<PvpLeaderboardController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable
        private readonly IConnectionMultiplexer _redis;


        public PvpLeaderboardController(ILogger<PvpLeaderboardController> logger, IWarcraftRedisProxy warcraftCachedData, IConnectionMultiplexer redis)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
            _redis = redis;
        }
        [HttpGet("GetSyncStatus")]
        public async Task<ActionResult<decimal>> GetSyncStatus(string region, string bracket)
        {
            try
            {
                var syncStatus = await _redis.GetDatabase().StringGetAsync(bracket + region + "SyncStatus");
                if (syncStatus.IsNullOrEmpty)
                {
                    return Ok(0);
                }
                return Ok(decimal.Parse(syncStatus.ToString()));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the sync status.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        /* 
        "dynamic-classic-us" is static name for region in us, need to find other static region names in developer.battle.net
        */
        [HttpGet("Get3v3Ladder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> Get3v3Ladder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("3v3", region, HttpContext.GetGameFlavor()); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the 3v3 ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("Get2v2Ladder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> Get2v2Ladder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("2v2", region, HttpContext.GetGameFlavor()); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the 2v2 ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("Get5v5Ladder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> Get5v5Ladder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("5v5", region, HttpContext.GetGameFlavor()); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the 5v5 ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetRBGLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetRBGLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("rbg", region, HttpContext.GetGameFlavor()); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
                //needs to create a seperate instance of pvpseasonreward to implement our rank property
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the RBG ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleWarriorFuryLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleWarriorFuryLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-warrior-fury", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Fury Warrior Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDeathKnightBloodLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDeathKnightBloodLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-deathknight-blood", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Blood Death Knight Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDeathKnightFrostLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDeathKnightFrostLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-deathknight-frost", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Frost Death Knight Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDeathKnightUnholyLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDeathKnightUnholyLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-deathknight-unholy", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Unholy Death Knight Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDemonHunterDevourerLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDemonHunterDevourerLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-demonhunter-devourer", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Devourer Demon Hunter Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDemonHunterHavocLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDemonHunterHavocLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-demonhunter-havoc", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Havoc Demon Hunter Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDemonHunterVengeanceLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDemonHunterVengeanceLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-demonhunter-vengeance", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Vengeance Demon Hunter Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDruidBalanceLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDruidBalanceLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-druid-balance", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Balance Druid Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDruidFeralLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDruidFeralLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-druid-feral", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Feral Druid Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDruidGuardianLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDruidGuardianLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-druid-guardian", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Guardian Druid Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleDruidRestorationLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleDruidRestorationLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-druid-restoration", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Restoration Druid Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleEvokerDevastationLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleEvokerDevastationLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-evoker-devastation", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Devastation Evoker Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleEvokerPreservationLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleEvokerPreservationLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-evoker-preservation", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Preservation Evoker Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleEvokerAugmentationLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleEvokerAugmentationLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-evoker-augmentation", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Augmentation Evoker Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleHunterBeastMasteryLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleHunterBeastMasteryLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-hunter-beastmastery", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Beast Mastery Hunter Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleHunterMarksmanshipLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleHunterMarksmanshipLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-hunter-marksmanship", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Marksmanship Hunter Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleHunterSurvivalLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleHunterSurvivalLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-hunter-survival", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Survival Hunter Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleMageArcaneLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleMageArcaneLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-mage-arcane", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Arcane Mage Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleMageFireLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleMageFireLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-mage-fire", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Fire Mage Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleMageFrostLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleMageFrostLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-mage-frost", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Frost Mage Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleMonkBrewmasterLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleMonkBrewmasterLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-monk-brewmaster", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Brewmaster Monk Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleMonkWindwalkerLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleMonkWindwalkerLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-monk-windwalker", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Windwalker Monk Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleMonkMistweaverLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleMonkMistweaverLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-monk-mistweaver", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Mistweaver Monk Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShufflePaladinHolyLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShufflePaladinHolyLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-paladin-holy", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Holy Paladin Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShufflePaladinProtectionLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShufflePaladinProtectionLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-paladin-protection", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Protection Paladin Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShufflePaladinRetributionLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShufflePaladinRetributionLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-paladin-retribution", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Retribution Paladin Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShufflePriestDisciplineLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShufflePriestDisciplineLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-priest-discipline", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Discipline Priest Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShufflePriestHolyLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShufflePriestHolyLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-priest-holy", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Holy Priest Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShufflePriestShadowLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShufflePriestShadowLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-priest-shadow", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Shadow Priest Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleRogueAssassinationLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleRogueAssassinationLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-rogue-assassination", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Assassination Rogue Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleRogueOutlawLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleRogueOutlawLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-rogue-outlaw", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Outlaw Rogue Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleRogueSubtletyLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleRogueSubtletyLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-rogue-subtlety", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Subtlety Rogue Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleShamanElementalLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleShamanElementalLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-shaman-elemental", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Elemental Shaman Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleShamanEnhancementLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleShamanEnhancementLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-shaman-enhancement", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Enhancement Shaman Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleShamanRestorationLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleShamanRestorationLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-shaman-restoration", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Restoration Shaman Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleWarlockAfflictionLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleWarlockAfflictionLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-warlock-affliction", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Affliction Warlock Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleWarlockDemonologyLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleWarlockDemonologyLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-warlock-demonology", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Demonology Warlock Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleWarlockDestructionLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleWarlockDestructionLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-warlock-destruction", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Destruction Warlock Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleWarriorArmsLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleWarriorArmsLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-warrior-arms", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Arms Warrior Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetShuffleWarriorProtectionLadder")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetShuffleWarriorProtectionLadder(int skip, int take, string region)
        {
            try
            {
                var ladder = await _warcraftCachedData.GetPvpLeaderSummaries("shuffle-warrior-protection", region, GameFlavor.Retail); 
                ladder = ladder.OrderBy(l => l?.PvpEntry.Rank).ToList();
                return Ok(ladder.Skip(skip).Take(take));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the Protection Warrior Solo Shuffle ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetSeasonStart")]
        public async Task<ActionResult<DateTimeOffset?>> GetSeasonStart(string region)
        {
            try
            {
                return Ok(await _warcraftCachedData.GetSeasonStart(region, HttpContext.GetGameFlavor()));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the season start.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("GetPvPRewards")]
        public async Task<ActionResult<IEnumerable<PvpSeasonRewardWithRank>>> GetPvPRewards(string region)
        {
            try
            {
                var pvpRewards = await _warcraftCachedData.GetPvPRewards(region, HttpContext.GetGameFlavor());
                if (pvpRewards != null && pvpRewards.Rewards != null && pvpRewards.Rewards.Any())
                {
                    var pvpSeasonRewardWithRank = pvpRewards.Rewards.Select(async r =>
                    {
                        return new PvpSeasonRewardWithRank
                        {
                        Bracket = r.Bracket,
                        Achievement = r.Achievement,
                        RatingCutoff = r.RatingCutoff,
                        Faction = r.Faction,
                        Specialization = r.Specialization,
                        rank = await GetRankFromCutoffs(r.RatingCutoff, r.Bracket.Type, region, r.Specialization?.Id)
                        };
                    });
                    var result = await Task.WhenAll(pvpSeasonRewardWithRank);
                    return Ok(result);
                }
                return Ok(new List<PvpSeasonRewardWithRank>());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the PvP rewards.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
        // generates an instance to compare data with (using record) as opposed to checking the instance of that class
        public record PvpSeasonRewardWithRank : PvpSeasonReward
            
        {
           [JsonPropertyName("rank")]
            public int rank { get; set; }
        }
        //Blizzard's playable-specialization id for Fury Warrior
        private const int FurySpecId = 72;
        //Blizzard's playable-specialization id for Blood Death Knight
        private const int DeathKnightBloodSpecId = 250;
        //Blizzard's playable-specialization id for Frost Death Knight
        private const int DeathKnightFrostSpecId = 251;
        //Blizzard's playable-specialization id for Unholy Death Knight
        private const int DeathKnightUnholySpecId = 252;
        //Blizzard's playable-specialization id for Devourer Demon Hunter
        private const int DemonHunterDevourerSpecId = 1480;
        //Blizzard's playable-specialization id for Havoc Demon Hunter
        private const int DemonHunterHavocSpecId = 577;
        //Blizzard's playable-specialization id for Vengeance Demon Hunter
        private const int DemonHunterVengeanceSpecId = 581;
        //Blizzard's playable-specialization id for Balance Druid
        private const int DruidBalanceSpecId = 102;
        //Blizzard's playable-specialization id for Feral Druid
        private const int DruidFeralSpecId = 103;
        //Blizzard's playable-specialization id for Guardian Druid
        private const int DruidGuardianSpecId = 104;
        //Blizzard's playable-specialization id for Restoration Druid
        private const int DruidRestorationSpecId = 105;
        //Blizzard's playable-specialization id for Devastation Evoker
        private const int EvokerDevastationSpecId = 1467;
        //Blizzard's playable-specialization id for Preservation Evoker
        private const int EvokerPreservationSpecId = 1468;
        //Blizzard's playable-specialization id for Augmentation Evoker
        private const int EvokerAugmentationSpecId = 1473;
        //Blizzard's playable-specialization id for Beast Mastery Hunter
        private const int HunterBeastMasterySpecId = 253;
        //Blizzard's playable-specialization id for Marksmanship Hunter
        private const int HunterMarksmanshipSpecId = 254;
        //Blizzard's playable-specialization id for Survival Hunter
        private const int HunterSurvivalSpecId = 255;
        //Blizzard's playable-specialization id for Arcane Mage
        private const int MageArcaneSpecId = 62;
        //Blizzard's playable-specialization id for Fire Mage
        private const int MageFireSpecId = 63;
        //Blizzard's playable-specialization id for Frost Mage
        private const int MageFrostSpecId = 64;
        //Blizzard's playable-specialization id for Brewmaster Monk
        private const int MonkBrewmasterSpecId = 268;
        //Blizzard's playable-specialization id for Windwalker Monk
        private const int MonkWindwalkerSpecId = 269;
        //Blizzard's playable-specialization id for Mistweaver Monk
        private const int MonkMistweaverSpecId = 270;
        //Blizzard's playable-specialization id for Holy Paladin
        private const int PaladinHolySpecId = 65;
        //Blizzard's playable-specialization id for Protection Paladin
        private const int PaladinProtectionSpecId = 66;
        //Blizzard's playable-specialization id for Retribution Paladin
        private const int PaladinRetributionSpecId = 70;
        //Blizzard's playable-specialization id for Discipline Priest
        private const int PriestDisciplineSpecId = 256;
        //Blizzard's playable-specialization id for Holy Priest
        private const int PriestHolySpecId = 257;
        //Blizzard's playable-specialization id for Shadow Priest
        private const int PriestShadowSpecId = 258;
        //Blizzard's playable-specialization id for Assassination Rogue
        private const int RogueAssassinationSpecId = 259;
        //Blizzard's playable-specialization id for Outlaw Rogue
        private const int RogueOutlawSpecId = 260;
        //Blizzard's playable-specialization id for Subtlety Rogue
        private const int RogueSubtletySpecId = 261;
        //Blizzard's playable-specialization id for Elemental Shaman
        private const int ShamanElementalSpecId = 262;
        //Blizzard's playable-specialization id for Enhancement Shaman
        private const int ShamanEnhancementSpecId = 263;
        //Blizzard's playable-specialization id for Restoration Shaman
        private const int ShamanRestorationSpecId = 264;
        //Blizzard's playable-specialization id for Affliction Warlock
        private const int WarlockAfflictionSpecId = 265;
        //Blizzard's playable-specialization id for Demonology Warlock
        private const int WarlockDemonologySpecId = 266;
        //Blizzard's playable-specialization id for Destruction Warlock
        private const int WarlockDestructionSpecId = 267;
        //Blizzard's playable-specialization id for Arms Warrior
        private const int WarriorArmsSpecId = 71;
        //Blizzard's playable-specialization id for Protection Warrior
        private const int WarriorProtectionSpecId = 73;

        [HttpGet("GetRankFromCutoffs")]
        public async Task<int> GetRankFromCutoffs(int cutoff, string bracket, string region, int? specId = null)
        {
            try
            {
                if (bracket == "ARENA_2v2")
                {
                    return (await _warcraftCachedData.Get2v2Leaderboard(region, HttpContext.GetGameFlavor())).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "ARENA_3v3")
                {
                    return (await _warcraftCachedData.Get3v3Leaderboard(region, HttpContext.GetGameFlavor())).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "ARENA_5v5")
                {
                    return (await _warcraftCachedData.Get5v5Leaderboard(region, HttpContext.GetGameFlavor())).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "BATTLEGROUNDS")
                {
                    return (await _warcraftCachedData.GetRBGLeaderboard(region, HttpContext.GetGameFlavor())).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                //every spec has its own Solo Shuffle ladder and all their rewards say SHUFFLE, so the
                //reward's spec id picks the ladder. Specs without a ladder method yet rank as 0.
                if (bracket == "SHUFFLE" && specId == FurySpecId)
                {
                    return (await _warcraftCachedData.GetShuffleWarriorFuryLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DeathKnightBloodSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDeathKnightBloodLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DeathKnightFrostSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDeathKnightFrostLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DeathKnightUnholySpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDeathKnightUnholyLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DemonHunterDevourerSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDemonHunterDevourerLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DemonHunterHavocSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDemonHunterHavocLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DemonHunterVengeanceSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDemonHunterVengeanceLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DruidBalanceSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDruidBalanceLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DruidFeralSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDruidFeralLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DruidGuardianSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDruidGuardianLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == DruidRestorationSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleDruidRestorationLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == EvokerDevastationSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleEvokerDevastationLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == EvokerPreservationSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleEvokerPreservationLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == EvokerAugmentationSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleEvokerAugmentationLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == HunterBeastMasterySpecId)
                {
                    return (await _warcraftCachedData.GetShuffleHunterBeastMasteryLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == HunterMarksmanshipSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleHunterMarksmanshipLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == HunterSurvivalSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleHunterSurvivalLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == MageArcaneSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleMageArcaneLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == MageFireSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleMageFireLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == MageFrostSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleMageFrostLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == MonkBrewmasterSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleMonkBrewmasterLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == MonkWindwalkerSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleMonkWindwalkerLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == MonkMistweaverSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleMonkMistweaverLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == PaladinHolySpecId)
                {
                    return (await _warcraftCachedData.GetShufflePaladinHolyLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == PaladinProtectionSpecId)
                {
                    return (await _warcraftCachedData.GetShufflePaladinProtectionLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == PaladinRetributionSpecId)
                {
                    return (await _warcraftCachedData.GetShufflePaladinRetributionLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == PriestDisciplineSpecId)
                {
                    return (await _warcraftCachedData.GetShufflePriestDisciplineLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == PriestHolySpecId)
                {
                    return (await _warcraftCachedData.GetShufflePriestHolyLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == PriestShadowSpecId)
                {
                    return (await _warcraftCachedData.GetShufflePriestShadowLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == RogueAssassinationSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleRogueAssassinationLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == RogueOutlawSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleRogueOutlawLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == RogueSubtletySpecId)
                {
                    return (await _warcraftCachedData.GetShuffleRogueSubtletyLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == ShamanElementalSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleShamanElementalLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == ShamanEnhancementSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleShamanEnhancementLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == ShamanRestorationSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleShamanRestorationLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == WarlockAfflictionSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleWarlockAfflictionLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == WarlockDemonologySpecId)
                {
                    return (await _warcraftCachedData.GetShuffleWarlockDemonologyLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == WarlockDestructionSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleWarlockDestructionLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == WarriorArmsSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleWarriorArmsLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                if (bracket == "SHUFFLE" && specId == WarriorProtectionSpecId)
                {
                    return (await _warcraftCachedData.GetShuffleWarriorProtectionLeaderboard(region)).Entries.Where(p => p.Rating >= cutoff).Last().Rank;
                }
                return 0;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the rank from cutoffs.");
                return 0;
            }
        }

        [HttpPost("GetLadderFiltered")]
        public async Task<ActionResult<IEnumerable<PvpCharacterSummary>>> GetLadderFiltered(int skip, int take, string region, List<string> classes, string bracket)
        // foreach allows us to select multiple classes on our leaderboard
        {
            try
            {
                List<PvpCharacterSummary> result = [];
                List<PvpLeaderboardEntry?> filteredLadder = [];
                foreach (var charClass in classes)
                {
                    var fullLeaderboard = await _warcraftCachedData.CachedClassCharacters(region, charClass, bracket, HttpContext.GetGameFlavor());
                    filteredLadder.AddRange(fullLeaderboard);
                }
                filteredLadder = filteredLadder.OrderBy(r => r?.Rank).Skip(skip).Take(take).ToList();
                //going through the list of all selected filters, connects our leaderboardentries to our profilesummary, and combines the players
                var LadderLeaderboardEntries = filteredLadder.Where(p => p != null).Select(p => p!).Select(async ladderEntry =>
                {
                    var ProfileSummaryEntries = await _warcraftCachedData.GetCharSummary(ladderEntry.Character.Realm.Slug, ladderEntry.Character.Name, region, HttpContext.GetGameFlavor());
                    var specName = await _warcraftCachedData.GetCharacterSpecName(ladderEntry.Character.Realm.Slug, ladderEntry.Character.Name, region, HttpContext.GetGameFlavor());
                    return new PvpCharacterSummary
                    {
                        // 3 properties pulled from class below (rbgEntry is pulling all leaderboad data & ProfileSummaryEntry is pulling CharacterSummary data)
                        PvpEntry = ladderEntry,
                        charSummary = ProfileSummaryEntries,
                        spec = specName
                    };
                });
                result = result.Concat(await Task.WhenAll(LadderLeaderboardEntries)).ToList();
                //displays correct ranking and returns all selected classes we want to filter
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching the filtered ladder.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
        public class PvpCharacterSummary
        {
            [JsonPropertyName("pvpEntry")]
            public required PvpLeaderboardEntry PvpEntry { get; init; }

            [JsonPropertyName("charSummary")]
            public required CharacterProfileSummary charSummary { get; init; }
            
            [JsonPropertyName("spec")]
            public required string spec { get; init; }
        }
    }
}
