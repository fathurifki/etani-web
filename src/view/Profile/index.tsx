import * as React from 'react';
import ProfileView from './components/ProfileView';
import { AppProviderProfile } from './controller';

const Profile = () => {
    return (
        <AppProviderProfile>
            <ProfileView />
        </AppProviderProfile>
    )
}

export default Profile