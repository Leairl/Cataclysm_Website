using System.Threading.Tasks;
using AspNetCore.Proxy;
using AspNetCore.Proxy.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CORSProxy
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ProxyController : Controller
    {
        private readonly IConfiguration Configuration;
        private readonly HttpProxyOptions proxyOptions;

        public ProxyController(IConfiguration configuration, IHttpProxyOptionsBuilder proxyOptions)
        {
            Configuration = configuration;
            this.proxyOptions = proxyOptions.Build();
        }

        [Route("data/modelviewer/cata/background-classic-181818.png")]
        public FileContentResult image() {
            return File(System.IO.File.ReadAllBytes("background.png"), "image/png", System.IO.Path.GetFileName("background.png")); 
        }

        //data forwarding to wowhead
        [Route("data/{*args}")]
        public Task Index()
        {
            return this.ProxyAsync("https://wow.zamimg.com/" + Request.Path.Value?.Replace("/data", "", StringComparison.InvariantCultureIgnoreCase) + Request.QueryString, null, httpProxyOptions: proxyOptions);
        }
    }
}