import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Findus = () => {
    return (
        <div>
            <h2 className='font-semibold text-[11px] lg:text-[16px] text-accent'>Find us on</h2>
            <div>
                <button className='hover:bg-gray-100 w-full flex gap-7 p-3 items-center border border-gray-200'>
                    <FaFacebook />
                    <p className='text-[11px] lg:text-[14px]'>Facebook</p>
                </button>
                <button className='hover:bg-gray-100 w-full flex gap-7 p-3 items-center border border-gray-200'>
                    <FaSquareXTwitter />
                    <p className='text-[11px] lg:text-[14px]'>Twitter</p>
                </button>
                <button className='hover:bg-gray-100 w-full flex gap-7 p-3 items-center border border-gray-200'>
                    <FaInstagram />
                    <p className='text-[11px] lg:text-[14px]'>Instagram</p>
                </button>
            </div>
        </div>
    );
};

export default Findus;