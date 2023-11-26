import { SvgProps } from "@/lib/interface"

export default function CheckBoxSvg({ size, fill }: SvgProps) {
  return (
    <svg fill="none" aria-hidden="true" role="presentation" viewBox="0 0 17 18"
      className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-4 h-3 transition-opacity motion-reduce:transition-none text-secondary-300">

      <polyline fill="none" points="1 9 7 14 15 4" stroke={fill} strokeDasharray="22" strokeDashoffset="66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
      </polyline>

    </svg >

  )
}