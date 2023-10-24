import React from 'react';
import SidebarMenu from './SidebarMenu';

const SideBar = () => {
    return (
        <section className="sticky top-[72px] h-[calc(100vh-82px)] flex flex-col justify-center w-[7%] p-2 rounded-md bg-white">
            <SidebarMenu />
        </section>
    );
};

export default SideBar;