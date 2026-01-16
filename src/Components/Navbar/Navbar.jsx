import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png"
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user,logOut } = use(AuthContext);
    const handleLogout=()=>{
        logOut();
    }


    return (
        <div className='flex justify-between sm:grid sm:grid-cols-3 items-center'>
            <div className='hidden sm:flex flex-col'>{user && user.displayName} <span className='text-[10px]'>{user && user.email}</span></div>
            <div className='nav flex justify-center gap-4 sm:gap-8 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center flex-row-reverse gap-3'>
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary px-3 lg:px-6 text-[11px] lg:text-[13px]'>Logout</button> : <Link to='/auth/login' className='btn btn-primary px-3 lg:px-6 text-[11px] lg:text-[13px]'>Login</Link>
                }
                {
                    user ? <img className='h-8 rounded-3xl' src={user.photoURL} alt="" /> : <img className='h-8' src={userIcon} alt="" />
                }
            </div>
        </div>
    );
};

export default Navbar;