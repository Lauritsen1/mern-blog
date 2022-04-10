import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../images/placeholder-logo.svg';

import LogoutButton from './LogoutButton';
import Hamburger from './Hamburger';

function Header() {
    const [navActive, setNavActive] = useState(false);

    const { user } = useSelector((state) => state.auth);

    const toggleNav = () => {
        if (navActive) {
            setNavActive(false);
        } else {
            setNavActive(true);
        }
    };

    return (
        <header className='relative px-6'>
            <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-center'>
                <div className='flex justify-between items-center w-full md:hidden'>
                    <img src={logo} alt='Logo' />

                    <Hamburger navActive={navActive} toggleNav={toggleNav} />
                </div>

                <nav
                    className={`
                    absolute top-full left-6 right-6
                    z-20
                    bg-white 
                    rounded-b-lg
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    transition duration-150 ease-in origin-top 
                    ${
                        !navActive
                            ? 'scale-y-0 opacity-0'
                            : 'scale-y-100 opacity-100'
                    }
                    md:scale-100
                    md:opacity-100
                    md:relative md:inset-0
                    md:flex
                    md:justify-between
                    md:ring-0
                    md:shadow-none
                    md:rounded-none
                    md:transition-none
                    md:w-full
                    `}>
                    <img className='hidden md:block' src={logo} alt='Logo' />

                    <ul className='flex flex-col p-6 gap-3 md:p-0 md:flex-row'>
                        <li className='font-medium p-2 bg-slate-100 rounded'>
                            <Link
                                className='block'
                                to='/'
                                onClick={() => setNavActive(false)}>
                                Home
                            </Link>
                        </li>
                        {/* <li className='font-medium p-2 hover:bg-slate-100'>
                            <Link
                                className='block'
                                to='/'
                                onClick={() => setNavActive(false)}>
                                Categories
                            </Link>
                        </li> */}
                        {user && (
                            <li className='font-medium p-2 hover:bg-slate-100'>
                                <Link
                                    className='block'
                                    to='/dashboard'
                                    onClick={() => setNavActive(false)}>
                                    Dashboard
                                </Link>
                            </li>
                        )}
                    </ul>

                    <div className='flex flex-col justify-center gap-6 border-t-2 border-gray-100 p-6 md:p-0 md:flex-row-reverse md:border-0'>
                        {user ? (
                            <LogoutButton />
                        ) : (
                            <>
                                <button className='text-white font-medium bg-blue-600 hover:bg-blue-500 rounded px-4 py-2 w-full md:w-max'>
                                    <Link to='register'>Register</Link>
                                </button>

                                <div className='flex justify-center gap-1 md:items-center'>
                                    <p className='md:hidden'>Existing user?</p>
                                    <Link
                                        to='/login'
                                        className='text-blue-600 font-medium md:text-black'
                                        onClick={() => setNavActive(false)}>
                                        Login
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
