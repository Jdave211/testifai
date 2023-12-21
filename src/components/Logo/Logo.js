import React from 'react';
import logo from '../../images/logo.png';

const Logo = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" style={{width:75, height:75}}className='logo flex justify-start -mt-1'/>
        </nav>
    );
}

export default Logo;