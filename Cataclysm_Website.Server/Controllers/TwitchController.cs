using System.Net.Http.Headers;
using System.Text.Json;
using ArgentPonyWarcraftClient;
using Microsoft.AspNetCore.Mvc;
using TwitchLib.Api;

namespace Cataclysm_Website.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TwitchController : ControllerBase
    {
        private readonly ILogger<TwitchController> _logger;
        private readonly IWarcraftRedisProxy _warcraftCachedData; //underscore is syntax to global variable
        private readonly IConfiguration _config;


        public TwitchController(ILogger<TwitchController> logger, IWarcraftRedisProxy warcraftCachedData, IConfiguration config)
        {
            _logger = logger;
            _config = config;
        }

        private async Task<OAuthAccessToken> GetOAuthTokenAsync(string ClientId, string ClientSecret)
        {
            using HttpClient Client = new HttpClient();
            string credentials = $"{ClientId}:{ClientSecret}";
            string host = "https://id.twitch.tv";

            //use httpclient from ratelimitedhttpclient
            Client.DefaultRequestHeaders.Accept.Clear(); 
            Client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var requestBody = new FormUrlEncodedContent(new[]
            {                    
                new KeyValuePair<string, string>("client_id", ClientId),
                new KeyValuePair<string, string>("client_secret", ClientSecret),
                new KeyValuePair<string, string>("grant_type", "client_credentials")
            });

            HttpResponseMessage responseMessage = await Client.PostAsync($"{host}/oauth2/token", requestBody);
            responseMessage.EnsureSuccessStatusCode();
            string response = await responseMessage.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<OAuthAccessToken>(response);
        }

        [HttpGet("GetWowTwitchStreams")]
        public async Task<ActionResult<IEnumerable<TwitchLib.Api.Helix.Models.Streams.GetStreams.Stream>>> GetWowTwitchStreams()
        {
            var clientId = _config["TwitchApi:clientId"];
            var clientSecret = _config["TwitchApi:clientSecret"];
            if (clientId == null || clientSecret == null)
            {
                return BadRequest("Twitch API credentials not found.");
            }
            var api = new TwitchAPI();
            api.Settings.ClientId = clientId;
            api.Settings.AccessToken = (await GetOAuthTokenAsync(clientId, clientSecret))?.AccessToken;

            var result = await api.Helix.Streams.GetStreamsAsync(gameIds: ["18122"], first: 10);
            return Ok(result.Streams);

        }
    }
}