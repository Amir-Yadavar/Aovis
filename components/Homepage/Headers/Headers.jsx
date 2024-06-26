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

import styles from "@/styles/headerHome.module.css";

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
          <div className={styles.infoImgBanner}>
            <h3>Aovis</h3>
            <h2 className={styles.infoImgTitle}>The Witcher</h2>
            <h2 className={styles.infoImgTitle}>Season 2</h2>
            <p className={styles.textTitle}>writen and directed by nolan</p>
            <div className="d-flex align-items-center">
              <button className={styles.btnWhite}>More Info</button>
              <button className={styles.btnOrange}>More Info</button>
            </div>
          </div>
          <img src="/img/header/banner-01.jpg" className={styles.imgBanner} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/header/banner-02.jpg" className={styles.imgBanner} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/header/banner-03.jpg" className={styles.imgBanner} />
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
          <img src="/img/header/banner-01.jpg" className={styles.imgWrapper} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperWrapper}>
          <img src="/img/header/banner-02.jpg" className={styles.imgWrapper} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperWrapper}>
          <img src="/img/header/banner-03.jpg" className={styles.imgWrapper} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Headers;
