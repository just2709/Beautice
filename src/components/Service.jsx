import React from "react";
import PropTypes from "prop-types";
import Animation1 from ".././icon_home1/Animation1.png";
import Animation2 from ".././icon_home1/Animation2.png";
import Animation3 from ".././icon_home1/Animation3.png";
import ServiceBox from "./ServiceBox";

const Service = (props) => {
  return (
    <div className='text-center max-w-[1140px] w-full m-auto text-[#FF64AE] mt-[131px] text-base font-semibold leading-5'>
      Professional Teams
      <h1 className='font-semibold text-4xl leading-[45px] w-[550px] text-[#091156] mx-auto my-3'>
        The Professional experts
      </h1>
      <p className='w-[850px] mx-auto mb-[82px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </p>
      <div className='flex space-x-10'>
        <ServiceBox img={Animation1} title='Beauty consultation' />
        <ServiceBox img={Animation2} title='Skin treatments' />
        <ServiceBox img={Animation3} title='Beauty product' />
      </div>
    </div>
  );
};

Service.propTypes = {};

export default Service;
