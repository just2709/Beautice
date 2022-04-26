import React from "react";
import PropTypes from "prop-types";
import Twitter from ".././icon_home1/Twitter.png";
import Facebook from ".././icon_home1/Facebook.png";
import Instagram from ".././icon_home1/Instagram.png";

const ExpertBox = (props) => {
  const { img, name, job } = props;
  return (
    <div className='hover:drop-shadow-2xl bg-white rounded-[42px] px-[34px] py-[59px] transition duration-75'>
      <img className='m-auto mb-[58px]' src={img} />
      <h2 className='leading-[22.5px] text-base text-[#FF64AE] font-semibold mb-[15px]'>
        {job}
      </h2>
      <h2 className='leading-[22.5px] text-lg text-[#091156] font-semibold'>
        {name}
      </h2>
      <p className='text-[#8B8B8B] text-sm leading-[21px] tracking-widest font-normal py-4 pb-[50px]'>
        Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
        turpis.
      </p>
      <div className='flex space-x-4'>
        <img className='cursor-pointer' src={Twitter} />
        <img className='cursor-pointer' src={Facebook} />
        <img className='cursor-pointer' src={Instagram} />
      </div>
    </div>
  );
};

ExpertBox.propTypes = {};

export default ExpertBox;
