"use client"

import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import styles from '@/styles//header.module.css';
import { colors } from '@/constants/constants';
import { ShoppingCart } from 'lucide-react';
import {
  MainNav, TopNav, MobileNav,
  BrandHeader, SearchBar,
  AvatarProfile
} from '@/components';



export default function Header() {
  const path = usePathname();
  const session = useSession();
  const status = session.status;

  return (
    <header className={styles.header}>
      <div className={styles.topBarContainer}>
        <TopNav />
      </div>

      <div className={styles.whiteBg} />

      {/* SEARCH BAR */}
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarContent}>
          <BrandHeader />

          <div className='-ml-12 grow'> <SearchBar /> </div>

          <Link href="/cart" >
            <ShoppingCart size={28} color={colors.secondary}
              strokeWidth={2} className='hidden lg:flex' />
          </Link>

          <MobileNav />

          <AvatarProfile />
          {/* {status === 'authenticated' && (
            <AvatarProfile />
          )} */}

        </div>
      </div>

      <div className={styles.botContainer}>
        <div className={styles.botContent}>
          <MainNav />
        </div>
      </div>
    </header>
  )
}