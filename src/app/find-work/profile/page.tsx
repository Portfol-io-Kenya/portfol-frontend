import SectionHeader from '@/components/SectionHeader';
import MyProfile from '@/components/candidate/ProfileForm/MyProfile';
import Card from '@/components/cards/Card';
import React from 'react';

const Profile = () => {
    return (
        <div className='flex flex-col gap-3'>
            <SectionHeader title={'Edit Profile'} />
            <Card>
                <h4 className="text-xl font-semibold mb-5">My Profile</h4>
                <MyProfile />
            </Card>
        </div>
    );
};

export default Profile;