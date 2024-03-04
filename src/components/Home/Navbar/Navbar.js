import React, {useState, useEffect, useRef} from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const ref = useRef();

    const user = {
        name: 'John Doe',
        credits: 100,
    };
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (isProfileOpen && ref.current && !ref.current.contains(e.target)) {
            setIsProfileOpen(false);
          }
        };
    
        document.addEventListener("mousedown", checkIfClickedOutside);
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside);
        };
      }, [isProfileOpen]);
    return (
        <nav className='flex nav mt-4 '>
            <Link to='/' className='logo'>
                <Logo />
            </Link>
            <div className ='items flex space-x-8 ml-auto relative'>
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="profile black_btn">
                Profile
            </button>
            {isProfileOpen && (
                <div className={`absolute mt-14 py-2 w-48 bg-black text-white rounded-lg shadow-xl border border-gray-700 ${isProfileOpen ? 'right-1' : ''}`}>
                <div className="px-4 py-2 font-semibold">Name: {user.name}</div>
                <div className="px-4 py-2 font-semibold">Credits: {user.credits}</div>
                <button className="px-4 py-2 w-full text-left hover:bg-gray-400 font-semibold">Buy More Credits</button>
                <button className="px-4 py-2 w-full text-left hover:bg-gray-400 font-semibold">Sign Out</button>
                </div>
            )}
            </div>
        </nav>
    );
}

export default Navbar;