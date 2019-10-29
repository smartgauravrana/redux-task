import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li ><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                    {/* <li><NavLink to="/new" activeClassName="active-link">New</NavLink></li>
                    <li><NavLink to="/edit" activeClassName="active-link">Edit</NavLink></li>                     */}
                </ul>
            </nav>
        </div>
    )
};

export default Header;