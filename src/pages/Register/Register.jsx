import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../context/AuthContext/AuthContext';
import auth from '../../firebase/firebase.init';

const Register = () => {
    const { handleGoogleLogin, createUser, manageProfile, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast.error("Password must contain at least 6 characters");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one Uppercase letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one Lowercase letter");
            return;
        }
        createUser(email, password)
            .then(() => {
                toast.success("Registration successful!");

                manageProfile(name, photo).then(() => {
                    const updatedUser = {
                        ...auth.currentUser,
                        displayName: name,
                        photoURL: photo,
                    };
                    setUser(updatedUser);
                });
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                toast.error("This Email already in use");
            });
    }

    const googleLoginHandler = () => {
        handleGoogleLogin()
            // eslint-disable-next-line no-unused-vars
            .then(result => {
                toast.success("Registration successful!");
            })
            .catch(err => {
                setError(err.message)
            });
    };

    return (
        <div className="min-h-screen bg-[#FFF8E5] py-14">

            <div className="card w-full mx-auto max-w-2xl shadow-xl bg-white flex flex-row rounded-none">
                <div className='flex flex-col bg-[#002333] justify-center space-y-5 px-8'>
                    <h1 className='text-2xl text-white font-bold'>Join Langopia for <br /> Free</h1>
                    <div className='bg-[#FF6363] w-28 h-2 rounded-full'></div>
                    <p className='text-white text-lg font-semibold'>Join Langopia to learn your <br /> favorite language, connect <br /> with expert tutors, and explore <br /> quality tutorials—all <br /> in one place!</p>
                </div>
                <form onSubmit={handleSubmit} className="card-body bg-base-100">
                    <div className="form-control">
                        <label className="label">
                            <span className="">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="Email" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered text-black" required />
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
                        <button type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-2 top-[52px]'>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                    </div>
                    <div className='flex justify-between items-center gap-2 mt-3'>
                        <div className='w-full border-b-2'></div>
                        <div>
                            <p>OR</p>
                        </div>
                        <div className='w-full border-b-2'></div>
                    </div>
                    <div className="form-control mt-3">
                        <button onClick={googleLoginHandler} className="btn px-5 btn-outline border-blue-700/80 hover:bg-[#FF6363] text-lg rounded-full cursor-pointer"><FcGoogle /> Continue With Google</button>
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn px-5 bg-[#FF6363] hover:bg-[#800f2f] hover:text-gray-300 text-lg text-white rounded-full cursor-pointer">Register</button>
                    </div>
                    <div className='form-control mt-3 mx-auto text-lg font-medium'>
                        <p>Already have an account? <NavLink to="/login" className="text-[#FF6363]">Login</NavLink></p>
                    </div>
                </form>
                {error && <p className='text-red-500'>{error}</p>}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;