import { SvgProps } from "@/types/interface"

export default function ShapeIcon({ size, fill }: SvgProps) {

  return (
    <svg width="75" height="52" viewBox="0 0 75 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} fillRule="evenodd" clipRule="evenodd" d="M0 0V52H1.4906C16.8201 52 22.9035 41.4352 29.5862 29.8296C37.7294 15.6875 46.7625 0 74.5 0H0Z" />
    </svg>
  )
}
