import { Logo } from '@/components'

export default function Header() {
  return (
    <header className='h-[96px] w-screen '>
      <div className='relative h-[96px] w-full'>
        <div className='relative max-w-screen-2xl mx-auto'>
          <Logo />
        </div>

        <div className='min-h-[34px] h-[34px] bg-white pl-[305px] w-full flex justify-end'>

        </div>

        <div className='absolute top-0 left-0 min-h-[86px] max-h-[86px] h-[86px] bg-white w-[calc((100vw_-_1536px)_/_2)]'> </div>
        <div className='min-h-[62px] max-h-[62px] pl-[305px] bg-primary-300 w-full'>

        </div>
      </div>
    </header>
  )
}
