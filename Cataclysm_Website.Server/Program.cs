using StackExchange.Redis;
using ArgentPonyWarcraftClient.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
builder.Configuration.AddJsonFile("appsettings.development", optional: true, reloadOnChange: true);

// Add services to the container.
var configuration = builder.Configuration;
var redisConnectionString = configuration.GetSection("Redis")["ConnectionString"];
var battlenetClient = configuration.GetSection("BattlenetApi")["clientId"];
var battlenetSecret = configuration.GetSection("BattlenetApi")["clientSecret"];

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

builder.Services.AddSwaggerDocument(d =>
{
    d.Title = "Dragonblight API";
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
Console.WriteLine("test");
//calling character cache service to cache all character data into redis
app.Run();