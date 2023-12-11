import Header from "@/components/Header"
import SideBar from "@/components/sidebar/SideBar"
import type { Metadata } from "next"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
    title: 'Portfol.io - Find Work Online',
    description: 'Find online jobs targeted for Africans',
}

export default function JobsLayout({ 
    children 
} : {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col w-full flex-grow p-3">
            {/* header  */}
            <Header />

            <div className="flex flex-col md:flex-row flex-grow">
                {/* nav sidebar  */}
                <SideBar className="hidden md:block" />

                {/* main content  */}
                <section className="md:ml-3 mt-3 w-full">
                    {children} 
                </section>
            </div>    
        </div>
    )
}