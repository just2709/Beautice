import React from "react";
import PropTypes from "prop-types";
import ExpertBox from "./ExpertBox";
import Expert1 from ".././icon_home1/unsplash_pTrhfmj2jDA.png";
import Expert2 from ".././icon_home1/unsplash_FVh_yqLR9eA.png";
import Expert3 from ".././icon_home1/unsplash_mEZ3PoFGs_k.png";

const Expert = (props) => {
  return (
    <div className='text-center max-w-[1140px] w-full m-auto text-[#FF64AE] mt-[131px] text-base font-semibold leading-5'>
      Main Services
      <h1 className='font-semibold text-4xl leading-[45px] w-[550px] text-[#091156] mx-auto my-3'>
        Learn services to focus on your beauty
      </h1>
      <p className='w-[850px] mx-auto mb-[82px]'>
        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
        Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
        turpis.
      </p>
      <div className='flex space-x-10'>
        <ExpertBox img={Expert1} job='Surgeon' name='Briyan Nevalli' />
        <ExpertBox img={Expert2} job='Dermatologist' name='Bella sebastian' />
        <ExpertBox img={Expert3} job='Stylist expert' name='Lilly Adams' />
      </div>
    </div>
  );
};

Expert.propTypes = {};

export default Expert;
