import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Dragonblight } from '../../../clients/Dragonblight';
import { useParams } from 'react-router-dom';
import { Card, DataList, Heading, Skeleton } from '@radix-ui/themes';
import "../profile.css"

//allows subset calls of profile from profile.tsx
interface ProfileStatsProps {
  characterProfileSummary: Dragonblight.CharacterProfileSummary | undefined
}

const ProfileStats: FC<ProfileStatsProps> = (props) => {
const [characterStats, setcharacterStats] = useState<Dragonblight.CharacterStatisticsSummary>();

const [loading, setLoading] = useState<boolean>();
const { region, server, characterName } = useParams();
const CardStyles: string[] = [
  "m-4 mt-5 w-64 h-20",
  "m-4 mt-5 w-64 h-20",
  "m-4 mt-5 w-64 h-20",
  "m-4 mt-5 w-64 h-20",
  "m-4 mt-5 w-64 h-20",
  "m-4 mt-5 w-64 h-20",
];


useEffect(() => {
    setLoading(true);
    const CharacterStatsClient = new Dragonblight.StatClient(); //talking to controller
    const slug = server?.replace(" ", "-");
    CharacterStatsClient.getCharacterStats(slug, characterName, region).then( //saves data from get controller
      (data) => {
        setcharacterStats(data); //updates characterRatings data
        setLoading(false);
      }
    );
  }, [region, server, characterName]);
  return (
  <div className='pl-3 w-48'>
  <div>{loading && getSkeletonStatCards()}</div>
  <div>{!loading && getStats()}</div>
  </div>
  )
  function getSkeleton(i: number) {
    return (
      <Skeleton className={CardStyles[i]} key={"SkeletonRating" + i}>
        <Card></Card>
      </Skeleton>
    );
  }
  function getSkeletonStatCards() {
    const SkeletonCards = [];
    for (let i = 0; i < 6; i++) {
      SkeletonCards.push(getSkeleton(i));
    }
    return <div className="flex flex-col">{SkeletonCards}</div>;
  }
  
  function getGeneralCard():ReactElement { //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div key={"GetStatsGeneral"}>
        <Card>
        <Heading mb="2" size="2"> General </Heading>
        <DataList.Root size="1">
    <DataList.Item>
      <DataList.Label minWidth="90px"> Health </DataList.Label>
      <DataList.Value> {characterStats?.health}</DataList.Value>
    </DataList.Item>
    <DataList.Item>
      <DataList.Label minWidth="90px"> Item Level </DataList.Label>
      <DataList.Value> {props.characterProfileSummary?.average_item_level}</DataList.Value>
    </DataList.Item>
  </DataList.Root>
        </Card>
      </div>
    );
  }
  function getAttributesCard() : ReactElement { //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div className="pt-3" key={"GetStatsAttributes"}>
        <Card>
        <Heading mb="2" size="2"> Attributes </Heading>
        <DataList.Root size="1">
    <DataList.Item>
      <DataList.Label minWidth="90px"> Strength </DataList.Label>
      <DataList.Value className={((characterStats?.strength?.effective ?? 0) > (characterStats?.strength?.base ?? 0) ? "green_text" : "")}> {characterStats?.strength?.effective} </DataList.Value>
    </DataList.Item>
    <DataList.Item>
      <DataList.Label minWidth="90px"> Agility </DataList.Label>
      <DataList.Value className={((characterStats?.agility?.effective ?? 0) > (characterStats?.agility?.base ?? 0) ? "green_text text-right" : "text-right")}> {characterStats?.agility?.effective} </DataList.Value>
    </DataList.Item>
    <DataList.Item>
      <DataList.Label minWidth="90px"> Stamina </DataList.Label>
      <DataList.Value className={((characterStats?.stamina?.effective ?? 0) > (characterStats?.stamina?.base ?? 0) ? "green_text text-right" : "text-right")}> {characterStats?.stamina?.effective} </DataList.Value>
    </DataList.Item>
    <DataList.Item>
      <DataList.Label minWidth="90px"> Intellect </DataList.Label>
      <DataList.Value className={((characterStats?.intellect?.effective ?? 0) > (characterStats?.intellect?.base ?? 0) ? "green_text" : "")}> {characterStats?.intellect?.effective} </DataList.Value>
    </DataList.Item>
    <DataList.Item>
      <DataList.Label minWidth="90px"> Spirit </DataList.Label>
      <DataList.Value className={((characterStats?.spirit?.effective ?? 0) > (characterStats?.spirit?.base ?? 0) ? "green_text" : "")}> {characterStats?.spirit?.effective} </DataList.Value>
    </DataList.Item>
  </DataList.Root>
        </Card>
      </div>
    );
  }
  function getMeleeCard() : ReactElement { //connects specific bracket data into card, set to type ReactElement with tsx code inside return
  return (
    <div className="pt-3" key={"GetStatsMelee"}>
      <Card>
      <Heading mb="2" size="2"> Melee </Heading>
      <DataList.Root size="1">
  <DataList.Item>
    <DataList.Label minWidth="90px"> Damage </DataList.Label>
    <DataList.Value> {Math.round(characterStats?.main_hand_damage_min ?? 0)} - {Math.round(characterStats?.main_hand_damage_max ?? 0)} </DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label minWidth="90px"> DPS </DataList.Label>
    <DataList.Value> {(characterStats?.main_hand_dps ?? 0).toFixed(1)} </DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label minWidth="90px"> Attack Power </DataList.Label>
    <DataList.Value> {characterStats?.attack_power ?? 0} </DataList.Value>
  </DataList.Item>
    <DataList.Item>
    <DataList.Label minWidth="90px"> Haste </DataList.Label>
    <DataList.Value>{(characterStats?.melee_haste?.value ?? 0).toFixed(2) + "%"} ⚠️</DataList.Value> 
    </DataList.Item>
    <DataList.Item>
    <DataList.Label minWidth="90px"> Hit Chance </DataList.Label>
    <DataList.Value>⚠️</DataList.Value> 
    </DataList.Item>
    <DataList.Item>
    <DataList.Label minWidth="90px"> Crit Chance </DataList.Label>
    <DataList.Value>{(characterStats?.melee_crit?.value?? 0).toFixed(2) + "%"} ⚠️</DataList.Value> 
    </DataList.Item>
    <DataList.Item>
    <DataList.Label minWidth="90px"> Expertise </DataList.Label>
    <DataList.Value>⚠️</DataList.Value> 
    </DataList.Item>
    <DataList.Item>
    <DataList.Label minWidth="90px"> Mastery </DataList.Label>
    <DataList.Value>{(characterStats?.mastery?.value?? 0).toFixed(2) + "%"} ⚠️</DataList.Value> 
    </DataList.Item>
</DataList.Root>
      </Card>
    </div>
  );
  }
  // function getSpellCard(StatType :Dragonblight.CharacterStatisticsSummary | null) : ReactElement { //connects specific bracket data into card, set to type ReactElement with tsx code inside return
  //   return (
  //     <div key={"GetStats" + StatType.}>
  //       <Card>
  //           <div>
  //             </div>
  //             <div className="flex justify-center">{BracketStatistics?.rating ? BracketStatistics?.rating : "0"}</div>

  //       </Card>
  //     </div>
  //   );
  // }
  // function getRangedCard(StatType :Dragonblight.CharacterStatisticsSummary | null) : ReactElement { //connects specific bracket data into card, set to type ReactElement with tsx code inside return
  //   return (
  //     <div key={"GetStats" + StatType.}>
  //       <Card>
  //           <div>
  //             </div>
  //             <div className="flex justify-center">{BracketStatistics?.rating ? BracketStatistics?.rating : "0"}</div>

  //       </Card>
  //     </div>
  //   );
  // }
  // function getMeleeCard(StatType :Dragonblight.CharacterStatisticsSummary | null) : ReactElement { //connects specific bracket data into card, set to type ReactElement with tsx code inside return
  //   return (
  //     <div key={"GetStats" + StatType.}>
  //       <Card>
  //           <div>
  //             </div>
  //             <div className="flex justify-center">{BracketStatistics?.rating ? BracketStatistics?.rating : "0"}</div>

  //       </Card>
  //     </div>
  //   );
  // }
  //loops through each character rating (remember: characterratings is updated every time the user looks up a character, and has character data from controller)
  function getStats() {
    const StatsCards : ReactElement[] = [];
    if (characterStats){ 
      StatsCards.push(getGeneralCard());
      StatsCards.push(getAttributesCard());
      StatsCards.push(getMeleeCard());
      // StatsCards.push(getGeneralCard(characterStats));
      // StatsCards.push(getGeneralCard(characterStats));
      // StatsCards.push(getGeneralCard(characterStats));
        }
    return <div className="flex flex-col w-48">{StatsCards}</div>;
  }
};
export default ProfileStats;
