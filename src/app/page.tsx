"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true;

  useEffect(() => {
      isAuthenticated && router.push('/auth');
  })
}
