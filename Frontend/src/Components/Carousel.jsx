import React, { useRef, useState } from "react";
// Import Swiper React components
import slideImg1 from "../assets/images/slide1.png";
import slideImg2 from "../assets/images/slide2.png";
import slideImg3 from "../assets/images/slide3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import user2 from "../assets/images/user2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "react-scroll";

const Carousel = ({ type }) => {
  const handleGetStarted = () => {};
  return (
    <div className={`h-[50.375rem] w-full z-10 `}>
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-bullet-inactive-color": "#9b9898",
            "--swiper-navigation-bullet-inactive-opacity": "1",
            "--swiper-navigation-bullet-inactive-background-color": "#fff",
            "--swiper-navigation-bullet-horizontal-gap": "1px",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#9b9898",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-height": "10px",
            "--swiper-pagination-bullet-inactive-background-color": "#fff",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
            "--swiper-pagination-bullet-margin-bottom": "5px",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper"
        >
          <SwiperSlide>
            <div
              style={{
                position: "relative",
                backgroundImage: `url(${slideImg1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.634)", // Adjust opacity here
                }}
              ></div>

              {/* Content */}
              <h1>Cultivating Connections, Nurturing Growth</h1>
              <div className="z-50">
                <img
                  src={user2}
                  alt="user two profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <Button type="getstarted">Get Started</Button>
                <p>
                  “Since I started using this platform it has changed my farm
                  life”
                </p>
                <p>Tabitha - Livestock farmer Turkana</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                position: "relative",
                backgroundImage: `url(${slideImg2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.634)", // Adjust opacity here
                }}
              ></div>

              {/* Content */}
              <h1>Cultivating Connections, Nurturing Growth</h1>
              <div className="z-50">
                <img
                  src={user2}
                  alt="user two profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <Button type="getstarted">Get Started</Button>
                <p>
                  “Since I started using this platform it has changed my farm
                  life”
                </p>
                <p>Tabitha - Livestock farmer Turkana</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                position: "relative",
                backgroundImage: `url(${slideImg3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.634)", // Adjust opacity here
                }}
              ></div>

              {/* Content */}
              <h1>Cultivating Connections, Nurturing Growth</h1>
              <Button onClick={handleGetStarted} type="getstarted">
                Get Started
              </Button>
              <div className="z-50 ">
                <img
                  src={user2}
                  alt="user two profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p>
                  “Since I started using this platform it has changed my farm
                  life”
                </p>
                <p>Tabitha - Livestock farmer Turkana</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
