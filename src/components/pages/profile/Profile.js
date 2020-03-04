import React , {useState,useEffect} from "react";
import ProfileForm from "../../profile/ProfileForm";
import ProfileBottomTab from "../../profile/ProfileBottomTab";
import {getUser} from '../../../service/sessionStorage/userService';

const Profile = () => {

    const [usr, setUsr] = useState(getUser);     
    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
    usrupd();
    });
    function usrupd () {
       // setUsr(getUser);
      }
    return (
        <div>
            <ProfileForm user={usr} />
            <ProfileBottomTab />
        </div>
    );
};

export default Profile;
