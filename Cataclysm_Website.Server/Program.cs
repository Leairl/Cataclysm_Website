using StackExchange.Redis;
using ArgentPonyWarcraftClient.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using AspNetCore.Proxy;
using AspNetCore.Proxy.Options;
var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
builder.Configuration.AddJsonFile("appsettings.development", optional: true, reloadOnChange: true);

// Add services to the container.
var configuration = builder.Configuration;
var redisConnectionString = configuration.GetSection("Redis")["ConnectionString"];
var battlenetClient = configuration.GetSection("BattlenetApi")["clientId"];
var battlenetSecret = configuration.GetSection("BattlenetApi")["clientSecret"];

builder.Services.AddProxies();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddWarcraftClients(battlenetClient, battlenetSecret);
builder.Services.AddScoped<IWarcraftRedisProxy, warcraftRedisProxy>();
builder.Services.AddScoped<CharacterCacheService>();
if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "NSWAG")
{
    builder.Services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect(redisConnectionString));
    builder.Services.AddHostedService<BgService>();
}

var options = HttpProxyOptionsBuilder.Instance
.WithShouldAddForwardedHeaders(false)
.WithHttpClientName("ProxyClient")
.WithIntercept(context =>
{
    if (context.Request.Method == "OPTIONS")
    {
        context.Response.StatusCode = 204;
        context.Response.Headers["Access-Control-Allow-Origin"] = "*";
        context.Response.Headers["Access-Control-Allow-Methods"] = "*";
        context.Response.Headers["Access-Control-Allow-Headers"] = "*";
        context.Response.Headers["Access-Control-Allow-Max-Age"] = "86400";


        return ValueTask.FromResult(true);
    }

    return ValueTask.FromResult(false);
}).WithAfterReceive((context, response) =>
{
    const string header = "Access-Control-Allow-Origin";
    
    if (response.Headers.Contains(header))
    {
        response.Headers.Remove(header);
    }
    
    response.Headers.Add(header, "*");

    return Task.CompletedTask;
});

builder.Services.AddSingleton(options);
builder.Services.AddSwaggerDocument(d =>
{
    d.Title = "Dragonblight API";
});
builder.Services.Configure<HostOptions>(hostOptions =>
{
    hostOptions.BackgroundServiceExceptionBehavior = BackgroundServiceExceptionBehavior.Ignore;
});
var app = builder.Build();
app.UseDefaultFiles();
app.UseStaticFiles();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");
CSVLoader.LoadAll();
//calling character cache service to cache all character data into redis
app.Run();