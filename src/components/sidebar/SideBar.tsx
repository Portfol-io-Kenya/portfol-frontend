import React from 'react';
import SidebarMenu from './SidebarMenu';
import clsx from 'clsx';

interface Props {
    className?: string;
}

const SideBar = ({className}: Props) => {
    return (
        <section 
            className={clsx("sticky top-[90px] h-[calc(100vh-100px)] flex flex-col justify-center w-[7%] p-2 rounded-md bg-white", className)}
        >
            <SidebarMenu />
        </section>
    );
};

export default SideBar;