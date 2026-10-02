using ArgentPonyWarcraftClient;

//Solo Shuffle ladder syncs. Shuffle keeps a separate ladder per spec, so each spec gets its own
//Cache method here; CacheAllLadders calls them on retail passes only.
partial class CharacterCacheService
{
    public async Task CacheShuffleWarriorFuryLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleWarriorFuryLeaderboard method in warcraftclient
            var oldleaderboardShuffleWarriorFury = await redisProxy.GetShuffleWarriorFuryLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-warrior-fury", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleWarriorFury = await redisProxy.GetShuffleWarriorFuryLeaderboard(region);
            await BatchCacheCharSummary("shuffle-warrior-fury", region, oldleaderboardShuffleWarriorFury.Entries.ToArray(), newleaderboardShuffleWarriorFury.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleWarriorFuryLadder");
        }
    }
    public async Task CacheShuffleDeathKnightBloodLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDeathKnightBloodLeaderboard method in warcraftclient
            var oldleaderboardShuffleDeathKnightBlood = await redisProxy.GetShuffleDeathKnightBloodLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-deathknight-blood", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDeathKnightBlood = await redisProxy.GetShuffleDeathKnightBloodLeaderboard(region);
            await BatchCacheCharSummary("shuffle-deathknight-blood", region, oldleaderboardShuffleDeathKnightBlood.Entries.ToArray(), newleaderboardShuffleDeathKnightBlood.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDeathKnightBloodLadder");
        }
    }
    public async Task CacheShuffleDeathKnightFrostLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDeathKnightFrostLeaderboard method in warcraftclient
            var oldleaderboardShuffleDeathKnightFrost = await redisProxy.GetShuffleDeathKnightFrostLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-deathknight-frost", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDeathKnightFrost = await redisProxy.GetShuffleDeathKnightFrostLeaderboard(region);
            await BatchCacheCharSummary("shuffle-deathknight-frost", region, oldleaderboardShuffleDeathKnightFrost.Entries.ToArray(), newleaderboardShuffleDeathKnightFrost.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDeathKnightFrostLadder");
        }
    }
    public async Task CacheShuffleDeathKnightUnholyLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDeathKnightUnholyLeaderboard method in warcraftclient
            var oldleaderboardShuffleDeathKnightUnholy = await redisProxy.GetShuffleDeathKnightUnholyLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-deathknight-unholy", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDeathKnightUnholy = await redisProxy.GetShuffleDeathKnightUnholyLeaderboard(region);
            await BatchCacheCharSummary("shuffle-deathknight-unholy", region, oldleaderboardShuffleDeathKnightUnholy.Entries.ToArray(), newleaderboardShuffleDeathKnightUnholy.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDeathKnightUnholyLadder");
        }
    }
    public async Task CacheShuffleDemonHunterDevourerLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDemonHunterDevourerLeaderboard method in warcraftclient
            var oldleaderboardShuffleDemonHunterDevourer = await redisProxy.GetShuffleDemonHunterDevourerLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-demonhunter-devourer", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDemonHunterDevourer = await redisProxy.GetShuffleDemonHunterDevourerLeaderboard(region);
            await BatchCacheCharSummary("shuffle-demonhunter-devourer", region, oldleaderboardShuffleDemonHunterDevourer.Entries.ToArray(), newleaderboardShuffleDemonHunterDevourer.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDemonHunterDevourerLadder");
        }
    }
    public async Task CacheShuffleDemonHunterHavocLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDemonHunterHavocLeaderboard method in warcraftclient
            var oldleaderboardShuffleDemonHunterHavoc = await redisProxy.GetShuffleDemonHunterHavocLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-demonhunter-havoc", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDemonHunterHavoc = await redisProxy.GetShuffleDemonHunterHavocLeaderboard(region);
            await BatchCacheCharSummary("shuffle-demonhunter-havoc", region, oldleaderboardShuffleDemonHunterHavoc.Entries.ToArray(), newleaderboardShuffleDemonHunterHavoc.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDemonHunterHavocLadder");
        }
    }
    public async Task CacheShuffleDemonHunterVengeanceLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDemonHunterVengeanceLeaderboard method in warcraftclient
            var oldleaderboardShuffleDemonHunterVengeance = await redisProxy.GetShuffleDemonHunterVengeanceLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-demonhunter-vengeance", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDemonHunterVengeance = await redisProxy.GetShuffleDemonHunterVengeanceLeaderboard(region);
            await BatchCacheCharSummary("shuffle-demonhunter-vengeance", region, oldleaderboardShuffleDemonHunterVengeance.Entries.ToArray(), newleaderboardShuffleDemonHunterVengeance.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDemonHunterVengeanceLadder");
        }
    }
    public async Task CacheShuffleDruidBalanceLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDruidBalanceLeaderboard method in warcraftclient
            var oldleaderboardShuffleDruidBalance = await redisProxy.GetShuffleDruidBalanceLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-druid-balance", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDruidBalance = await redisProxy.GetShuffleDruidBalanceLeaderboard(region);
            await BatchCacheCharSummary("shuffle-druid-balance", region, oldleaderboardShuffleDruidBalance.Entries.ToArray(), newleaderboardShuffleDruidBalance.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDruidBalanceLadder");
        }
    }
    public async Task CacheShuffleDruidFeralLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDruidFeralLeaderboard method in warcraftclient
            var oldleaderboardShuffleDruidFeral = await redisProxy.GetShuffleDruidFeralLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-druid-feral", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDruidFeral = await redisProxy.GetShuffleDruidFeralLeaderboard(region);
            await BatchCacheCharSummary("shuffle-druid-feral", region, oldleaderboardShuffleDruidFeral.Entries.ToArray(), newleaderboardShuffleDruidFeral.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDruidFeralLadder");
        }
    }
    public async Task CacheShuffleDruidGuardianLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDruidGuardianLeaderboard method in warcraftclient
            var oldleaderboardShuffleDruidGuardian = await redisProxy.GetShuffleDruidGuardianLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-druid-guardian", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDruidGuardian = await redisProxy.GetShuffleDruidGuardianLeaderboard(region);
            await BatchCacheCharSummary("shuffle-druid-guardian", region, oldleaderboardShuffleDruidGuardian.Entries.ToArray(), newleaderboardShuffleDruidGuardian.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDruidGuardianLadder");
        }
    }
    public async Task CacheShuffleDruidRestorationLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleDruidRestorationLeaderboard method in warcraftclient
            var oldleaderboardShuffleDruidRestoration = await redisProxy.GetShuffleDruidRestorationLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-druid-restoration", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleDruidRestoration = await redisProxy.GetShuffleDruidRestorationLeaderboard(region);
            await BatchCacheCharSummary("shuffle-druid-restoration", region, oldleaderboardShuffleDruidRestoration.Entries.ToArray(), newleaderboardShuffleDruidRestoration.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleDruidRestorationLadder");
        }
    }
    public async Task CacheShuffleEvokerDevastationLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleEvokerDevastationLeaderboard method in warcraftclient
            var oldleaderboardShuffleEvokerDevastation = await redisProxy.GetShuffleEvokerDevastationLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-evoker-devastation", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleEvokerDevastation = await redisProxy.GetShuffleEvokerDevastationLeaderboard(region);
            await BatchCacheCharSummary("shuffle-evoker-devastation", region, oldleaderboardShuffleEvokerDevastation.Entries.ToArray(), newleaderboardShuffleEvokerDevastation.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleEvokerDevastationLadder");
        }
    }
    public async Task CacheShuffleEvokerPreservationLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleEvokerPreservationLeaderboard method in warcraftclient
            var oldleaderboardShuffleEvokerPreservation = await redisProxy.GetShuffleEvokerPreservationLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-evoker-preservation", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleEvokerPreservation = await redisProxy.GetShuffleEvokerPreservationLeaderboard(region);
            await BatchCacheCharSummary("shuffle-evoker-preservation", region, oldleaderboardShuffleEvokerPreservation.Entries.ToArray(), newleaderboardShuffleEvokerPreservation.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleEvokerPreservationLadder");
        }
    }
    public async Task CacheShuffleEvokerAugmentationLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleEvokerAugmentationLeaderboard method in warcraftclient
            var oldleaderboardShuffleEvokerAugmentation = await redisProxy.GetShuffleEvokerAugmentationLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-evoker-augmentation", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleEvokerAugmentation = await redisProxy.GetShuffleEvokerAugmentationLeaderboard(region);
            await BatchCacheCharSummary("shuffle-evoker-augmentation", region, oldleaderboardShuffleEvokerAugmentation.Entries.ToArray(), newleaderboardShuffleEvokerAugmentation.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleEvokerAugmentationLadder");
        }
    }
    public async Task CacheShuffleHunterBeastMasteryLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleHunterBeastMasteryLeaderboard method in warcraftclient
            var oldleaderboardShuffleHunterBeastMastery = await redisProxy.GetShuffleHunterBeastMasteryLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-hunter-beastmastery", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleHunterBeastMastery = await redisProxy.GetShuffleHunterBeastMasteryLeaderboard(region);
            await BatchCacheCharSummary("shuffle-hunter-beastmastery", region, oldleaderboardShuffleHunterBeastMastery.Entries.ToArray(), newleaderboardShuffleHunterBeastMastery.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleHunterBeastMasteryLadder");
        }
    }
    public async Task CacheShuffleHunterMarksmanshipLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleHunterMarksmanshipLeaderboard method in warcraftclient
            var oldleaderboardShuffleHunterMarksmanship = await redisProxy.GetShuffleHunterMarksmanshipLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-hunter-marksmanship", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleHunterMarksmanship = await redisProxy.GetShuffleHunterMarksmanshipLeaderboard(region);
            await BatchCacheCharSummary("shuffle-hunter-marksmanship", region, oldleaderboardShuffleHunterMarksmanship.Entries.ToArray(), newleaderboardShuffleHunterMarksmanship.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleHunterMarksmanshipLadder");
        }
    }
    public async Task CacheShuffleHunterSurvivalLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleHunterSurvivalLeaderboard method in warcraftclient
            var oldleaderboardShuffleHunterSurvival = await redisProxy.GetShuffleHunterSurvivalLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-hunter-survival", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleHunterSurvival = await redisProxy.GetShuffleHunterSurvivalLeaderboard(region);
            await BatchCacheCharSummary("shuffle-hunter-survival", region, oldleaderboardShuffleHunterSurvival.Entries.ToArray(), newleaderboardShuffleHunterSurvival.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleHunterSurvivalLadder");
        }
    }
    public async Task CacheShuffleMageArcaneLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleMageArcaneLeaderboard method in warcraftclient
            var oldleaderboardShuffleMageArcane = await redisProxy.GetShuffleMageArcaneLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-mage-arcane", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleMageArcane = await redisProxy.GetShuffleMageArcaneLeaderboard(region);
            await BatchCacheCharSummary("shuffle-mage-arcane", region, oldleaderboardShuffleMageArcane.Entries.ToArray(), newleaderboardShuffleMageArcane.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleMageArcaneLadder");
        }
    }
    public async Task CacheShuffleMageFireLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleMageFireLeaderboard method in warcraftclient
            var oldleaderboardShuffleMageFire = await redisProxy.GetShuffleMageFireLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-mage-fire", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleMageFire = await redisProxy.GetShuffleMageFireLeaderboard(region);
            await BatchCacheCharSummary("shuffle-mage-fire", region, oldleaderboardShuffleMageFire.Entries.ToArray(), newleaderboardShuffleMageFire.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleMageFireLadder");
        }
    }
    public async Task CacheShuffleMageFrostLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleMageFrostLeaderboard method in warcraftclient
            var oldleaderboardShuffleMageFrost = await redisProxy.GetShuffleMageFrostLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-mage-frost", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleMageFrost = await redisProxy.GetShuffleMageFrostLeaderboard(region);
            await BatchCacheCharSummary("shuffle-mage-frost", region, oldleaderboardShuffleMageFrost.Entries.ToArray(), newleaderboardShuffleMageFrost.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleMageFrostLadder");
        }
    }
    public async Task CacheShuffleMonkBrewmasterLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleMonkBrewmasterLeaderboard method in warcraftclient
            var oldleaderboardShuffleMonkBrewmaster = await redisProxy.GetShuffleMonkBrewmasterLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-monk-brewmaster", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleMonkBrewmaster = await redisProxy.GetShuffleMonkBrewmasterLeaderboard(region);
            await BatchCacheCharSummary("shuffle-monk-brewmaster", region, oldleaderboardShuffleMonkBrewmaster.Entries.ToArray(), newleaderboardShuffleMonkBrewmaster.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleMonkBrewmasterLadder");
        }
    }
    public async Task CacheShuffleMonkWindwalkerLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleMonkWindwalkerLeaderboard method in warcraftclient
            var oldleaderboardShuffleMonkWindwalker = await redisProxy.GetShuffleMonkWindwalkerLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-monk-windwalker", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleMonkWindwalker = await redisProxy.GetShuffleMonkWindwalkerLeaderboard(region);
            await BatchCacheCharSummary("shuffle-monk-windwalker", region, oldleaderboardShuffleMonkWindwalker.Entries.ToArray(), newleaderboardShuffleMonkWindwalker.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleMonkWindwalkerLadder");
        }
    }
    public async Task CacheShuffleMonkMistweaverLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleMonkMistweaverLeaderboard method in warcraftclient
            var oldleaderboardShuffleMonkMistweaver = await redisProxy.GetShuffleMonkMistweaverLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-monk-mistweaver", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleMonkMistweaver = await redisProxy.GetShuffleMonkMistweaverLeaderboard(region);
            await BatchCacheCharSummary("shuffle-monk-mistweaver", region, oldleaderboardShuffleMonkMistweaver.Entries.ToArray(), newleaderboardShuffleMonkMistweaver.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleMonkMistweaverLadder");
        }
    }
    public async Task CacheShufflePaladinHolyLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShufflePaladinHolyLeaderboard method in warcraftclient
            var oldleaderboardShufflePaladinHoly = await redisProxy.GetShufflePaladinHolyLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-paladin-holy", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShufflePaladinHoly = await redisProxy.GetShufflePaladinHolyLeaderboard(region);
            await BatchCacheCharSummary("shuffle-paladin-holy", region, oldleaderboardShufflePaladinHoly.Entries.ToArray(), newleaderboardShufflePaladinHoly.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShufflePaladinHolyLadder");
        }
    }
    public async Task CacheShufflePaladinProtectionLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShufflePaladinProtectionLeaderboard method in warcraftclient
            var oldleaderboardShufflePaladinProtection = await redisProxy.GetShufflePaladinProtectionLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-paladin-protection", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShufflePaladinProtection = await redisProxy.GetShufflePaladinProtectionLeaderboard(region);
            await BatchCacheCharSummary("shuffle-paladin-protection", region, oldleaderboardShufflePaladinProtection.Entries.ToArray(), newleaderboardShufflePaladinProtection.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShufflePaladinProtectionLadder");
        }
    }
    public async Task CacheShufflePaladinRetributionLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShufflePaladinRetributionLeaderboard method in warcraftclient
            var oldleaderboardShufflePaladinRetribution = await redisProxy.GetShufflePaladinRetributionLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-paladin-retribution", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShufflePaladinRetribution = await redisProxy.GetShufflePaladinRetributionLeaderboard(region);
            await BatchCacheCharSummary("shuffle-paladin-retribution", region, oldleaderboardShufflePaladinRetribution.Entries.ToArray(), newleaderboardShufflePaladinRetribution.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShufflePaladinRetributionLadder");
        }
    }
    public async Task CacheShufflePriestDisciplineLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShufflePriestDisciplineLeaderboard method in warcraftclient
            var oldleaderboardShufflePriestDiscipline = await redisProxy.GetShufflePriestDisciplineLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-priest-discipline", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShufflePriestDiscipline = await redisProxy.GetShufflePriestDisciplineLeaderboard(region);
            await BatchCacheCharSummary("shuffle-priest-discipline", region, oldleaderboardShufflePriestDiscipline.Entries.ToArray(), newleaderboardShufflePriestDiscipline.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShufflePriestDisciplineLadder");
        }
    }
    public async Task CacheShufflePriestHolyLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShufflePriestHolyLeaderboard method in warcraftclient
            var oldleaderboardShufflePriestHoly = await redisProxy.GetShufflePriestHolyLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-priest-holy", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShufflePriestHoly = await redisProxy.GetShufflePriestHolyLeaderboard(region);
            await BatchCacheCharSummary("shuffle-priest-holy", region, oldleaderboardShufflePriestHoly.Entries.ToArray(), newleaderboardShufflePriestHoly.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShufflePriestHolyLadder");
        }
    }
    public async Task CacheShufflePriestShadowLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShufflePriestShadowLeaderboard method in warcraftclient
            var oldleaderboardShufflePriestShadow = await redisProxy.GetShufflePriestShadowLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-priest-shadow", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShufflePriestShadow = await redisProxy.GetShufflePriestShadowLeaderboard(region);
            await BatchCacheCharSummary("shuffle-priest-shadow", region, oldleaderboardShufflePriestShadow.Entries.ToArray(), newleaderboardShufflePriestShadow.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShufflePriestShadowLadder");
        }
    }
    public async Task CacheShuffleRogueAssassinationLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleRogueAssassinationLeaderboard method in warcraftclient
            var oldleaderboardShuffleRogueAssassination = await redisProxy.GetShuffleRogueAssassinationLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-rogue-assassination", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleRogueAssassination = await redisProxy.GetShuffleRogueAssassinationLeaderboard(region);
            await BatchCacheCharSummary("shuffle-rogue-assassination", region, oldleaderboardShuffleRogueAssassination.Entries.ToArray(), newleaderboardShuffleRogueAssassination.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleRogueAssassinationLadder");
        }
    }
    public async Task CacheShuffleRogueOutlawLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleRogueOutlawLeaderboard method in warcraftclient
            var oldleaderboardShuffleRogueOutlaw = await redisProxy.GetShuffleRogueOutlawLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-rogue-outlaw", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleRogueOutlaw = await redisProxy.GetShuffleRogueOutlawLeaderboard(region);
            await BatchCacheCharSummary("shuffle-rogue-outlaw", region, oldleaderboardShuffleRogueOutlaw.Entries.ToArray(), newleaderboardShuffleRogueOutlaw.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleRogueOutlawLadder");
        }
    }
    public async Task CacheShuffleRogueSubtletyLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleRogueSubtletyLeaderboard method in warcraftclient
            var oldleaderboardShuffleRogueSubtlety = await redisProxy.GetShuffleRogueSubtletyLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-rogue-subtlety", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleRogueSubtlety = await redisProxy.GetShuffleRogueSubtletyLeaderboard(region);
            await BatchCacheCharSummary("shuffle-rogue-subtlety", region, oldleaderboardShuffleRogueSubtlety.Entries.ToArray(), newleaderboardShuffleRogueSubtlety.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleRogueSubtletyLadder");
        }
    }
    public async Task CacheShuffleShamanElementalLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleShamanElementalLeaderboard method in warcraftclient
            var oldleaderboardShuffleShamanElemental = await redisProxy.GetShuffleShamanElementalLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-shaman-elemental", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleShamanElemental = await redisProxy.GetShuffleShamanElementalLeaderboard(region);
            await BatchCacheCharSummary("shuffle-shaman-elemental", region, oldleaderboardShuffleShamanElemental.Entries.ToArray(), newleaderboardShuffleShamanElemental.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleShamanElementalLadder");
        }
    }
    public async Task CacheShuffleShamanEnhancementLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleShamanEnhancementLeaderboard method in warcraftclient
            var oldleaderboardShuffleShamanEnhancement = await redisProxy.GetShuffleShamanEnhancementLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-shaman-enhancement", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleShamanEnhancement = await redisProxy.GetShuffleShamanEnhancementLeaderboard(region);
            await BatchCacheCharSummary("shuffle-shaman-enhancement", region, oldleaderboardShuffleShamanEnhancement.Entries.ToArray(), newleaderboardShuffleShamanEnhancement.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleShamanEnhancementLadder");
        }
    }
    public async Task CacheShuffleShamanRestorationLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleShamanRestorationLeaderboard method in warcraftclient
            var oldleaderboardShuffleShamanRestoration = await redisProxy.GetShuffleShamanRestorationLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-shaman-restoration", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleShamanRestoration = await redisProxy.GetShuffleShamanRestorationLeaderboard(region);
            await BatchCacheCharSummary("shuffle-shaman-restoration", region, oldleaderboardShuffleShamanRestoration.Entries.ToArray(), newleaderboardShuffleShamanRestoration.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleShamanRestorationLadder");
        }
    }
    public async Task CacheShuffleWarlockAfflictionLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleWarlockAfflictionLeaderboard method in warcraftclient
            var oldleaderboardShuffleWarlockAffliction = await redisProxy.GetShuffleWarlockAfflictionLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-warlock-affliction", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleWarlockAffliction = await redisProxy.GetShuffleWarlockAfflictionLeaderboard(region);
            await BatchCacheCharSummary("shuffle-warlock-affliction", region, oldleaderboardShuffleWarlockAffliction.Entries.ToArray(), newleaderboardShuffleWarlockAffliction.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleWarlockAfflictionLadder");
        }
    }
    public async Task CacheShuffleWarlockDemonologyLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleWarlockDemonologyLeaderboard method in warcraftclient
            var oldleaderboardShuffleWarlockDemonology = await redisProxy.GetShuffleWarlockDemonologyLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-warlock-demonology", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleWarlockDemonology = await redisProxy.GetShuffleWarlockDemonologyLeaderboard(region);
            await BatchCacheCharSummary("shuffle-warlock-demonology", region, oldleaderboardShuffleWarlockDemonology.Entries.ToArray(), newleaderboardShuffleWarlockDemonology.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleWarlockDemonologyLadder");
        }
    }
    public async Task CacheShuffleWarlockDestructionLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleWarlockDestructionLeaderboard method in warcraftclient
            var oldleaderboardShuffleWarlockDestruction = await redisProxy.GetShuffleWarlockDestructionLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-warlock-destruction", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleWarlockDestruction = await redisProxy.GetShuffleWarlockDestructionLeaderboard(region);
            await BatchCacheCharSummary("shuffle-warlock-destruction", region, oldleaderboardShuffleWarlockDestruction.Entries.ToArray(), newleaderboardShuffleWarlockDestruction.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleWarlockDestructionLadder");
        }
    }
    public async Task CacheShuffleWarriorArmsLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleWarriorArmsLeaderboard method in warcraftclient
            var oldleaderboardShuffleWarriorArms = await redisProxy.GetShuffleWarriorArmsLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-warrior-arms", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleWarriorArms = await redisProxy.GetShuffleWarriorArmsLeaderboard(region);
            await BatchCacheCharSummary("shuffle-warrior-arms", region, oldleaderboardShuffleWarriorArms.Entries.ToArray(), newleaderboardShuffleWarriorArms.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleWarriorArmsLadder");
        }
    }
    public async Task CacheShuffleWarriorProtectionLadder(string region)
    {
        try
        {
            //not using string since we are executing from GetShuffleWarriorProtectionLeaderboard method in warcraftclient
            var oldleaderboardShuffleWarriorProtection = await redisProxy.GetShuffleWarriorProtectionLeaderboard(region);
            await redisProxy.ClearLeaderboard("shuffle-warrior-protection", region, GameFlavor.Retail);
            //only compares because the backgroundservice shorter than ladderupdate, updates new leaderboard after deleting the old one and is able to be compared because of this
            var newleaderboardShuffleWarriorProtection = await redisProxy.GetShuffleWarriorProtectionLeaderboard(region);
            await BatchCacheCharSummary("shuffle-warrior-protection", region, oldleaderboardShuffleWarriorProtection.Entries.ToArray(), newleaderboardShuffleWarriorProtection.Entries.ToArray(), 5, GameFlavor.Retail);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error in CacheShuffleWarriorProtectionLadder");
        }
    }
}
