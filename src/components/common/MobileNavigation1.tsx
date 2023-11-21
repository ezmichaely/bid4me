"use client"

import Link from 'next/link'
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@/lib/utils'
import styles from '@/styles/common/mobileNavigation.module.css'
import { colors } from '@/lib/constants';



export default function AsideNavigation() {
  const path = usePathname();
  const session = useSession();
  const status = session.status;
  const mediaQuery = useMediaQuery(1024);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true)
    document.body.classList.add('max-h-screen')
    document.body.classList.add('overflow-y-hidden')
  };
  const closeDialog = () => {
    setIsOpen(false);
    document.body.classList.remove('max-h-screen')
    document.body.classList.remove('overflow-y-hidden')
  };

  useEffect(() => {
    if (isOpen && mediaQuery) {
      setIsOpen(false);
      document.body.classList.remove('max-h-screen')
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [mediaQuery]);

  return (
    <div className={styles.navDialog}>
      <button onClick={openDialog} className={`${styles.navOpen} hover:border-white`}>
        {/* <Image src={MenuLight} alt="MenuLight" /> */}
        <Menu size={28} color={colors.secondary} strokeWidth={2} />
      </button>

      {isOpen && (
        <div className={styles.overlay}>
          <dialog className={`${styles.inner}`}>

            <div className={styles.toggleDiv}>
              <button onClick={closeDialog}
                className={`${styles.toggleBtn}`} >
                {/* <FaTimes className={styles.toggleIcon} /> */}
              </button>
            </div>

            <nav className={styles.navbar}>
              {/* {headerRoutes.map((d) => (
                <Link key={d.key} href={d.path} onClick={closeDialog}
                  className={`${path === d.path ? styles.navLinkActive : styles.navLink}`}>
                  {d.title}
                </Link>
              ))} */}
              <Link href="/contact" onClick={closeDialog}
                className={`${path === '/contact' ? styles.navLinkBtnActive : styles.navLinkBtn}`} >
                Contact
              </Link>
            </nav>
          </dialog>
        </div>
      )}
    </div>
  )
}
