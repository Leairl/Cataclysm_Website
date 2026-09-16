import React, { useState, useEffect } from 'react';
import { Dragonblight } from '../../clients/Dragonblight';
import { Card } from '@radix-ui/themes';


interface CutoffProps {
    bracket: string;
    region: string;
}

const Cutoffs : React.FC<CutoffProps> = (props) => {
  // Handle state management
  const [rewards, setRewards] = useState<
  Dragonblight.PvpSeasonRewardWithRank[]
>();
const [loading, setLoading] = useState<boolean>(true);

async function CutoffData() {
    setLoading(true);
    const DragonblightClient = new Dragonblight.PvpLeaderboardClient();
    setRewards(await DragonblightClient.getPvPRewards(props.region))
    setLoading(false);
}

  useEffect(() => {
    CutoffData()
  }, [props.bracket, props.region]);

  return (
    <div className="flex flex-row min-h-[64px] justify-center">
    <div className={!(loading && rewards != undefined) ? "mobileLeftPadding fadeIn flex flex-row flex-wrap wrap" : "mobileLeftPadding fadeOut flex flex-row flex-wrap wrap"}>
  { 
rewards?.filter(r => {
  //if result is positive during sort, swap values to sort in ascending order
return r.bracket?.type?.includes(props.bracket) || (r.bracket?.type?.includes('BATTLEGROUNDS') && props.bracket == 'rbg')
}).sort((c,p) => {
  return p.rating_cutoff - c.rating_cutoff
}).map((i) => {
    function getAchievementColor(AchievementName: string | undefined): string | undefined {
        if (AchievementName?.endsWith(' Gladiator')) {
            return "text-yellow-600"
        }
        if (AchievementName?.startsWith('Gladiator') || AchievementName?.startsWith('Hero of the Faction')) {
            return "text-purple-500	"
        }
        if (AchievementName?.startsWith('Duelist')) {
            return "text-blue-500"
        }
        if (AchievementName?.startsWith('Rival')) {
            return "text-green-500"
        }
        if (AchievementName?.startsWith('Challenger')) {
            return "text-neutral-500"
        }
    }

    function getCardBorder(AchievementName: string | undefined) {
        if (AchievementName?.endsWith(' Gladiator')) {
            return "border-yellow-600 border-2"
        }
        if (AchievementName?.startsWith('Gladiator') || AchievementName?.startsWith('Hero of the Faction')) {
            return "border-purple-500 border-2"
        }
        if (AchievementName?.startsWith('Duelist')) {
            return "border-blue-500 border-2"
        }
        if (AchievementName?.startsWith('Rival')) {
            return "border-green-500 border-2"
        }
        if (AchievementName?.startsWith('Challenger')) {
            return "border-neutral-500 border-2"
        }
    }

  return (
    
    <Card className={getCardBorder(i.achievement?.name?.replace(/- Season [0-9][0-9]/, '').replace(/: Season [0-9][0-9]/, '').replace('[DNT] ', '')) + " hover:highlight- w-[180px] min-w-[180px] p-1 text-center mb-2 mr-2 flex-grow-0"}>
        <span className={getAchievementColor(i.achievement?.name?.replace(/- Season [0-9][0-9]/, '').replace(/: Season [0-9][0-9]/, '').replace('[DNT] ', ''))}>
        <b>{i.achievement?.name?.replace(/- Season [0-9][0-9]/, '').replace(/: Season [0-9][0-9]/, '').replace('[DNT] ', '')}</b></span> {" "}
        <br></br>
        <span className="text-sm">Rating Cutoff:{" "}{i.rating_cutoff}</span>
        <br></br>
        <span className="text-xs italic">Ranks: 1 - {i.rank}</span>
    </Card>
  );
})
  }</div>
</div>
  );
};

export default Cutoffs;