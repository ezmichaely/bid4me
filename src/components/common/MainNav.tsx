"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Zap, Gavel,
  Shell, DatabaseZap, Truck,
} from 'lucide-react';



export default function MainNav() {
  const path = usePathname();

  return (
    <>
      <Link href="/flashsales"
        className={`navLink notheme ${path === '/flashsales' ? 'active' : ''}`}>
        <Zap /> FLASH SALES
      </Link>
      <Link href="/raffle"
        className={`navLink notheme ${path === '/raffle' ? 'active' : ''}`}>
        <Shell /> RAFFLE
      </Link>
      <Link href="/auction"
        className={`navLink notheme ${path === '/auction' ? 'active' : ''}`}>
        <Gavel /> AUCTION
      </Link>
      <Link href="/freeshipping"
        className={`navLink notheme ${path === '/freeshipping' ? 'active' : ''}`}>
        <Truck /> FREE SHIPPING
      </Link>
      <Link href="/installment"
        className={`navLink notheme ${path === '/installment' ? 'active' : ''}`}>
        <DatabaseZap /> INSTALLMENT
      </Link>
    </>
  )
}
