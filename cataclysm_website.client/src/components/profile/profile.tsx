import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface profileProps {}

const Profile: FC<profileProps> = () => {
   const { region, server, characterName } = useParams();
   return (
 <div>
      {
         region
      }
      {
          server
      }
      {
         characterName
      }
 </div>
);
}
export default Profile;
