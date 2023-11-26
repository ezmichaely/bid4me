"use client"

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
// import 'swiper/css/navigation';

import { i1, i2, i3, i4 } from '@/assets/images'


export default function HeroSwiper() {

  return (
    <Swiper
      cssMode={true}
      slidesPerView={1}
      spaceBetween={30}
      // effect={'fade'}
      loop={true}
      grabCursor={true}
      pagination={{
        clickable: true,
        // dynamicBullets: true,
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, EffectFade, Pagination]}
      className="h-full"
    // onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      <SwiperSlide style={{ backgroundImage: `url(${i1.src})` }}>
        <div className='w-full h-full flex justify-center items-center backdrop-blur-md'>
          <Image src={i1} alt="01" className='drop-shadow-xl' />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${i2.src})` }}>
        <div className={`w-full h-full flex justify-center items-center backdrop-blur-md`}>
          <Image src={i2} alt="01" className='drop-shadow-xl' />
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-orange-500'>Slide 5</SwiperSlide>

      <SwiperSlide style={{ backgroundImage: `url(${i3.src})` }}>
        <div className={`w-full h-full flex justify-center items-center backdrop-blur-md`}>
          <Image src={i3} alt="01" className='drop-shadow-xl' />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${i4.src})` }}>
        <div className={`w-full h-full flex justify-center items-center backdrop-blur-md`}>
          <Image src={i4} alt="01" className='drop-shadow-xl' />
        </div>
      </SwiperSlide>

      <SwiperSlide className='bg-blue-500'>Slide 6</SwiperSlide>
    </Swiper>
  )
}
