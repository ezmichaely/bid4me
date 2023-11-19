import Image from "next/image"
import {
  BrandIcon, BrandLogo, LogoBg
} from "@/assets/images"

export default function Logo() {
  return (
    <div className="absolute top-0 h-[86px] max-w-[305px] min-w-[305px] w-[305px] bg-logoBg">
      <div className="h-[86px] pl-[36px] flex justify-start items-center gap-4">
        <Image src={BrandIcon} alt="BrandIcon" />
        <Image src={BrandLogo} alt="BrandLogo" />
      </div>
    </div>
  )
}
