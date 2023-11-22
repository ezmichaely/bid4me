"use client"

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

export default function HeroSwiper() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };


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
      className="h-[500px]"
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
    </Swiper>
  )
}
