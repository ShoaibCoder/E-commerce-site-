import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'))

    // Navigate
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('users');
        navigate('/login');
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // NavList
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 font-sans ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user && <li>
                <Link to={'/signup'}>Signup</Link>
            </li>}

            {/* Login */}
            {!user && <li>
                <Link to={'/login'}>Login</Link>
            </li>}

            {/* Admin */}
            {user && user.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>{user.name}</Link>
            </li>}

            {/* logout */}
            {user && <li className='cursor-pointer ' onClick={logout}>
                Logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'} className='flex justify-center' >
               Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gray-900 sticky py-8 ">
            {/* Main */}
            <div className="lg:flex lg:justify-between items-center lg:px-3 relative"> 
                <div className="left flex items-center">
                    <Link to={'/'} className='flex items-center' >
                        <h2 className='font-body text-center font-extrabold text-gray-600 text-2xl pl-3'>FABDEAL</h2>
                    </Link>
                </div>

                {/* Right */}
                <div className=" right flex justify-center mb-4 lg:mb-0 font-extrabold">
                    {navList}
                </div>

                {/* Search Bar */}
                <SearchBar className=" left-0 z-50 shadow-md" /> 
            </div>
        </nav>
    );
}

export default Navbar;
