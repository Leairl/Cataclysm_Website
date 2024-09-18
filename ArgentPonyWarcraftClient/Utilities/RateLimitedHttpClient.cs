using System;
using System.Net.Http;
using System.Threading.RateLimiting;
using System.Threading.Tasks;

public class RateLimitedHttpClient : IDisposable
{
    public readonly HttpClient httpClient;
    private readonly SlidingWindowRateLimiter _rateLimiter;

    public RateLimitedHttpClient(HttpClient httpClient, int maxRequestsPerSecond = 90)
    {
        this.httpClient = httpClient;
        _rateLimiter = new SlidingWindowRateLimiter(new SlidingWindowRateLimiterOptions
        {
            PermitLimit = maxRequestsPerSecond,
            Window = TimeSpan.FromSeconds(1),
            SegmentsPerWindow = 1,
            QueueProcessingOrder = QueueProcessingOrder.OldestFirst,
            QueueLimit = int.MaxValue
        });
    }

    public async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request)
    {
        var lease = await _rateLimiter.AcquireAsync(1); //var that checks rate limiter to see if has reached max requirement, if not will return more requests until reaching max.

        if (!lease.IsAcquired)
        {
            throw new InvalidOperationException("Rate limit could not be acquired.");
        }

        try
        {
            return await httpClient.SendAsync(request);
        }
        catch (HttpRequestException exception)
        {
            return new HttpResponseMessage(exception.StatusCode.HasValue ? exception.StatusCode.Value : System.Net.HttpStatusCode.InternalServerError);
            // ignore exceptions for now
        }
        catch (Exception)
        {
            return new HttpResponseMessage(System.Net.HttpStatusCode.InternalServerError);
        }
        finally
        {
            lease.Dispose(); //once reached max amount of requests, dispose lease
        }
    }
        //produces a get request of data to blizzard while sending requests from sendAsync (up to maxRequests per window)
        public async Task<HttpResponseMessage> GetAsync(string requestUri)
    {
        var request = new HttpRequestMessage(HttpMethod.Get, requestUri);
        return await SendAsync(request);
    }

    //produces a post request of data to blizzard while sending requests from sendAsync (up to maxRequests per window)
    public async Task<HttpResponseMessage> PostAsync(string requestUri, HttpContent content)
    {
        var request = new HttpRequestMessage(HttpMethod.Post, requestUri) { Content = content };
        return await SendAsync(request);
    }

    public void Dispose()
    {
        _rateLimiter.Dispose();
    }
}
