import Link from 'next/link'
import { Logo, SearchBar } from '@/components'
import { Divider } from "@nextui-org/divider";
import { ShoppingCart } from 'lucide-react';



export default function Header() {
  return (
    <header className='w-screen '>
      <div className='relative h-[96px] w-full'>

        {/* LOGO */}
        <div className='relative max-w-screen-2xl mx-auto'>
          <Logo />
        </div>

        {/* TOP BAR */}
        <div className='min-h-[34px] h-[34px] bg-white w-full flex justify-end'>
          <div className='max-w-screen-2xl mx-auto w-full flex justify-end items-center flex-row gap-8 text-accent py-2 font-bold'>
            <Link href="#">DOWNLOAD APP</Link>
            <Link href="#">BECOME A SELLER</Link>
            <Divider orientation="vertical" className='w-[2px] bg-accent'/>
            <Link href="/login">LOGIN</Link>
            <Link href="/register">SIGN UP</Link>
          </div>
        </div>

        {/* MIDDLE WHITE BG */}
        <div className='absolute top-0 left-0 min-h-[86px] max-h-[86px] h-[86px] bg-white w-[calc((100vw_-_1536px)_/_2)]'> </div>


        {/* SEARCH BAR */}
        <div className='min-h-[62px] max-h-[62px] h-[62px] bg-primary-300 w-screen'>
          <div className='max-w-screen-2xl mx-auto w-full h-full pl-[275px] flex justify-start items-center flex-row gap-8 text-whites-100 py-2 font-bold'>
            <SearchBar />
            <Link href="">
              <ShoppingCart size={32} color="#FFC614" strokeWidth={2}/>
            </Link>
          </div>
        </div>
      </div>

      {/* BOT BAR */}
      <div className='bg-secondary-300 w-screen'>
        <div className='max-w-screen-2xl mx-auto w-full flex justify-center items-center flex-row gap-28 text-accent py-2 font-bold'>
          <Link href="/flashsales">FLASH SALES</Link>
          <Link href="/raffle">RAFFLE</Link>
          <Link href="/auction">AUCTION</Link>
          <Link href="/freeshipping">FREE SHIPPING</Link>
          <Link href="/installment">INSTALLMENT</Link>
        </div>
      </div>
    </header>
  )
}
