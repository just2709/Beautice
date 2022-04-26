import React from "react";
import PropTypes from "prop-types";
import Background from ".././icon_home1/Slide Background.png";
import Frame1 from ".././icon_home1/Frame 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Button from "./Button";

const Slide = (props) => {
  const list = [1, 2, 3];
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className='h-full'>
      {list.map((index) => (
        <SwiperSlide
          key={index}
          className='bg-no-repeat flex text-[#091156] pb-10'
          style={{
            backgroundImage: `url('${Background}')`,
          }}>
          <div className='mt-[316px] ml-[13.25%] w-[500px] pr-3'>
            <h1 className='text-5xl font-semibold leading-[60px] w-full'>
              Clinic & beauty consultant {index}
            </h1>
            <p className='text-base font-medium tracking-widest leading-[24px] mb-7 mt-[10px]'>
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <Button title='More Details' />
          </div>
          <img className='w-5/12 h-1/2 mt-[263px] mr-[13.25%]' src={Frame1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slide.propTypes = {};

export default Slide;
