using System.Security.Cryptography.X509Certificates;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PvpLeaderboardController : ControllerBase
    {
        private readonly ILogger<PvpLeaderboardController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable


        public PvpLeaderboardController(ILogger<PvpLeaderboardController> logger, IWarcraftRedisProxy warcraftCachedData)
        {
            _logger = logger;
            _warcraftCachedData = warcraftCachedData; //dependency injection to IWarcraftRedisProxy cs file
        }
        /* 
        "dynamic-classic-us" is static name for region in us, need to find other static region names in developer.battle.net
        */
        [HttpGet("Get3v3Ladder")]
        public async Task<ActionResult<IEnumerable<PvpLeaderboardEntry>>> Get3v3Ladder() 
        {
            var fullLeaderboard = await _warcraftCachedData.Get3v3Leaderboard("us");
            var firstHundred3v3Players = fullLeaderboard.Entries.Take(100);
            return Ok(firstHundred3v3Players);
        }

        [HttpGet("Get2v2Ladder")]
        public async Task<ActionResult<IEnumerable<PvpLeaderboardEntry>>> Get2v2Ladder() 
        {
            var fullLeaderboard = await _warcraftCachedData.Get2v2Leaderboard("us");
            var firstHundred2v2Players = fullLeaderboard.Entries.Take(100);
            return Ok(firstHundred2v2Players);
        }

        [HttpGet("Get5v5Ladder")]
        public async Task<ActionResult<IEnumerable<PvpLeaderboardEntry>>> Get5v5Ladder() 
        {
            var fullLeaderboard = await _warcraftCachedData.Get5v5Leaderboard("us");
            var firstHundred5v5Players = fullLeaderboard.Entries.Take(100);
            return Ok(firstHundred5v5Players);
        }

        [HttpGet("GetRBGLadder")]
        public async Task<ActionResult<IEnumerable<PvpLeaderboardEntry>>> GetRBGLadder() 
        {
            var fullLeaderboard = await _warcraftCachedData.GetRBGLeaderboard("us");
            var firstHundredRBGPlayers = fullLeaderboard.Entries.Take(100);
            return Ok(firstHundredRBGPlayers);
        }
    }
}
