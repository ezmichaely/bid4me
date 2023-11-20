import Image from "next/image"
import Link from "next/link"
import { BrandIcon, BrandLogo, LogoBg } from "@/assets/images"
import styles from '@/styles/common/headerLogo.module.css'

export default function HeaderLogo() {
  return (
    <Link href="/" className={styles.headerLogo}>
      <div className={styles.headerLogoContent}>
        <Image src={BrandIcon} alt="BrandIcon" />
        <Image src={BrandLogo} alt="BrandLogo" />
      </div>
    </Link>
  )
}
