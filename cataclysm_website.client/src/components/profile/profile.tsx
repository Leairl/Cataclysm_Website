import React, { FC, useEffect, useState } from 'react';
import ProfileEquipment from './profile-equipment/profile-equipment';
import ProfileRating from './profile-rating/profile-rating';
import ProfileStats from './profile-stats/profile-stats';
import { Dragonblight } from '../../clients/Dragonblight';
import { useParams } from 'react-router-dom';
import { Flex, Text, Switch } from '@radix-ui/themes';
import { useCookies } from 'react-cookie'

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    const [characterSummary, setcharacterSummary] = useState<Dragonblight.CharacterProfileSummary>();
    const [characterEquipmentSummary, setCharacterEquipmentSummary] = useState<Dragonblight.CharacterEquipmentSummary>();
    const [achievementsSummary, setAchievementsSummary] = useState<Dragonblight.CharacterAchievementsSummary>();
    const [loading, setLoading] = useState<boolean>(true);
    const [cookies, setCookie] = useCookies(['showModelViewer']);
    //makes sure showModelViewer is always set to true, and to use our cookies whenever we refresh (keeps the switch at the same spot)
    const [showModelViewer, setShowModelViewer] = useState(cookies.showModelViewer ?? true)
    const { region, server, characterName } = useParams();
    useEffect(() => {
        setCookie('showModelViewer', showModelViewer.toString(), {path: '/' });
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
    return(
        // uses loading useState in profile.tsx, but is affected by useEffect in child profile components to allow change in display.
 <div>
 <div className="mb-3 ml-3 grid w-[200px]">
 <Text as="label" size="2">
   <Flex gap="2">
    {/* when setShowModelViewer changes, calls useEffect to use the correct ShowModelViewer on cookies*/}
     <Switch onCheckedChange={(checked) => {setShowModelViewer(checked)}} color='gray' size="1" radius='large' checked={showModelViewer}/>
     Character Model Viewer
   </Flex>
 </Text>
</div>
 <div className='flex-wrap flex flex-row justify-center'>
    <div className='flex flex-col'>
    <ProfileEquipment 
    characterProfileSummary={characterSummary} 
    characterEquipmentSummary={characterEquipmentSummary} 
    characterAchievementsSummary={achievementsSummary} 
    loading={loading} 
    showModelViewer={showModelViewer}></ProfileEquipment> 
    <ProfileRating></ProfileRating>
    </div>
    <ProfileStats characterProfileSummary={characterSummary} characterEquipmentSummary={characterEquipmentSummary} loading={loading}></ProfileStats>
</div>
</div>
)};

export default Profile;
