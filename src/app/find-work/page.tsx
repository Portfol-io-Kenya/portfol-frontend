"use client"
import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function JobsHome () {
    const router = useRouter();
    const isAuthenticated = true;

    useEffect(() => {
        isAuthenticated && router.push('/find-work/jobs');
    })
}