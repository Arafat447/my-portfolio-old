import React from 'react';
import Navbar from '../Navigation/Navbar';
import './About.css';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
const About = () => {
    return (
        <div className="about-container">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 profile text-center">
                        <img src="https://i.postimg.cc/zDb5PtbS/IMG-3015.jpg" alt="" />
                        <div className="text-center mt-3">
                            <a href="https://drive.google.com/uc?id=1cAt95I_ulVXz_y1L_h8_DQF3eXgcGUw5&export=download" className="btn btn-primary mt-4">Download Resume</a>
                        </div>
                    </div>
                    <div className="col-md-6 profile-info">
                        <h1 className="display-4 text-white">Hi, I am Arafat Hossain </h1>
                        <h6 className="text-white">I am a frontend web developer. I make modern website with pixel  perfect design and make user friendly, more interactive with animation !</h6>
                        <div className="skills">
                            <h1 className="text-white">My Skills</h1>
                            <ul>
                                <li>HTML-5</li>
                                <li>CSS-3</li>
                                <li>Bootstrap-4</li>
                                <li>JavaScript ES-6</li>
                                <li>React JS</li>
                                <li>Node JS</li>
                                <li>Express JS</li>
                                <li>MongoDB</li>
                            </ul>
                            <Link to="/portfolio">
                                <button className="btn btn-primary">Portfolio</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;