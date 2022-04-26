import React from "react";
import PropTypes from "prop-types";
import Contact from ".././icon_home1/Contact Animations.png";
import Button from "./Button";
import Background from ".././icon_home1/Background Bubble (1).png";

const ContactUs = (props) => {
  return (
    <div className='relative'>
      <img
        className='absolute -z-10 -top-[250px] left-[0px]'
        src={Background}
      />
      <div className='max-w-[1140px] w-full m-auto text-[#FF64AE] mt-[131px] text-base font-semibold leading-5 relative'>
        <div className='flex space-x-20'>
          <img src={Contact} />
          <div className='w-[520px]'>
            ContactUs
            <h1 className='font-semibold text-4xl leading-[45px] w-[400px] text-[#091156] my-3'>
              Send your inquiry to our expert team
            </h1>
            <p className='max-w-[480px] font-normal text-base tracking-widest leading-6 mb-[49px]'>
              Lorem ipsum dolor sit amet nulla turapis tellus.
            </p>
            <div>
              <div className='flex space-x-10'>
                <input
                  type='text'
                  placeholder='First Name'
                  className='w-1/2 px-[24px] py-[17px] mb-[38.25px] border border-[D9DDFE] rounded-[15px]'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='w-1/2 px-[24px] py-[17px] mb-[38.25px] border border-[D9DDFE] rounded-[15px]'
                />
              </div>
              <input
                type='text'
                placeholder='Email Address'
                className='w-full px-[24px] py-[17px] mb-[38.25px] border border-[D9DDFE] rounded-[15px]'
              />
              <input
                type='text'
                placeholder='Subject message'
                className='w-full px-[24px] py-[17px] mb-[38.25px] border border-[D9DDFE] rounded-[15px]'
              />
              <input
                type='textarea'
                placeholder='Your inquiry here'
                className='w-full px-[24px] py-[17px] mb-[38.25px] border border-[D9DDFE] rounded-[15px]'
              />
              <Button title='Send Message' className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
