import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {

    const { login } = use(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password);
    }


    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 px-15 shadow-2xl">
                <div className="card-body">
                    <h1 className='mb-10 mt-5 font-semibold text-[28px] text-center'>Login your account</h1>
                    <form onSubmit={handleSubmit} className="fieldset">
                        {/* Email */}
                        <label className="label font-bold">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* Password */}
                        <label className="label font-bold">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <button className="btn btn-neutral mt-4">Login</button>
                        <Link to='/auth/register' className="link link-hover text-center mt-5 mb-10">Dont have an account? <span className='text-red-300'>Register now</span></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;