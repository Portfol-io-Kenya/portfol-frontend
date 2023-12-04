"use client"
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
    links: any
}

const HeaderMenu: React.FC<Props> = ({links}) => {
    const pathname = usePathname();

    return (
        <div className='hidden md:flex gap-10'>
            {links ? 
            (links.map((link: any, index: any) => {
                const isActive = pathname === link.href;
                return (
                    <Link 
                        key={index}
                        href={link.href} 
                        className={clsx("text-sm flex",{
                            "text-slate-600": !isActive,
                            "text-green-600 font-[600]": isActive,
                        })}
                    >
                        {link.name}
                    </Link>
                )})
            ) : (
                <span>No menu found!</span>
            )
        }
        </div>   
    );
};

export default HeaderMenu;