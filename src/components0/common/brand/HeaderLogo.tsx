import Image from "next/image"
import Link from "next/link"
import { BrandName } from "@/components"
import { BrandIcon } from "@/assets/images"


export default function HeaderLogo() {
  const css = {
    linkDiv: `absolute top-0 h-[86px] max-w-[305px] min-w-[305px] w-[305px] bg-logoBg mt-px -ml-[170px] lg:-ml-px transition-all`,
    linkContent: `h-[86px] w-full pr-[74px] lg:pl-4 lg:pr-0 flex justify-end lg:justify-start items-center gap-4`,
    brandName: `hidden lg:inline-flex opacity-0 lg:opacity-100 transition-opacity`,
  }

  return (
    <Link href="/" className={css.linkDiv}>
      <div className={css.linkContent}>
        <Image src={BrandIcon} alt="BrandIcon" />
        <div className={css.brandName}>
          <BrandName size="main" />
        </div>
      </div>
    </Link>
  )
}
