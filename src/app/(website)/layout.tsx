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
            <div className="p-3 bg-white drop-shadow">
                <WebsiteHeader />
            </div>
            {children}   
            <div className="bg-black text-white text-sm p-4 flex justify-center gap-4">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Support & FAQs</Link>
                <Link href="#">Safety & Security</Link>
                <Link href="#">Terms of Service</Link>
            </div>
        </div>
    )
}