"use client"

import Link from 'next/link'
import { Divider } from "@nextui-org/react";
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import styles from '@/styles//header.module.css';
import { colors } from '@/lib/constants';
import {
<<<<<<< Updated upstream:src/components/common/Header.tsx
  HeaderLogo, SearchBar,
  BrandName, HeaderAvatar,
  MobileNav, NotificationBell
} from '@/components'
import {
  ShoppingCart, Zap, Gavel,
  Shell, DatabaseZap, Truck,
} from 'lucide-react';
=======
  MainNav, TopNav, MobileNav,
  BrandHeader, SearchBar,
  AvatarProfile
} from '@/components/indexa';

>>>>>>> Stashed changes:src/components0/common/Header.tsx


export default function Header() {

  const path = usePathname();
  const session = useSession();
  const status = session.status;

  return (
    <header className={styles.header}>
      <div className={styles.topContainer}>
        {/* LOGO */}
        <div className={styles.logoPlaceholder}> <HeaderLogo /> </div>

        {/* TOP BAR */}
        <div className={styles.topBarContainer}>
          <div className={styles.topBarContent}>
            <Link href="/download"
              className={`navLink ${path === '/download' ? 'active' : ''}`}>
              DOWNLOAD APP
            </Link>
            <Link href="/becomeaseller"
              className={`navLink ${path === '/becomeaseller' ? 'active' : ''}`}>
              BECOME A SELLER
            </Link>

            <Divider orientation="vertical" className="w-[2px] bg-accent" />

            {status === 'unauthenticated' && (
              <>
                <Link href="/login"
                  className={`navLink ${path === '/login' ? 'active' : ''}`}>
                  LOGIN
                </Link>
                <Link href="/signup"
                  className={`navLink ${path === '/signup' ? 'active' : ''}`}>
                  SIGN UP
                </Link>
              </>
            )}

            {status === 'authenticated' && (
              <>
                <NotificationBell />
                <button onClick={() => signOut()} className={styles.link}>LOGOUT</button>
              </>
            )}
          </div>

          <div className='relative w-full lg:hidden flex justify-end xs:justify-center py-2 px-6 gap-4 xs:gap-0'>
            <BrandName size='small' />

            {status === 'authenticated' && (
              <>
                <Divider orientation={'vertical'} className='block xs:hidden w-[2px] bg-accent' />
                <div className='block xs:absolute right-1 xs:mr-4'>
                  <NotificationBell />
                </div>
              </>
            )}
          </div>
        </div>

        {/* MIDDLE WHITE BG */}
        <div className={styles.whiteBg} />

        {/* SEARCH BAR */}
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBarContent}>
            <SearchBar />

            <Link href="/cart">
              <ShoppingCart size={28} color={colors.secondary}
                strokeWidth={2} className='hidden lg:block' />
            </Link>

            <MobileNav />

            {status === 'authenticated' && (
              <HeaderAvatar />
            )}

          </div>
        </div>
      </div>

      {/* BOT BAR */}
      <div className={styles.botContainer}>
        <div className={styles.botContent}>
          <Link href="/flashsales"
            className={`navLink ${path === '/flashsales' ? 'active' : ''}`}>
            <Zap /> FLASH SALES
          </Link>
          <Link href="/raffle"
            className={`navLink ${path === '/raffle' ? 'active' : ''}`}>
            <Shell /> RAFFLE
          </Link>
          <Link href="/auction"
            className={`navLink ${path === '/auction' ? 'active' : ''}`}>
            <Gavel /> AUCTION
          </Link>
          <Link href="/freeshipping"
            className={`navLink ${path === '/freeshipping' ? 'active' : ''}`}>
            <Truck /> FREE SHIPPING
          </Link>
          <Link href="/installment"
            className={`navLink ${path === '/installment' ? 'active' : ''}`}>
            <DatabaseZap /> INSTALLMENT
          </Link>
        </div>
      </div>
    </header>
  )
}
