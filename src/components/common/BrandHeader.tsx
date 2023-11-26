"use client"

import Link from "next/link"
import { BrandName } from "@/components"
import { colors } from "@/constants/constants"
import { useTheme } from 'next-themes'
import { BrandIcon, ShapeIcon } from "@/components/icons"
import ShapeSvg from "@/components/icons/ShapeIcon"

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
        <BrandIcon />
        <div className={css.brandName}>
          <BrandName size="main" />
        </div>
      </div>

      <div className="mt-[34px]">
        <ShapeIcon fill={fillColor} />
      </div>
    </Link>
  )
}
