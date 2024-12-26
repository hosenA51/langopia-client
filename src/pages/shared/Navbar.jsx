import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Navbar.css"
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const location = useLocation();
    // const { user, handleLogout } = useContext(AuthContext);
    const {user, handleLogout} = useAuth()
    // eslint-disable-next-line no-unused-vars
    const [showName, setShowName] = useState(false);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const isHome = location.pathname === '/';
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>

        <li><NavLink to="/find-tutors">Find Tutors</NavLink></li>

        {
            user && <>
                <li><NavLink to="/addTutorials">Add Tutorials</NavLink></li>
                <li><NavLink to="/myTutorials">My Tutorials</NavLink></li>
                <li><NavLink to="/myBookedTutors">My booked Tutors</NavLink></li>
            </>
        }
    </>
    return (
        <div className={`navbar-container py-3 ${isHome ? 'absolute' : 'relative bg-base-200'} top-0 left-0 w-full z-10`}>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#FFF8E5] rounded-box z-[1] mt-3 w-52 p-2 shadow text-base-content">
                            {links}
                        </ul>
                    </div>
                    <a className="h-16 hidden w-auto md:flex items-center" href='/'>
                        <h1 className='text-[#FF6363] text-3xl font-extrabold'>Langopia</h1>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-0 text-[16px] text-base-content">
                        {links}
                    </ul>
                </div>
                <label className="grid cursor-pointer place-items-center ml-4 mr-2">
                    <input
                        type="checkbox"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
                <div className="navbar-end">
                    {user?.email ? (
                        <div className="flex items-center gap-2">
                            <div className="profile-container relative  overflow-hidden">
                                <img
                                    src={user.photoURL || "https://via.placeholder.com/150"}
                                    alt="User Profile"
                                    className="w-12 h-12 rounded-full transition-opacity duration-300 group-hover:opacity-0"
                                />
                                <span className="absolute inset-0 flex items-center justify-center text-base-content text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {user.displayName || "User"}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="bg-none text-lg font-semibold text-base-content px-4 py-2 rounded-full border hover:bg-[#FF6363] hover:text-white transition-all duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className='flex gap-2'><NavLink state={{ from: location }} to="login" className="bg-none text-lg font-semibold text-base-content px-4 py-2 rounded-full border hover:bg-[#FF6363] hover:text-white transition-all duration-300">Login</NavLink></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;