import React from 'react';
import HeaderMenu from './HeaderMenu';

const MENU = [
    {name: 'Find Work', href: '/find-work'},
    {name: 'Find Talent', href: '/find-work/talent'},
    {name: 'Proposals', href: '/find-work/proposals'},
    {name: 'Reports', href: '/find-work/reports'},
]
const Header = () => {
    return (
        <section className="sticky top-3 bg-white/70 backdrop-blur flex py-3 px-2 rounded-md">
                {/* col 1  */}
                <div className="flex w-full basis-3/5 items-center">
                    {/* logo */}
                    <span className="font-bold text-md mr-10">Portfol.io</span>

                    {/* menu  */}
                    <HeaderMenu links={MENU} />
                </div>

                {/* col 2  */}
                <div className="">
                    {/* notifications */}

                    {/* avatar */}
                </div>
                
            </section>
    );
};

export default Header;