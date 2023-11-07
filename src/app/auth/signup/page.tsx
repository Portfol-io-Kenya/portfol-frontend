"use client"
import IndividualSignup from '@/components/auth/IndividualSignup';
import React from 'react';
import { Tab } from '@headlessui/react'
import CompanySignup from '@/components/auth/CompanySignup';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const ITEMS = ['Individual', 'Company']

const SignupPage = () => {
    return (
        <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-green-600/20 p-1">
                {ITEMS.map((item, index)=> (
                    <Tab 
                        key={index}
                        className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-700',
                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                            selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-slate-700'
                            )
                        }
                    >
                        {item}
                    </Tab>
                ))}
            </Tab.List>

            <Tab.Panels>
                <Tab.Panel><IndividualSignup /></Tab.Panel>
                <Tab.Panel><CompanySignup /></Tab.Panel>
            </Tab.Panels>

        </Tab.Group>
    );
};

export default SignupPage;