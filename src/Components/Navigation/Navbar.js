import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <NavLink className="navbar-brand text-white" to='/home'>Arafat</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link mr-3 text-white" to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mr-3 text-white" to='/portfolio'>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mr-3 text-white" to='/blog'>Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mr-3 text-white" to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mr-3 text-white" to='/contact'>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://drive.google.com/uc?id=1cAt95I_ulVXz_y1L_h8_DQF3eXgcGUw5&export=download" className="btn btn-primary">Download Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;