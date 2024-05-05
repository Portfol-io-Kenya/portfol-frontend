import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/UI/Button';
import MyProfile from '@/components/candidate/ProfileForm/MyProfile';
import SocialNetwork from '@/components/candidate/ProfileForm/SocialNetwork';
import Card from '@/components/cards/Card';
import clsx from 'clsx';
import React from 'react';

const Profile = () => {
    return (
        <div className='flex flex-col gap-3'>
            <SectionHeader title={'Edit Profile'} />
            <Card>
                <h4 className="text-xl font-semibold mb-5">My Profile</h4>
                <MyProfile />
                <SocialNetwork />
            </Card>

            <Card>
                <h4 className="text-xl font-semibold mb-5">Social Network</h4>
                <SocialNetwork />
            </Card>

            <Card>
                <h4 className="text-xl font-semibold mb-5">Contact Information</h4>
                <SocialNetwork />
            </Card>

            <Button
                className={clsx("flex justify-center mt-2 w-full rounded-xl bg-afrogreen py-[12px] text-base font-medium \
                text-neutral transition duration-200 hover:bg-dark active:bg-dark  \
                hover:cursor-pointer")} 
                type="submit" 
                // disabled={isPending}
                // onClick={}
            >
                <span className='indicator-label'>Update Profile</span>
            </Button>
        </div>
    );
};

export default Profile;