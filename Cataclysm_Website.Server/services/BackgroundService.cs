using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

public class BgService : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private Timer? _timer;

    public BgService(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _timer = new Timer(DoWork, null, TimeSpan.Zero, TimeSpan.FromHours(4));
        return Task.CompletedTask;
    }

    private async void DoWork(object? nullState)
    {
        using (var scope = _serviceProvider.CreateScope())
        {
            var services = scope.ServiceProvider;
            var charService = services.GetRequiredService<CharacterCacheService>();
            await charService.CacheAllLadders("us");
            await charService.CacheAllLadders("eu");
        }
    }

    public override void Dispose()
    {
        _timer?.Dispose();
        base.Dispose();
    }
}