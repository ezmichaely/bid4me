"use client"

import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react';

export default function NextAuthProvider({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  useEffect(() => {
    if (path === '/login' || path === '/signup') {
      document.body.classList.add('bg-auth');
    }
    else {
      document.body.classList.remove('bg-auth');
    }

    return () => {
      document.body.classList.remove('bg-auth');
    };
  }, [path]);


  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
