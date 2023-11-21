import Image from "next/image"
import Link from "next/link"
import { BrandIcon, BrandLogo, LogoBg } from "@/assets/images"
import styles from '@/styles/common/headerLogo.module.css'
import { BrandName } from "@/components"

export default function HeaderLogo() {
  return (
    <Link href="/" className={styles.headerLogo}>
      <div className={styles.headerLogoContent}>
        <Image src={BrandIcon} alt="BrandIcon" />
        <div className="hidden lg:inline-flex opacity-0 lg:opacity-100 transition-opacity">
          <BrandName size="main" />
        </div>
      </div>
    </Link>
  )
}
