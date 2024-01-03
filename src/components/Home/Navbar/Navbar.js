import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex nav mt-4 '>
            <Link to='/' className='logo'>
                <Logo />
            </Link>
            <ul className ='items flex space-x-8 ml-auto'>
            <a href='' className='profile black_btn'>Profile</a>
            </ul>
        </nav>
    );
}

export default Navbar;