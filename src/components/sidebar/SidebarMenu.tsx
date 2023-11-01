import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';

const SidebarMenu = () => {
    const root = '/find-work';
    return (
        <div className='flex flex-col gap-4'>
            <SidebarMenuItem 
                title='Home'
                icon='iconly-Home'
                to={`${root}/jobs`}
            />
            
            <SidebarMenuItem 
                title='io Pro'
                icon='iconly-Category'
                to={`${root}/project-management`}
            />

            <SidebarMenuItem 
                title='io Pay'
                icon='iconly-Wallet'
                to={`${root}/payments`}
            />

            <SidebarMenuItem 
                title='io Chat'
                icon='iconly-Chat'
                to={`${root}/chat`}
            />

            <SidebarMenuItem 
                title='Scope Calc'
                icon='iconly-Discount'
                to={`${root}/reports`}
            />
        </div>
    );
};

export default SidebarMenu;