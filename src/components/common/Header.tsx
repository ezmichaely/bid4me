"use client"
import Link from 'next/link'
import { HeaderLogo, SearchBar, BrandName, HeaderAvatar } from '@/components'
import {
  Divider, Badge,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure
} from "@nextui-org/react";
// import { Badge } from "@nextui-org/react";
// import { Divider } from "@nextui-org/divider";
import {
  ShoppingCart, Bell, Zap, Gavel,
  Shell, DatabaseZap, Truck, Menu
} from 'lucide-react';
import styles from '@/styles/common/header.module.css';
import { colors } from '@/lib/constants';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';


export default function Header() {
  const path = usePathname();
  const session = useSession();
  const status = session.status;

  const [isInvisible, setIsInvisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleOpen = () => {
    // setBackdrop(backdrop)
    onOpen();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topContainer}>
          {/* LOGO */}
          <div className={styles.logoPlaceholder}> <HeaderLogo /> </div>

          {/* TOP BAR */}
          <div className={styles.topBarContainer}>
            <div className={styles.topBarContent}>
              <Link href="/download" className={`${path === '/download' ? `${styles.linkActive}` : `${styles.link}`}`}>
                DOWNLOAD APP
              </Link>
              <Link href="/becomeaseller" className={`${path === '/becomeaseller' ? `${styles.linkActive}` : `${styles.link}`}`}>
                BECOME A SELLER
              </Link>

              <Divider orientation="vertical" className="w-[2px] bg-accent" />

              {status === 'unauthenticated' && (
                <>
                  <Link href="/login" className={`${path === '/login' ? `${styles.linkActive}` : `${styles.link}`}`}>
                    LOGIN
                  </Link>
                  <Link href="/signup" className={`${path === '/signup' ? `${styles.linkActive}` : `${styles.link}`}`}>
                    SIGN UP
                  </Link>
                </>
              )}

              {status === 'authenticated' && (
                <>
                  <Badge color="danger" size="sm" content="" shape="circle"
                    isInvisible={isInvisible} >
                    <Link href="/notifications"
                      className={`${path === '/notifications' ? `${styles.linkActive}` : `${styles.link}`}`}>
                      <Bell className="fill-current" size={20} />
                    </Link>
                  </Badge>
                  <button onClick={() => signOut()}>LOGOUT</button>
                </>
              )}


            </div>

            <BrandName size='small' />

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

              <button onClick={handleOpen} className='lg:hidden'>
                <Menu size={28} color={colors.secondary}
                  strokeWidth={2} />
              </button>

              {/* {status === 'authenticated' && (
                <></>
              )} */}
              <HeaderAvatar />

            </div>
          </div>
        </div>

        {/* BOT BAR */}
        <div className={styles.botContainer}>
          <div className={styles.botContent}>
            <Link href="/flashsales"
              className={`${path === '/flashsales' ? `${styles.linkActive}` : `${styles.link}`}`}>
              <Zap /> FLASH SALES
            </Link>
            <Link href="/raffle"
              className={`${path === '/raffle' ? `${styles.linkActive}` : `${styles.link}`}`}>
              <Shell /> RAFFLE
            </Link>
            <Link href="/auction"
              className={`${path === '/auction' ? `${styles.linkActive}` : `${styles.link}`}`}>
              <Gavel /> AUCTION
            </Link>
            <Link href="/freeshipping"
              className={`${path === '/freeshipping' ? `${styles.linkActive}` : `${styles.link}`}`}>
              <Truck /> FREE SHIPPING
            </Link>
            <Link href="/installment"
              className={`${path === '/installment' ? `${styles.linkActive}` : `${styles.link}`}`}>
              <DatabaseZap /> INSTALLMENT
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
