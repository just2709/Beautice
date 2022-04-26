import React from "react";
import PropTypes from "prop-types";

const ServiceBox = (props) => {
  const { img, title } = props;
  return (
    <div className='drop-shadow-2xl bg-white rounded-[42px] px-[34px] py-[59px] transition duration-75 hover:scale-105'>
      <img className='m-auto mb-[58px]' src={img} />
      <h2 className='leading-[22.5px] text-lg text-[#091156] font-semibold'>
        {title}
      </h2>
      <p className='text-[#8B8B8B] text-sm leading-[21px] tracking-widest font-normal py-4'>
        Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
        turpis.
      </p>
    </div>
  );
};

ServiceBox.propTypes = {};

export default ServiceBox;
