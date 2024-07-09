public class BgService : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    public BgService(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using (var scope = _serviceProvider.CreateScope())
        {
            var services = scope.ServiceProvider;
            var charService = services.GetRequiredService<CharacterCacheService>();
            await charService.CacheAllLadders("us");
            await charService.CacheAllLadders("eu");
        }
    }
}