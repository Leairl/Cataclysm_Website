import React, { FC, useEffect, useState } from 'react';
import ProfileEquipment from './profile-equipment/profile-equipment';
import ProfileRating from './profile-rating/profile-rating';
import ProfileStats from './profile-stats/profile-stats';
import { Dragonblight } from '../../clients/Dragonblight';
import { useParams } from 'react-router-dom';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    const [characterSummary, setcharacterSummary] = useState<Dragonblight.CharacterProfileSummary>();
    const { region, server, characterName } = useParams();
    useEffect(() => {
        const CharacterClient = new Dragonblight.ProfileClient();
        const slug = server?.replace(" ", "-")
        CharacterClient.getProfile(slug, characterName, region).then((data) => {
        setcharacterSummary(data);
        })
    },
    [server, characterName, region])
    return(
 <div>
    <div className='flex flex-row'>
    <ProfileEquipment characterProfileSummary={characterSummary}></ProfileEquipment>
    <ProfileStats characterProfileSummary={characterSummary}></ProfileStats>
    </div>
    <ProfileRating></ProfileRating>
</div>
)};

export default Profile;
