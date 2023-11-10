"use client"
import React from 'react';
import Dropdown from './Dropdown';
import Avatar from '../Avatar';
import { useLogout } from '@/rest-api/auth';
import { FiLogOut } from "react-icons/fi"
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const AccountDropdown = () => {
    const router = useRouter();
    const DROPDOWN = [
        {
            title: 'Logout', 
            onClick: () => {
                router.push('/auth/login')
                toast.error('You are now logged out!', {autoClose: 3500, position: 'top-center'})
            }, 
            icon: <FiLogOut /> }
    ]
    return (
        <div>
            <Dropdown 
                button={
                    <Avatar 
                        img={'url(/media/avatars/avatar-01.jpg)'} 
                        className={'rounded-full mr-5'}
                    />
                }
                menu={DROPDOWN}
            />
        </div>
    );
};

export default AccountDropdown;