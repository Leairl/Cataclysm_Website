using ArgentPonyWarcraftClient;

//Solo Shuffle ladders, one per spec. Retail only, and cached like the other ladders.
partial class WarcraftRedisProxy
{
    //Solo Shuffle is retail only, so this never takes a flavor: the classic namespace and season would
    //ask Blizzard for a ladder that does not exist
    public async Task<PvpLeaderboard> GetShuffleWarriorFuryLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleWarriorFuryLeaderboard" + ns, async () =>
        {
            var currShuffleWarriorFuryLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-warrior-fury", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleWarriorFuryLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDeathKnightBloodLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDeathKnightBloodLeaderboard" + ns, async () =>
        {
            var currShuffleDeathKnightBloodLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-deathknight-blood", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDeathKnightBloodLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDeathKnightFrostLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDeathKnightFrostLeaderboard" + ns, async () =>
        {
            var currShuffleDeathKnightFrostLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-deathknight-frost", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDeathKnightFrostLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDeathKnightUnholyLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDeathKnightUnholyLeaderboard" + ns, async () =>
        {
            var currShuffleDeathKnightUnholyLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-deathknight-unholy", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDeathKnightUnholyLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDemonHunterDevourerLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDemonHunterDevourerLeaderboard" + ns, async () =>
        {
            var currShuffleDemonHunterDevourerLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-demonhunter-devourer", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDemonHunterDevourerLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDemonHunterHavocLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDemonHunterHavocLeaderboard" + ns, async () =>
        {
            var currShuffleDemonHunterHavocLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-demonhunter-havoc", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDemonHunterHavocLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDemonHunterVengeanceLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDemonHunterVengeanceLeaderboard" + ns, async () =>
        {
            var currShuffleDemonHunterVengeanceLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-demonhunter-vengeance", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDemonHunterVengeanceLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDruidBalanceLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDruidBalanceLeaderboard" + ns, async () =>
        {
            var currShuffleDruidBalanceLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-druid-balance", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDruidBalanceLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDruidFeralLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDruidFeralLeaderboard" + ns, async () =>
        {
            var currShuffleDruidFeralLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-druid-feral", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDruidFeralLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDruidGuardianLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDruidGuardianLeaderboard" + ns, async () =>
        {
            var currShuffleDruidGuardianLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-druid-guardian", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDruidGuardianLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleDruidRestorationLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleDruidRestorationLeaderboard" + ns, async () =>
        {
            var currShuffleDruidRestorationLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-druid-restoration", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleDruidRestorationLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleEvokerDevastationLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleEvokerDevastationLeaderboard" + ns, async () =>
        {
            var currShuffleEvokerDevastationLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-evoker-devastation", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleEvokerDevastationLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleEvokerPreservationLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleEvokerPreservationLeaderboard" + ns, async () =>
        {
            var currShuffleEvokerPreservationLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-evoker-preservation", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleEvokerPreservationLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleEvokerAugmentationLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleEvokerAugmentationLeaderboard" + ns, async () =>
        {
            var currShuffleEvokerAugmentationLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-evoker-augmentation", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleEvokerAugmentationLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleHunterBeastMasteryLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleHunterBeastMasteryLeaderboard" + ns, async () =>
        {
            var currShuffleHunterBeastMasteryLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-hunter-beastmastery", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleHunterBeastMasteryLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleHunterMarksmanshipLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleHunterMarksmanshipLeaderboard" + ns, async () =>
        {
            var currShuffleHunterMarksmanshipLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-hunter-marksmanship", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleHunterMarksmanshipLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleHunterSurvivalLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleHunterSurvivalLeaderboard" + ns, async () =>
        {
            var currShuffleHunterSurvivalLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-hunter-survival", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleHunterSurvivalLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleMageArcaneLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleMageArcaneLeaderboard" + ns, async () =>
        {
            var currShuffleMageArcaneLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-mage-arcane", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleMageArcaneLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleMageFireLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleMageFireLeaderboard" + ns, async () =>
        {
            var currShuffleMageFireLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-mage-fire", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleMageFireLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleMageFrostLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleMageFrostLeaderboard" + ns, async () =>
        {
            var currShuffleMageFrostLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-mage-frost", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleMageFrostLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleMonkBrewmasterLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleMonkBrewmasterLeaderboard" + ns, async () =>
        {
            var currShuffleMonkBrewmasterLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-monk-brewmaster", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleMonkBrewmasterLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleMonkWindwalkerLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleMonkWindwalkerLeaderboard" + ns, async () =>
        {
            var currShuffleMonkWindwalkerLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-monk-windwalker", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleMonkWindwalkerLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleMonkMistweaverLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleMonkMistweaverLeaderboard" + ns, async () =>
        {
            var currShuffleMonkMistweaverLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-monk-mistweaver", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleMonkMistweaverLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShufflePaladinHolyLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShufflePaladinHolyLeaderboard" + ns, async () =>
        {
            var currShufflePaladinHolyLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-paladin-holy", ns, GetRegion(ns), GetLocale(ns));
            return currShufflePaladinHolyLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShufflePaladinProtectionLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShufflePaladinProtectionLeaderboard" + ns, async () =>
        {
            var currShufflePaladinProtectionLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-paladin-protection", ns, GetRegion(ns), GetLocale(ns));
            return currShufflePaladinProtectionLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShufflePaladinRetributionLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShufflePaladinRetributionLeaderboard" + ns, async () =>
        {
            var currShufflePaladinRetributionLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-paladin-retribution", ns, GetRegion(ns), GetLocale(ns));
            return currShufflePaladinRetributionLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShufflePriestDisciplineLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShufflePriestDisciplineLeaderboard" + ns, async () =>
        {
            var currShufflePriestDisciplineLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-priest-discipline", ns, GetRegion(ns), GetLocale(ns));
            return currShufflePriestDisciplineLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShufflePriestHolyLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShufflePriestHolyLeaderboard" + ns, async () =>
        {
            var currShufflePriestHolyLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-priest-holy", ns, GetRegion(ns), GetLocale(ns));
            return currShufflePriestHolyLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShufflePriestShadowLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShufflePriestShadowLeaderboard" + ns, async () =>
        {
            var currShufflePriestShadowLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-priest-shadow", ns, GetRegion(ns), GetLocale(ns));
            return currShufflePriestShadowLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleRogueAssassinationLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleRogueAssassinationLeaderboard" + ns, async () =>
        {
            var currShuffleRogueAssassinationLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-rogue-assassination", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleRogueAssassinationLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleRogueOutlawLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleRogueOutlawLeaderboard" + ns, async () =>
        {
            var currShuffleRogueOutlawLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-rogue-outlaw", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleRogueOutlawLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleRogueSubtletyLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleRogueSubtletyLeaderboard" + ns, async () =>
        {
            var currShuffleRogueSubtletyLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-rogue-subtlety", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleRogueSubtletyLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleShamanElementalLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleShamanElementalLeaderboard" + ns, async () =>
        {
            var currShuffleShamanElementalLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-shaman-elemental", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleShamanElementalLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleShamanEnhancementLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleShamanEnhancementLeaderboard" + ns, async () =>
        {
            var currShuffleShamanEnhancementLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-shaman-enhancement", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleShamanEnhancementLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleShamanRestorationLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleShamanRestorationLeaderboard" + ns, async () =>
        {
            var currShuffleShamanRestorationLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-shaman-restoration", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleShamanRestorationLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleWarlockAfflictionLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleWarlockAfflictionLeaderboard" + ns, async () =>
        {
            var currShuffleWarlockAfflictionLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-warlock-affliction", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleWarlockAfflictionLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleWarlockDemonologyLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleWarlockDemonologyLeaderboard" + ns, async () =>
        {
            var currShuffleWarlockDemonologyLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-warlock-demonology", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleWarlockDemonologyLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleWarlockDestructionLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleWarlockDestructionLeaderboard" + ns, async () =>
        {
            var currShuffleWarlockDestructionLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-warlock-destruction", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleWarlockDestructionLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleWarriorArmsLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleWarriorArmsLeaderboard" + ns, async () =>
        {
            var currShuffleWarriorArmsLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-warrior-arms", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleWarriorArmsLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
    public async Task<PvpLeaderboard> GetShuffleWarriorProtectionLeaderboard(string region)
    {
        var ns = GetDynamicRegion(region, GameFlavor.Retail);
        return await GetBlizzardDataCached<PvpLeaderboard>("getShuffleWarriorProtectionLeaderboard" + ns, async () =>
        {
            var currShuffleWarriorProtectionLeaderboard = await warcraftClient.GetPvpLeaderboardAsync(await GetSeason(region, GameFlavor.Retail), "shuffle-warrior-protection", ns, GetRegion(ns), GetLocale(ns));
            return currShuffleWarriorProtectionLeaderboard.Value;
        }, TimeSpan.FromHours(3)); 
    }
}
