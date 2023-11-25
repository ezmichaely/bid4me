"use client"

import Link from 'next/link'
<<<<<<< Updated upstream
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useMediaQuery } from '@/lib/utils'
import { colors } from '@/lib/constants';
import { BrandName } from '@/components';
import { BrandSvg } from '@/assets/icons';
import {
  Menu, X, Zap, Gavel,
  Shell, DatabaseZap, Truck,
} from 'lucide-react';
import {
  Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, useDisclosure,
  Divider,
} from "@nextui-org/react";



export default function AsideNavigation() {
  const path = usePathname();
  const session = useSession();
  const status = session.status;
  const mediaQuery = useMediaQuery(1024);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isOpen && mediaQuery) { onClose(); }
  }, [mediaQuery]);

  const motionProps = {
    variants: {
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
      exit: {
        y: -20,
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
      },
    }
  }

  return (
    <>
      <div className="lg:hidden flex justify-center">
        <button onClick={onOpen} className='-ml-4'>
          <Menu size={28} color={colors.secondary} strokeWidth={2} />
        </button>
      </div>
      <Modal
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        motionProps={motionProps}
        backdrop="blur"
        placement="top"
        closeButton={(
          <div className=''>
            <X size={24} color={colors.primary} strokeWidth={3} />
          </div>
        )}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='py-2 w-full flex justify-center'>
                <Link href="/" onClick={onClose}
                  className='w-fit flex justify-center items-center gap-3' >
                  <BrandSvg />
                  <BrandName size="small" />
                </Link>
              </ModalHeader>

              <Divider className='h-[2px] bg-primary-300' />

              <ModalBody className=' mb-0'>
                {status === 'unauthenticated' && (
                  <>
                    <div className='w-full flex justify-around items-center flex-wrap'>
                      <Link href="/login" onClick={onClose}
                        className={`navLink ${path === '/login' ? 'active' : ''}`}>
                        LOGIN
                      </Link>
                      <Link href="/signup" onClick={onClose}
                        className={`navLink ${path === '/signup' ? 'active' : ''}`}>
                        SIGN UP
                      </Link>
                    </div>
                    <Divider className='h-[2px] bg-secondary-300 my-0 py-0' />
                  </>
                )}

                <div className='w-full flex justify-center items-center flex-col gap-5'>
                  <Link href="/flashsales" onClick={onClose}
                    className={`navLink ${path === '/flashsales' ? 'active' : ''}`}>
                    <Zap /> FLASH SALES
                  </Link>
                  <Link href="/raffle" onClick={onClose}
                    className={`navLink ${path === '/raffle' ? 'active' : ''}`}>
                    <Shell /> RAFFLE
                  </Link>
                  <Link href="/auction" onClick={onClose}
                    className={`navLink ${path === '/auction' ? 'active' : ''}`}>
                    <Gavel /> AUCTION
                  </Link>
                  <Link href="/freeshipping" onClick={onClose}
                    className={`navLink ${path === '/freeshipping' ? 'active' : ''}`}>
                    <Truck /> FREE SHIPPING
                  </Link>
                  <Link href="/installment" onClick={onClose}
                    className={`navLink ${path === '/installment' ? 'active' : ''}`}>
                    <DatabaseZap /> INSTALLMENT
                  </Link>
                </div>
              </ModalBody>

              <Divider className='h-[2px] bg-primary-300' />

              <ModalFooter className='py-0 my-0 bg-secondary-100'>
                <div className='w-full flex justify-around items-center flex-wrap '>
                  <Link href="/download" onClick={onClose}
                    className={`navLink ${path === '/download' ? 'active' : ''}`}>
                    DOWNLOAD APP
                  </Link>
                  <Link href="/becomeaseller" onClick={onClose}
                    className={`navLink ${path === '/becomeaseller' ? 'active' : ''}`}>
                    BECOME A SELLER
                  </Link>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent >
      </Modal >
=======
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { colors } from '@/constants/constants';
import { BrandName } from '@/components';
import { BrandSvg } from '@/assets/icons';
import { Separator } from '@/components/ui/separator';
import { Toggle } from "@/components/ui/toggle"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Menu, Zap, Gavel,
  Shell, DatabaseZap, Truck,
} from 'lucide-react';

export default function MobileNav() {
  const path = usePathname();
  const mediaQuery = useMediaQuery(1024);
  const [isOpen, setIsOpen] = useState(false);

  const css = {
    mobileLink: `font-kanit font-medium rounded-lg w-full py-2 whitespace-nowrap
    text-foreground hover:bg-foreground hover:text-primary dark:hover:text-secondary`,
    mobileLinkActive: `font-kanit font-medium w-full py-2 whitespace-nowrap rounded-lg hover:bg-foreground
    text-secondary hover:text-primary dark:text-primary dark:hover:text-secondary`,
  }

  useEffect(() => {
    if (isOpen && mediaQuery) { setIsOpen(false); }
  }, [mediaQuery]);


  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="lg:hidden flex justify-center">
            <Toggle size="sm" aria-label="Toggle italic"
              className="-ml-4 p-0 bg-transparent hover:bg-transparent data-[state=on]:bg-transparent">
              <Menu size={28} color={colors.secondary} strokeWidth={2} />
            </Toggle>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <Link href="/" onClick={() => setIsOpen(false)}
              className="flex justify-center items-center flex-row gap-3">
              <BrandSvg />
              <BrandName size="small" />
            </Link>
          </DialogHeader>
          <Separator className="bg-secondary dark:bg-primary" />
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <Link href="/flashsales" onClick={() => setIsOpen(false)}
              className={`${path === '/flashsales' ? `${css.mobileLinkActive}` : `${css.mobileLink}`}`}>
              <Zap /> FLASH SALES
            </Link>
            <Link href="/raffle" onClick={() => setIsOpen(false)}
              className={`${path === '/raffle' ? `${css.mobileLinkActive}` : `${css.mobileLink}`}`}>
              <Shell /> RAFFLE
            </Link>
            <Link href="/auction" onClick={() => setIsOpen(false)}
              className={`${path === '/auction' ? `${css.mobileLinkActive}` : `${css.mobileLink}`}`}>
              <Gavel /> AUCTION
            </Link>
            <Link href="/freeshipping" onClick={() => setIsOpen(false)}
              className={`${path === '/freeshipping' ? `${css.mobileLinkActive}` : `${css.mobileLink}`}`}>
              <Truck /> FREE SHIPPING
            </Link>
            <Link href="/installment" onClick={() => setIsOpen(false)}
              className={`${path === '/installment' ? `${css.mobileLinkActive}` : `${css.mobileLink}`}`}>
              <DatabaseZap /> INSTALLMENT
            </Link>
          </div>
          <DialogFooter className='py-2 my-0 bg-primary'>
            <div className='w-full flex justify-around items-center flex-wrap '>
              <Link href="/download" onClick={() => setIsOpen(false)}
                className={`navLink notheme ${path === '/download' ? 'active' : ''}`}>
                DOWNLOAD APP
              </Link>
              <Link href="/becomeaseller" onClick={() => setIsOpen(false)}
                className={`navLink notheme ${path === '/becomeaseller' ? 'active' : ''}`}>
                BECOME A SELLER
              </Link>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
>>>>>>> Stashed changes
    </>
  )
}
