import React, { FC, useEffect, useState } from 'react';
import ProfileEquipment from './profile-equipment/profile-equipment';
import ProfileRating from './profile-rating/profile-rating';
import ProfileStats from './profile-stats/profile-stats';
import { Dragonblight } from '../../clients/Dragonblight';
import { useParams } from 'react-router-dom';
import { Flex, Text, SegmentedControl, Switch } from '@radix-ui/themes';
import "./profile.css"
import { useCookies } from 'react-cookie';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    const [characterSummary, setcharacterSummary] = useState<Dragonblight.CharacterProfileSummary>();
    const [characterEquipmentSummary, setCharacterEquipmentSummary] = useState<Dragonblight.CharacterEquipmentSummary>();
    const [achievementsSummary, setAchievementsSummary] = useState<Dragonblight.CharacterAchievementsSummary>();

    const [loading, setLoading] = useState<boolean>(true);
    const [cookies, setCookie] = useCookies(["showModelViewer"]);
    //makes sure showModelViewer is always set to true, and to use our cookies whenever we refresh (keeps the switch at the same spot)
    const [showModelViewer, setShowModelViewer] = useState(
      cookies.showModelViewer ?? true
    );
    const { region, server, characterName, urlTab } = useParams();
    const [currTab, setCurrTab] = useState<string>();

    useEffect(() => {
      setCookie("showModelViewer", showModelViewer.toString(), { path: "/" });
    }, [showModelViewer, setCookie]);
    useEffect(() => {
        const CharacterClient = new Dragonblight.ProfileClient();
        const CharacterAchievementClient = new Dragonblight.AchievementClient();
        const slug = server?.replace(" ", "-")
        //profile data displayed before equipment sequentially
        setLoading(true)
        CharacterClient.getProfile(slug, characterName, region).then((data) => {
            setcharacterSummary(data);
            CharacterClient.getEquipment(slug, characterName, region).then((dataEquip) => {
                setCharacterEquipmentSummary(dataEquip);
                CharacterAchievementClient.getCharacterAchievements(slug, characterName, region).then((data) => {
                    setAchievementsSummary(data);
                })
                setLoading(false)
                })
        })
    },
    [server, characterName, region])

    //updates the page to show the correct tab
    useEffect(() => {
      ChangeTab(urlTab ?? 'gear')
    }, [urlTab])



    function ChangeTab(newTab: string) {
      if (currTab != newTab) {
        window.history.pushState(null, "", `/profile/${region}/${server}/${characterName}/${newTab}`);
        setCurrTab(newTab);
      }
    }

    return(
        // uses loading useState in profile.tsx, but is affected by useEffect in child profile components to allow change in display.
 <div className='grid'>
 <div className="button-row">
 <Text as="label" size="2">
   <Flex className='button-row'gap="2">
    {/* when setShowModelViewer changes, calls useEffect to use the correct ShowModelViewer on cookies*/}
          <div className={loading ? "div-disabled" : ""}>
            <SegmentedControl.Root
              className=" w-[250px] flex-grow-0"
              defaultValue={"gear"}
            >
              <SegmentedControl.Item
                onClick={() => {
                  ChangeTab("gear");
                }}
                value="Gear"
              >
                Gear
              </SegmentedControl.Item>
              <SegmentedControl.Item
                onClick={() => {
                  ChangeTab("talents");
                }}
                value="Talents"
              >
                Talents
              </SegmentedControl.Item>
              {(characterSummary?.character_class?.name == 'Hunter' && <SegmentedControl.Item
                onClick={() => {
                  ChangeTab("pettalents");
                }}
                value="Pet"
              >
                Pet
              </SegmentedControl.Item>)}
              <SegmentedControl.Item
                onClick={() => {
                  ChangeTab("glyphs");
                }}
                value="Glyphs"
              >
                Glyphs
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
          <div className='flex flex-grow h-100'></div>
          <div className='self-center'>
          <Switch className='self-center'
                      onCheckedChange={(checked) => {
                        setShowModelViewer(checked);
                      }}
                      color="gray"
                      size="1"
                      radius="large"
                      checked={showModelViewer}
                    />
                    <span className="w-[160px] self-center"> Character Model Viewer </span>
                    </div>
   </Flex>
   
 </Text>
</div>
 <div className='flex-wrap flex flex-row justify-center'>
    <div className='flex flex-col'>
    <ProfileEquipment 
    currTab={currTab}
    characterProfileSummary={characterSummary} 
    characterEquipmentSummary={characterEquipmentSummary} 
    characterAchievementsSummary={achievementsSummary} 
    showModelViewer={showModelViewer}
    loading={loading} 
    ></ProfileEquipment> 
    <ProfileRating></ProfileRating>
    </div>
    <ProfileStats characterProfileSummary={characterSummary} characterEquipmentSummary={characterEquipmentSummary} loading={loading}></ProfileStats>
</div>
</div>
)};

export default Profile;
