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

        //data forwarding to wowhead
        [Route("data/{*args}")]
        public Task Index()
        //when calling data from wowhead, remove /data from the link to get the correct data. Also uses stringcomparison to make url non-case sensitive
        {
            return this.ProxyAsync("https://wow.zamimg.com/" + Request.Path.Value?.Replace("/data", "", StringComparison.InvariantCultureIgnoreCase) + Request.QueryString, null, httpProxyOptions: proxyOptions);
        }
    }
}