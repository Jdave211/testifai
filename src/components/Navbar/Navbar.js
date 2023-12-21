import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <nav className='flex nav mt-4 '>
            <a className='logo'>
                <Logo />
            </a>
            <ul className ='items flex space-x-8 ml-auto'>
            <a href='' className='profile black_btn'>Profile</a>
            <p>🌙</p>
            </ul>
        </nav>
    );
}

export default Navbar;