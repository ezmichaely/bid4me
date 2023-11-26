"use client"

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
export default function FlashSale() {
  return (

    <Swiper
      cssMode={true}
      slidesPerView='auto'
      breakpoints={{
        430: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        // 768: { slidesPerView: 2 },
        // 820: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      spaceBetween={16}
      // effect={'fade'}
      loop={true}
      grabCursor={true}
      pagination={false}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, EffectFade, Navigation]}
      className="h-full"
    // onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      <SwiperSlide className='bg-red-500'>Slide 1</SwiperSlide>
      <SwiperSlide className='bg-purple-500'>Slide 2</SwiperSlide>
      <SwiperSlide className='bg-yellow-500'>Slide 3</SwiperSlide>
      <SwiperSlide className='bg-lime-500'>Slide 4</SwiperSlide>
      <SwiperSlide className='bg-orange-500'>Slide 5</SwiperSlide>
      <SwiperSlide className='bg-blue-500'>Slide 6</SwiperSlide>
      <SwiperSlide className='bg-gray-500'>Slide 7</SwiperSlide>
      <SwiperSlide className='bg-green-500'>Slide 8</SwiperSlide>
      <SwiperSlide className='bg-violet-500'>Slide 9</SwiperSlide>
    </Swiper >
  )
}
