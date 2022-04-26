import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import AboutUS from ".././icon_home1/unsplash_LRXYS0tSyGc.png";
import PlayButton from ".././icon_home1/Play_button.png";
import Background from ".././icon_home1/Background Bubble.png";

const AboutUs = (props) => {
  return (
    <div className='relative'>
      <img
        className='absolute -z-10 -top-[400px] right-[0px]'
        src={Background}
      />
      <div className='max-w-[1140px] w-full m-auto text-[#FF64AE] mt-[131px] text-base font-semibold leading-5'>
        AboutUs
        <div className='flex'>
          <div>
            <h1 className='font-semibold text-4xl leading-[45px] w-[550px] text-[#091156] mx-auto my-3'>
              We are the best beauty clinic
            </h1>
            <p className='max-w-[480px] font-normal text-base tracking-widest leading-6 mb-[49px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
              tellus in suspendisse placerat.
              <br />
              <br /> Id dui erat sed quam tellus in purus. Pellentesque congue
              fringilla cras tellus enim.
            </p>
            <div className='flex'>
              <Button title='Learn More' />
              <button className='flex items-center ml-11 text-[#8B8B8B] font-semibold text-base tracking-widest leading-6'>
                <img className='mr-[13px]' src={PlayButton} />
                Watch Video
              </button>
            </div>
          </div>
          <img className='mt-[-50px]' src={AboutUS} />
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
