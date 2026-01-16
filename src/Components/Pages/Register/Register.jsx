import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const {createUser,setUser}=use(AuthContext);

    const handleRegister=e=>{
        e.preventDefault();
        // Form info
        const form=e.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password,name,photoURL)
        .then(result=>{
            setUser(result);
        });

    }


    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 px-15 shadow-2xl">
                <div className="card-body">
                    <h1 className='mb-10 mt-5 font-semibold text-[28px] text-center'>Register your account</h1>
                    <form onSubmit={handleRegister}  className="fieldset">
                        {/* Name */}
                        <label className="label font-bold">Your name</label>
                        <input name='name' type="text" className="input" placeholder="name" required />

                        {/* Url */}
                        <label className="label font-bold">Photo Url</label>
                        <input name='photoURL' type="text" className="input" placeholder="url" required />

                        {/* Email */}
                        <label className="label font-bold">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        {/* Password */}
                        <label className="label font-bold">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        {/* Submit */}
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <Link to='/auth/login' className="link link-hover text-center mt-5 mb-10">Already have an account? <span className='text-red-300'>Login now</span></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;