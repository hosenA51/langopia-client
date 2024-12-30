import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import AuthContext from '../../context/AuthContext/AuthContext';

const Login = () => {
    const { signInUser, handleGoogleLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                navigate(location.state?.from || '/');
            })
            .catch(error => {
                toast.error("invalid Credential")
            })
    }
    const googleLoginHandler = () => {
        handleGoogleLogin()
            .then(result => {
                navigate(location.state?.from || '/');
            })
            .catch(error => {
                toast.error("invalid Credential")
            });
    };
    return (
        <div className='py-6 md:py-14 bg-[#FFF8E5]'>
            <div className="card w-full mx-auto max-w-2xl shadow-xl bg-white flex flex-row rounded-none">
                <div className='flex flex-col bg-[#002333] justify-center space-y-5 pl-6'>
                    <h1 className='text-2xl text-white font-bold'>Welcome Back to Langopia</h1>
                    <div className='bg-[#FF6363] w-28 h-2 rounded-full'></div>
                    <p className='text-white text-lg font-semibold'>Sign in to continue to your <br /> account.</p>
                </div>
                <form onSubmit={handleSubmit} className="card-body bg-base-100">
                    <div className="form-control">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="input input-bordered text-black"
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="input input-bordered text-black"
                            required />
                        <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-2 top-[52px]'>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                        <label className="mt-4">
                            <a href="#" className="hover:text-blue-700/80">Forgot password?</a>
                        </label>
                    </div>
                    <div className='flex justify-between items-center gap-2 mt-4'>
                        <div className='w-full border-b-2'></div>
                        <div>
                            <p>OR</p>
                        </div>
                        <div className='w-full border-b-2'></div>
                    </div>
                    <div className="form-control mt-4">
                        <button onClick={googleLoginHandler} className="btn px-3 btn-outline border-blue-700/80 hover:bg-[#FF6363] text-lg  rounded-full cursor-pointer"><FcGoogle /> Continue With Google</button>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn px-5 bg-[#FF6363] text-lg text-white rounded-full cursor-pointer hover:bg-[#800f2f] hover:text-gray-300">Login</button>
                    </div>
                    <div className='form-control mt-4 mx-auto text-lg font-medium'>
                        <p>Don't have an account yet? <NavLink to="/register" className="text-[#FF6363]">Register</NavLink></p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;