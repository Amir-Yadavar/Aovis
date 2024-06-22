"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import styles from '@/styles/headerHome.module.css'

function Headers() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
       
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/img/header/banner-01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/header/banner-02.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/header/banner-03.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.myLittleSwiper}
      >
        <SwiperSlide className={styles.swiperWrapper}>
          <img src="/img/header/banner-01.jpg" className={styles.imgWrapper}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperWrapper}>
          <img src="/img/header/banner-02.jpg" className={styles.imgWrapper}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperWrapper}>
          <img src="/img/header/banner-03.jpg" className={styles.imgWrapper}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Headers;
