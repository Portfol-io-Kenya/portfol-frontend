import Header from "@/components/Header"
import WebsiteHeader from "@/components/WebsiteHeader"
import SideBar from "@/components/sidebar/SideBar"
import type { Metadata } from "next"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
    title: 'Portfol.io - Find Work Online',
    description: 'Find online jobs targeted for Africans',
}

export default function WebsiteLayout({ 
    children 
} : {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col">
            <div className="p-3 bg-white">
                <WebsiteHeader />
            </div>
            {children}   
        </div>
    )
}