"use client"
import Link from 'next/link'
import { HeaderLogo, SearchBar } from '@/components'
// import { Divider, Badge } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { ShoppingCart, Bell } from 'lucide-react';
import styles from '@/styles/common/header.module.css';
import { colors } from '@/lib/constants';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';


export default function Header() {
  const path = usePathname();
  const [isInvisible, setIsInvisible] = useState(true);

  console.log({ path })
  return (
    <header className={styles.header}>
      <div className={styles.topContainer}>

        {/* LOGO */}
        <div className={styles.logoPlaceholder}> <HeaderLogo /> </div>

        {/* TOP BAR */}
        <div className={styles.topBarContainer}>
          <div className={styles.topBarContent}>
            <Link href="/download"
              className={`${path === '/download' ? 'linkActive' : ''}`}>
              DOWNLOAD APP
            </Link>
            <Link href="/becomeaseller"
              className={`${path === '/becomeaseller' ? 'linkActive' : ''}`}>
              BECOME A SELLER
            </Link>
            <Divider orientation="vertical" className={styles.divider} />


            <Link href="/login"
              className={`${path === '/login' ? 'linkActive' : ''}`}>
              LOGIN
            </Link>
            <Link href="/signup"
              className={`${path === '/signup' ? 'linkActive' : ''}`}>
              SIGN UP
            </Link>

            <Badge color="danger" size="sm" content="" shape="circle"
              isInvisible={isInvisible} >
              <Link href="/notifications"
                className={`${path === '/notifications' ? 'linkActive' : ''}`}>
                <Bell className="fill-current" size={20} />
              </Link>
            </Badge>
            <button onClick={() => signOut()}>LOGOUT</button>

          </div>
          <h3>BID 4 ME</h3>
        </div>

        {/* MIDDLE WHITE BG */}
        <div className={styles.whiteBg}> </div>


        {/* SEARCH BAR */}
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBarContent}>
            <SearchBar />
            <Link href="/cart">
              <ShoppingCart size={32} color={colors.primary} strokeWidth={2} />
            </Link>


          </div>
        </div>
      </div>

      {/* BOT BAR */}
      <div className={styles.botContainer}>
        <div className={styles.botContent}>
          <Link href="/flashsales">FLASH SALES</Link>
          <Link href="/raffle">RAFFLE</Link>
          <Link href="/auction">AUCTION</Link>
          <Link href="/freeshipping">FREE SHIPPING</Link>
          <Link href="/installment">INSTALLMENT</Link>
        </div>
      </div>
    </header>
  )
}
