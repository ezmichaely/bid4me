import styles from '@/styles/header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { signOut, useSession } from 'next-auth/react';
import { BrandName, ThemeSwitcher, NotificationBell } from '@/components/indexa';

export default function TopNav() {
  const path = usePathname();
  const session = useSession();
  const status = session.status;

  return (
    <div className={styles.topBarContent}>
      {/* brand name */}
      <div className={styles.topBarBrandName}> <BrandName size="small" /> </div>

      {/* download / seller */}
      <div className={styles.topBarDownload}>
        <Link href="/download"
          className={`navLink ${path === '/download' ? 'active' : ''}`}>
          DOWNLOAD APP
        </Link>
        <Link href="/becomeaseller"
          className={`navLink ${path === '/becomeaseller' ? 'active' : ''}`}>
          BECOME A SELLER
        </Link>
        <div className='h-full py-2'>
          <Separator orientation="vertical" className="w-[2px] bg-foreground" />
        </div>
      </div>

      {/* login / signup */}
      {status === 'unauthenticated' && (
        <div className={styles.topBarAuths}>
          <Link href="/login"
            className={`navLink ${path === '/login' ? 'active' : ''}`}>
            LOGIN
          </Link>
          <Link href="/signup"
            className={`navLink ${path === '/signup' ? 'active' : ''}`}>
            SIGN UP
          </Link>
        </div>
      )}

      {/* notification */}
      {status === 'authenticated' && (
        <NotificationBell />
      )}

      <ThemeSwitcher />
    </div>
  )
}
