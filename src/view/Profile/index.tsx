import * as React from 'react';
import ProfileView from './components/ProfileView';
import { ProfileController } from './controller';

const Profile = () => {
    return (
        <ProfileController>
            <ProfileView />
        </ProfileController>
    )
}

export default Profile