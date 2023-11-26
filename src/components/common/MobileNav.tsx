"use client"

import Link from 'next/link'
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
    </>
  )
}
