import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from ".././icon_home1/Main Logo.png";
import Button from "./Button";

const Header = (props) => {
  const [bgNavBar, setBgNavBar] = useState(false);

  const changeBgNavBar = () => {
    if (window.scrollY >= 64) {
      setBgNavBar(true);
    } else {
      setBgNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBgNavBar);
  return (
    <div className={`w-full fixed top-[41px] z-40 `}>
      <div
        className={`rounded-full h-[63px] flex max-w-[1140px] justify-between m-auto ${
          bgNavBar ? "bg-white duration-500" : ""
        }`}>
        <img src={Logo} />
        <ul className='flex items-center justify-end font-medium text-base tracking-widest leading-6 space-x-10 text-[#8B8B8B]'>
          <li className='text-[#414880] font-semibold cursor-pointer hover:font-semibold'>
            Home+
          </li>
          <li className='cursor-pointer hover:scale-105'>About</li>
          <li className='cursor-pointer hover:scale-105'>Service</li>
          <li className='cursor-pointer hover:scale-105'>Gallery</li>
          <li className='cursor-pointer hover:scale-105'>Blog</li>
          <li>
            <Button title='Contact' className='h-[52px]' />
          </li>
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
