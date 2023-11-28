"use client"

import Link from 'next/link'
import { Bell } from 'lucide-react';
import { Badge } from "@nextui-org/react";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NotificationBell() {
  const path = usePathname();
  const [isInvisible, setIsInvisible] = useState(false);


  return (
    <Badge color="danger" size="sm" content="" shape="circle" isInvisible={isInvisible} className='animate-pulse'>
      <Link href="/notifications"
        className={`navLink ${path === '/notifications' ? 'active' : ''}`}>
        <Bell className="fill-current" size={20} />
      </Link>
    </Badge >
  )
}
