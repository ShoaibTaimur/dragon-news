import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    const now=new Date();
    const day = format(now,"EEEE");
    const monthYear = format(now,"PPP");

    return (
        <div className='mt-12.5 flex flex-col items-center gap-2.5'>
            <img className='mb-2.5' src={logo} alt="" />
            <h1 className='text-[15px] text-accent'>Journalism Without Fear or Favour</h1>
            <p className='text-[18px] font-medium'>{day}, <span className='opacity-60'>{monthYear}</span></p>
        </div>
    );
};
export default Header;