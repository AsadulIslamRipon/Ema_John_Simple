import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
                <img src={Logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/order review">Order Review</a>
                <a href="/manage inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
            
        </nav>
    );
};

export default Header;