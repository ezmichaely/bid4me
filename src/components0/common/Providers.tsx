"use client"

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
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
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SessionProvider>
  )
}
