"use client"
import Link from 'next/link'
import { Bell } from 'lucide-react';
import { Badge } from "@nextui-org/react";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from '@/styles/common/header.module.css';

export default function NotificationBell() {
  const path = usePathname();
  const [isInvisible, setIsInvisible] = useState(false);


  return (
    <Badge color="danger" size="sm" content="" shape="circle" isInvisible={isInvisible} >
      <Link href="/notifications"
        className={`${path === '/notifications' ? `${styles.linkActive}` : `${styles.link}`}`}>
        <Bell className="fill-current" size={20} />
      </Link>
    </Badge>
  )
}
