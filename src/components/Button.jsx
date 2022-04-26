import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { title } = props;
  return (
    <button className='bg-[#FF64AE] text-white rounded-[50px] px-[41px] py-[14px] text-base font-semibold tracking-widest'>
      {title}
    </button>
  );
};

Button.propTypes = {};

export default Button;
