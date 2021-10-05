import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="top justify-content-md-center bg-warning alain-item-center py-3">
            <NavLink className="top px-3" to="/home">Home</NavLink>
            <NavLink className="top px-3" to="/about">About</NavLink>
            <NavLink className="top px-3" to="/faculty">Faculty</NavLink>
            <NavLink className="top px-3" to="/services">Services</NavLink>
        </div>
    );
};

export default Header;