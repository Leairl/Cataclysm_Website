import React, { FC, ForwardedRef, ReactElement, useEffect, useState } from "react";
import { Dragonblight } from "../../../clients/Dragonblight";
import { useParams } from "react-router-dom";
import {
  Card,
  ChevronDownIcon,
  DataList,
  Heading,
  Skeleton,
  Tooltip,
} from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";
import "../profile.css";
import "./profile-stats.css";
import classNames from "classnames";

//allows subset calls of profile from profile.tsx
interface ProfileStatsProps {
  characterProfileSummary: Dragonblight.CharacterProfileSummary | undefined;
}

const ProfileStats: FC<ProfileStatsProps> = (props) => {
  const [characterStats, setcharacterStats] = useState<
    Dragonblight.CharacterStatisticsSummary
  >();

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
  const AccordionTrigger = React.forwardRef<HTMLButtonElement, Accordion.AccordionTriggerProps>(
    ({ children, className, ...props }, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
      <Accordion.Header className="flex">
        <Accordion.Trigger
          className={classNames(
            'shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between text-[15px] leading-none outline-none',
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon
            className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  useEffect(() => {
    setLoading(true);
    const CharacterStatsClient = new Dragonblight.StatClient(); //talking to controller
    const slug = server?.replace(" ", "-");
    CharacterStatsClient.getCharacterStats(slug, characterName, region).then(
      //saves data from get controller
      (data) => {
        setcharacterStats(data); //updates characterRatings data
        setLoading(false);
      }
    );
  }, [region, server, characterName]);
  return (
    <div className="w-48 pl-3">
      <div>{loading && getSkeletonStatCards()}</div>
      <div>{!loading && getStats()}</div>
    </div>
  );
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

  function reforgeWarning(): ReactElement {
    return (
      <Tooltip
        className="background-warning-color"
        content="No reforging data is available from the Blizzard API. This stat may be incorrect."
      >
        <span className="text-white pl-1">⚠️</span>
      </Tooltip>
    );
  }
  function getGeneralCard(): ReactElement {
    //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div key={"GetStatsGeneral"}>
        <Card>
          <Heading mb="2" size="2">
            {" "}
            General{" "}
          </Heading>
          <DataList.Root size="1">
            <DataList.Item>
              <DataList.Label minWidth="90px"> Health </DataList.Label>
              <DataList.Value>
                {" "}
                {((characterStats?.health ?? 0) / 1000).toFixed(0) + "K"}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Item Level </DataList.Label>
              <DataList.Value>
                {" "}
                {props.characterProfileSummary?.average_item_level}
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card>
      </div>
    );
  }
  function getAttributesCard(): ReactElement {
    //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div className="pt-3" key={"GetStatsAttributes"}>
        <Card>
          <Heading mb="2" size="2">
            {" "}
            Attributes{" "}
          </Heading>
          <DataList.Root size="1">
            <DataList.Item>
              <DataList.Label minWidth="90px"> Strength </DataList.Label>
              <DataList.Value
                className={
                  (characterStats?.strength?.effective ?? 0) >
                  (characterStats?.strength?.base ?? 0)
                    ? "green_text"
                    : ""
                }
              >
                {" "}
                {characterStats?.strength?.effective}{" "}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Agility </DataList.Label>
              <DataList.Value
                className={
                  (characterStats?.agility?.effective ?? 0) >
                  (characterStats?.agility?.base ?? 0)
                    ? "green_text text-right"
                    : "text-right"
                }
              >
                {" "}
                {characterStats?.agility?.effective}{" "}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Stamina </DataList.Label>
              <DataList.Value
                className={
                  (characterStats?.stamina?.effective ?? 0) >
                  (characterStats?.stamina?.base ?? 0)
                    ? "green_text text-right"
                    : "text-right"
                }
              >
                {" "}
                {characterStats?.stamina?.effective}{" "}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Intellect </DataList.Label>
              <DataList.Value
                className={
                  (characterStats?.intellect?.effective ?? 0) >
                  (characterStats?.intellect?.base ?? 0)
                    ? "green_text"
                    : ""
                }
              >
                {" "}
                {characterStats?.intellect?.effective}{" "}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Spirit {reforgeWarning()}
              </DataList.Label>
              <DataList.Value
                className={
                  (characterStats?.spirit?.effective ?? 0) >
                  (characterStats?.spirit?.base ?? 0)
                    ? "green_text"
                    : ""
                }
              >
                {characterStats?.spirit?.effective}{" "}
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card>
      </div>
    );
  }
  function getMeleeCard(): ReactElement {
    //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div className="pt-3" key={"GetStatsMelee"}>
        <Card className="dropdown-accordionCard">
          <Accordion.AccordionItem value="MeleeCard">
            <AccordionTrigger>
              <Heading size="2">
                Melee
              </Heading>
            </AccordionTrigger>
            <Accordion.AccordionContent className="AccordionContent">
              <DataList.Root size="1">
                <DataList.Item>
                  <DataList.Label minWidth="90px"> Damage </DataList.Label>
                  <DataList.Value>
                    {" "}
                    {Math.round(
                      characterStats?.main_hand_damage_min ?? 0
                    )} - {Math.round(characterStats?.main_hand_damage_max ?? 0)}{" "}
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="90px"> DPS </DataList.Label>
                  <DataList.Value>
                    {" "}
                    {(characterStats?.main_hand_dps ?? 0).toFixed(1)}{" "}
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="90px">
                    {" "}
                    Attack Power{" "}
                  </DataList.Label>
                  <DataList.Value>
                    {" "}
                    {characterStats?.attack_power ?? 0}{" "}
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="90px">
                    {" "}
                    Haste {reforgeWarning()}
                  </DataList.Label>
                  <DataList.Value>
                    {(characterStats?.melee_haste?.value ?? 0).toFixed(2) + "%"}
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="90px">
                    {" "}
                    Hit Chance {reforgeWarning()}
                  </DataList.Label>
                  <DataList.Value></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="90px">
                    {" "}
                    Crit Chance {reforgeWarning()}
                  </DataList.Label>
                  <DataList.Value>
                    {" "}
                    {(characterStats?.melee_crit?.value ?? 0).toFixed(2) + "%"}
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="90px">
                    {" "}
                    Expertise {reforgeWarning()}
                  </DataList.Label>
                  <DataList.Value></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="90px">
                    {" "}
                    Mastery {reforgeWarning()}
                  </DataList.Label>
                  <DataList.Value>
                    {(characterStats?.mastery?.value ?? 0).toFixed(2) + "%"}
                  </DataList.Value>
                </DataList.Item>
              </DataList.Root>
            </Accordion.AccordionContent>
          </Accordion.AccordionItem>
        </Card>
      </div>
    );
  }
  function getRangedCard(): ReactElement {
    //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div className="pt-3" key={"GetStatsRanged"}>
        <Card className="dropdown-accordionCard"> 
        <Accordion.AccordionItem value="RangedCard">
        <AccordionTrigger>
          <Heading size="2">
            Ranged
          </Heading>
          </AccordionTrigger>
          <Accordion.AccordionContent className="AccordionContent">
          <DataList.Root size="1">
            <DataList.Item>
              <DataList.Label minWidth="90px"> Damage </DataList.Label>
              <DataList.Value> </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> DPS </DataList.Label>
              <DataList.Value> </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Attack Power </DataList.Label>
              <DataList.Value>
                {" "}
                {props.characterProfileSummary?.character_class?.name ==
                "Hunter"
                  ? props.characterProfileSummary.level * 2 +
                    ((characterStats?.agility?.effective ?? 0) * 2 - 20)
                  : "0"}{" "}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Haste {reforgeWarning()}
              </DataList.Label>
              <DataList.Value>
                {(characterStats?.ranged_haste?.value ?? 0).toFixed(2) + "%"}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Hit Chance {reforgeWarning()}
              </DataList.Label>
              <DataList.Value></DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Crit Chance {reforgeWarning()}
              </DataList.Label>
              <DataList.Value>
                {" "}
                {(characterStats?.ranged_crit?.value ?? 0).toFixed(2) + "%"}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Expertise {reforgeWarning()}
              </DataList.Label>
              <DataList.Value></DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Mastery {reforgeWarning()}
              </DataList.Label>
              <DataList.Value>
                {(characterStats?.mastery?.value ?? 0).toFixed(2) + "%"}
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
          </Accordion.AccordionContent>
          </Accordion.AccordionItem>
        </Card>
      </div>
    );
  }
  function getSpellCard(): ReactElement {
    //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div className="pt-3" key={"GetStatsSpell"}>
        <Card className="dropdown-accordionCard">
        <Accordion.AccordionItem value="SpellCard">
        <AccordionTrigger>
          <Heading size="2">
            Spell
          </Heading>
          </AccordionTrigger>
          <Accordion.AccordionContent className="AccordionContent">
          <DataList.Root size="1">
            <DataList.Item>
              <DataList.Label minWidth="90px"> Spell Power </DataList.Label>
              <DataList.Value> {characterStats?.spell_power} </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Haste {reforgeWarning()}{" "}
              </DataList.Label>
              <DataList.Value>
                {(characterStats?.spell_haste?.value ?? 0).toFixed(2) + "%"}
              </DataList.Value>{" "}
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Hit Chance {reforgeWarning()}
              </DataList.Label>
              <DataList.Value></DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Spell Penetration{" "}
              </DataList.Label>
              <DataList.Value>
                {characterStats?.spell_penetration}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Mana Regen </DataList.Label>
              <DataList.Value>{characterStats?.mana_regen}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Combat Mana Regen{" "}
              </DataList.Label>
              <DataList.Value>
                {characterStats?.mana_regen_combat}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Crit Chance {reforgeWarning()}
              </DataList.Label>
              <DataList.Value>
                {(characterStats?.spell_crit?.value ?? 0).toFixed(2) + "%"}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px">
                {" "}
                Mastery {reforgeWarning()}{" "}
              </DataList.Label>
              <DataList.Value>
                {(characterStats?.mastery?.value ?? 0).toFixed(2) + "%"}
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
          </Accordion.AccordionContent>
          </Accordion.AccordionItem>
        </Card>
      </div>
    );
  }
  function getDefenseCard(): ReactElement {
    //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div className="pt-3" key={"GetStatsDefense"}>
        <Card>
          <Heading mb="2" size="2">
            {" "}
            Defense{" "}
          </Heading>
          <DataList.Root size="1">
            <DataList.Item>
              <DataList.Label minWidth="90px"> Armor </DataList.Label>
              <DataList.Value>
                {" "}
                {characterStats?.armor?.effective}{" "}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Dodge </DataList.Label>
              <DataList.Value>
                {(characterStats?.dodge?.value ?? 0).toFixed(0) + "%"}
              </DataList.Value>{" "}
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Parry </DataList.Label>
              <DataList.Value>
                {(characterStats?.parry?.value ?? 0).toFixed(0) + "%"}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Block </DataList.Label>
              <DataList.Value>
                {(characterStats?.block?.value ?? 0).toFixed(0) + "%"}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="90px"> Resilience </DataList.Label>
              <DataList.Value></DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card>
      </div>
    );
  }
  //loops through each character rating (remember: characterratings is updated every time the user looks up a character, and has character data from controller)
  function getStats() {
    const StatsCards: ReactElement[] = [];
    if (characterStats) {
      StatsCards.push(getGeneralCard());
      StatsCards.push(getAttributesCard());
      StatsCards.push(getDefenseCard());
      StatsCards.push(getMeleeCard());
      StatsCards.push(getRangedCard());
      StatsCards.push(getSpellCard());
    }
    return (
      <div>
        <div className="flex flex-col w-48">{StatsCards.slice(0, 3)}</div>
        <Accordion.Root
          className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
          type="single"
          collapsible
        >
          <div className="flex flex-col w-48">{StatsCards.slice(3, 6)}</div>
        </Accordion.Root>
      </div>
    );
  }
};
export default ProfileStats;
