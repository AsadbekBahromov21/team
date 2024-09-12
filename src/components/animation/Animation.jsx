import React, { Fragment } from "react";
import images from "../../assets/Group.svg";
import images1 from "../../assets/zara.svg";
import images2 from "../../assets/gusi.svg";
import images3 from "../../assets/prada.svg";
import images4 from "../../assets/Group (1).svg";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Animation = () => {
  return (
    <Fragment>
      <div className="w-full bg-[#000] mb-8">
        <div className="container">
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            breakpoints={{
              400: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 65,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 45,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
              enabled: false,
            }}
            autoplay={{
              delay: 500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <Fragment>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images1} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images2} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images3} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images4} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images1} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images2} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images3} alt="" className="h-[36px]" />
              </SwiperSlide>
              <SwiperSlide className="py-[40px] h-[36px]">
                <img src={images4} alt="" className="h-[36px]" />
              </SwiperSlide>
            </Fragment>
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default Animation;
