import React from 'react';
import SidebarMenu from './SidebarMenu';

const SideBar = () => {
    return (
        <section className="sticky top-[90px] h-[calc(100vh-100px)] flex flex-col justify-center w-[7%] p-2 rounded-md bg-white">
            <SidebarMenu />
        </section>
    );
};

export default SideBar;