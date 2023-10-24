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
        <div className="flex flex-col w-full flex-grow">
            {/* header  */}
            <Header />

            <div className="flex flex-grow">
                {/* nav sidebar  */}
                <SideBar />

                {/* main content  */}
                <section className="bg-slate-300 ml-3 mt-3 w-full rounded-md p-3">
                    {children} 
                </section>
            </div>    
        </div>
    )
}