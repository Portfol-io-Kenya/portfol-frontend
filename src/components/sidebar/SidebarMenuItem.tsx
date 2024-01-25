"use client"
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
    to: string
    title: string
    icon?: string
}

const SidebarMenuItem: React.FC<Props> = ({to, title, icon}) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(to);

    return (
        <ul>
           <Link className="grid grid-cols-1 gap-0" href={to}>
                <div className="relative hover:cursor-pointer">
                    <li 
                        className={
                            clsx("cursor-pointer items-center", 
                            {
                                'text-neutral': isActive,
                            })}
                    >
                        <div className={clsx("flex flex-col items-center",
                            {
                                "text-slate-400": !isActive,
                                "text-afrogreen": isActive,
                            }
                        )}>
                            <i className={clsx(icon, 'p-2 rounded-lg text-xl icbo')}
                            ></i>
                            <span className={clsx('text-xs',
                                {
                                    'font-[600]': isActive
                                }
                            )}>{title}</span>
                        </div>
                    </li>
                </div>          
            </Link>
        </ul>
    );
};

export default SidebarMenuItem;