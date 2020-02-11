import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <NavLink exact className="item" to="/">Home</NavLink>
            <NavLink className="item" to="/about/hyojin">About</NavLink>
            <NavLink className="item" to="/posts">Posts</NavLink>
            <NavLink className="item" to="/search">Search</NavLink>
            <NavLink className="item" to="/myprofile">MyProfile</NavLink>
            <NavLink className="item" to="/login">Login</NavLink>
            <NavLink className="item" to="/">Login</NavLink>
        </div>
    );
};

export default Header;