import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='space-y-3'>
            <h2 className='font-semibold text-[11px] lg:text-[16px]'>Login with</h2>
            <div className='flex flex-col gap-3'>
                {/* Google */}
                <button className="btn text-[8px] lg:text-[14px] bg-white text-black border-black hover:bg-base-200">
                    <FaGoogle />
                    Login with Google
                </button>
                {/* GitHub */}
                <button className="btn text-[8px] lg:text-[14px] bg-white text-black border-black hover:bg-base-200">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;