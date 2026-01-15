import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 items-center'>
            <div className=''></div>
            <div className='nav flex justify-center gap-8 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex flex-row-reverse gap-3'>
                <button className='btn btn-primary px-6'>Login</button>
                <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Navbar;