import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between sm:grid sm:grid-cols-3 items-center'>
            <div className='hidden sm:flex'></div>
            <div className='nav flex justify-center gap-4 sm:gap-8 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center flex-row-reverse gap-3'>
                <Link to='/auth/login' className='btn btn-primary px-3 lg:px-6 text-[11px] lg:text-[13px]'>Login</Link>
                <img className='h-8' src={user} alt="" />
            </div>
        </div>
    );
};

export default Navbar;