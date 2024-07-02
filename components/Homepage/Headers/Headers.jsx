"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState } from "react";

import styles from "@/styles/headerHome.module.css";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Headers() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className="d-none">

    </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          " padding-bottom": "20px;",
          "border-bottom": "10px dashed",
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className={styles.comingDate}>
            <span>In theater</span>
            <span>March 2024</span>
          </div>
          <div className={styles.shareSec}>
            <span>Share</span>
            <span></span>
            <span className={styles.iconShareSec}>
              <FaXTwitter />
            </span>
            <span className={styles.iconShareSec}>
              <FaFacebookF />
            </span>
            <span className={styles.iconShareSec}>
              <FaInstagram />
            </span>
          </div>
          <div className={styles.infoImgBanner}>
            <h3>Horror Movie</h3>
            <h2 className={styles.infoImgTitle}>Wrong Turns</h2>
            <h2 className={styles.infoImgTitle}>Part 2</h2>
            <p className={styles.textTitle}>writen and directed by nolan</p>
            <div className="d-flex align-items-center">
              <button className={styles.btnWhite}>More Info</button>
              <button className={styles.btnOrange}>More Info</button>
            </div>
          </div>
          <img src="/img/header/banner-01.jpg" className={styles.imgBanner} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.comingDate}>
            <span>In theater</span>
            <span>May 2024</span>
          </div>
          <div className={styles.shareSec}>
            <span>Share</span>
            <span></span>
            <span className={styles.iconShareSec}>
              <FaXTwitter />
            </span>
            <span className={styles.iconShareSec}>
              <FaFacebookF />
            </span>
            <span className={styles.iconShareSec}>
              <FaInstagram />
            </span>
          </div>
          <div className={styles.infoImgBanner}>
            <h3>Action Movie</h3>
            <h2 className={styles.infoImgTitle}>The Witcher</h2>
            <h2 className={styles.infoImgTitle}>Season 2</h2>
            <p className={styles.textTitle}>
              writen and directed by Amir Yadavar
            </p>
            <div className="d-flex align-items-center">
              <button className={styles.btnWhite}>More Info</button>
              <button className={styles.btnOrange}>More Info</button>
            </div>
          </div>
          <img src="/img/header/banner-02.jpg" className={styles.imgBanner} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.comingDate}>
            <span>In theater</span>
            <span>April 2024</span>
          </div>
          <div className={styles.shareSec}>
            <span>Share</span>
            <span></span>
            <span className={styles.iconShareSec}>
              <FaXTwitter />
            </span>
            <span className={styles.iconShareSec}>
              <FaFacebookF />
            </span>
            <span className={styles.iconShareSec}>
              <FaInstagram />
            </span>
          </div>
          <div className={styles.infoImgBanner}>
            <h3>Adventure Movie</h3>
            <h2 className={styles.infoImgTitle}>Love</h2>
            <h2 className={styles.infoImgTitle}>Nightmare</h2>
            <p className={styles.textTitle}>
              writen and directed by Amir Yadavar
            </p>
            <div className="d-flex align-items-center">
              <button className={styles.btnWhite}>More Info</button>
              <button className={styles.btnOrange}>More Info</button>
            </div>
          </div>
          <img src="/img/header/banner-03.jpg" className={styles.imgBanner} />
        </SwiperSlide>
      </Swiper>
      <div className="d-none d-xl-block">
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
            <img
              src="/img/header/banner-01.jpg"
              className={styles.imgWrapper}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperWrapper}>
            <img
              src="/img/header/banner-02.jpg"
              className={styles.imgWrapper}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperWrapper}>
            <img
              src="/img/header/banner-03.jpg"
              className={styles.imgWrapper}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Headers;
