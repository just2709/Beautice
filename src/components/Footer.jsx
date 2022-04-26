import React from "react";
import PropTypes from "prop-types";
import Logo from ".././icon_home1/Footer Logo.png";
import Facebook from ".././icon_home1/facebook-f.png";
import Twitter from ".././icon_home1/twitter (1).png";
import In from ".././icon_home1/linkedin-in.png";
import Youtube from ".././icon_home1/youtube.png";
import Instagram from ".././icon_home1/instagram (1).png";
import Background1 from ".././icon_home1/Footer BG 1.png";
import Background2 from ".././icon_home1/Footer BG 2.png";

const Footer = (props) => {
  return (
    <div className='relative w-full mt-[70px] overflow-hidden h-[705px]'>
      <img className='absolute -z-10 w-full h-full' src={Background1} />
      <img className='absolute -z-20 w-full h-full' src={Background2} />
      <div className='absolute -z-30 -bottom-[220px] bg-[#0D165C] h-[500px] w-full'></div>
      <div className='flex text-[#D7DBFF] max-w-[1140px] justify-between m-auto pt-[225px]'>
        <div>
          <img src={Logo} />
          <h1 className='mt-[33px] mb-[26px] font-normal text-base tracking-widest leading-6'>
            <span className='text-white font-bold'>Beautice</span> is a Beauty
            Clinic WordPress Theme.
          </h1>
          <p className='font-medium tracking-widest leading-[21px] italic'>
            Baker Steet 101, NY, United States.
          </p>
          <p className='font-medium tracking-widest leading-[21px] italic mt-1'>
            +521 569 8966. <a>mail@company.com.</a>
          </p>
        </div>
        <div>
          <h1 className='text-white mb-6'>Pages</h1>
          <ul className='flex flex-col space-y-4 list-disc list-inside'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Team</li>
          </ul>
        </div>
        <div>
          <h1 className='text-white mb-6'>Informations</h1>
          <ul className='flex flex-col space-y-4 list-disc list-inside'>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='max-w-[1140px] m-auto flex justify-between mt-[154px]'>
        <div className='flex space-x-10'>
          <img src={Facebook} />
          <img src={Twitter} />
          <img src={In} />
          <img src={Youtube} />
          <img src={Instagram} />
        </div>
        <div>
          <h1 className='text-white'>
            © AltDesain Studio 2021 - All right reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
