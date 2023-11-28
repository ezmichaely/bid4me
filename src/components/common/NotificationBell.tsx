"use client"

import Link from 'next/link'
import { Bell } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NotificationBell() {
  const path = usePathname();
  const [isInvisible, setIsInvisible] = useState(true);


  return (
    <>
      <Link href="/notifications"
        className={`relative w-fit navLink ${path === '/notifications' ? 'active' : ''}`}>
        <Bell className="fill-current" size={20} />
        {isInvisible && (
          <div className='absolute -top-1 -right-1 bg-destructive w-3 h-3 rounded-full flex justify-center items-center'>
            <div className='bg-destructive w-3 h-3 rounded-full animate-ping'> </div>
          </div>
        )}
      </Link>
    </>
  )
}
