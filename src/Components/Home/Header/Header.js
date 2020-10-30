import React from 'react';
import Particles from 'react-particles-js';
import Navbar from '../../Navigation/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <div className="animation">

                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 10,
                                "random": true
                            },
                            "move": {
                                "direction": "bottom",
                                "out_mode": "out"
                            },
                            "line_linked": {
                                "enable": false
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "remove"
                                }
                            },
                            "modes": {
                                "remove": {
                                    "particles_nb": 10
                                }
                            }
                        }
                    }} />
                <div className="header-content container text-center">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className=" display-4 mt-4 text-white">Hello I am Arafat Hossain</h1>
                            <h3 className="mt-4 text-white">Front End Web Developer</h3>
                            <Link to="/contact">
                                <button className="btn btn-primary mt-4">Hire Me</button>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <img className="ml-4" src="https://i.postimg.cc/zDb5PtbS/IMG-3015.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;




