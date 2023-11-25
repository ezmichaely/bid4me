"use client"

import Image from "next/image"
import Link from "next/link"
import { BrandName } from "@/components"
import { BrandIcon } from "@/assets/images"
import { colors } from "@/constants/constants"
import { useTheme } from 'next-themes'
import { BrandSvg } from "@/assets/icons"

export default function BrandHeader() {
  const css = {
    linkDiv: `-mt-[45px] h-[86px] w-fit flex justify-start items-start gap-0 transition-all`,
    linkContent: `pl-3 h-full w-full flex justify-start items-center bg-background gap-4`,
    brandName: `hidden lg:inline-flex ease-in lg:ease-out duration-500`
  }

  const { resolvedTheme } = useTheme()
  let fillColor
  switch (resolvedTheme) {
    case 'light':
      fillColor = colors.foreground
      break
    case 'dark':
      fillColor = colors.background
      break
    default:
      fillColor = colors.foreground
      break
  }



  return (
    <Link href="/" className={css.linkDiv}>
      <div className={css.linkContent}>
        <BrandSvg />
        {/* <Image src={BrandIcon} alt="BrandIcon" priority /> */}
        <div className={css.brandName}>
          <BrandName size="main" />
        </div>
      </div>

      <div className="mt-[34px]">
        <svg width="75" height="52" viewBox="0 0 75 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill={fillColor}
            fillRule="evenodd" clipRule="evenodd" d="M0 0V52H1.4906C16.8201 52 22.9035 41.4352 29.5862 29.8296C37.7294 15.6875 46.7625 0 74.5 0H0Z" />
        </svg>
      </div>
    </Link>
  )
}
