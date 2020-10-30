import React from 'react';
import Navbar from '../Navigation/Navbar';
import './Portfolio.css';
import Footer from '../Home/Footer/Footer'

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Navbar></Navbar>
            <div className="container">
                <h1 className="display-4 text-center text-white m-4 p-4">Portfolio Projects</h1>
                <div className="under-line"></div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-container card">
                            <img className="img-fluid" src="https://i.postimg.cc/1zMTMm7v/creative.png" alt="" />
                            <div className="project-detail text-center">
                                <h5>Creative Agency</h5>
                                <p>A full stack agency app where client can order services from home page. Admin can add services and see all More...</p>
                                <a href=" https://creative-agency-3.web.app/" className="btn btn-primary">Live Site</a>
                                <a href=" https://github.com/Arafat447/creative-agency-client" className="btn btn-primary ml-4">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-container card">
                            <img className="img-fluid" src="https://i.postimg.cc/v81Y1kDJ/volun.png" alt="" />
                            <div className="project-detail text-center">
                                <h5>Volunteer Network</h5>
                                <p>A full stack volunteer app where volunteers can participate in events from home page. Admin can add event and see all More...</p>
                                <a href="https://valunteer-network.web.app " className="btn btn-primary">Live Site</a>
                                <a href=" https://github.com/Arafat447/volunteer-network-client" className="btn btn-primary ml-4">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-container card">
                            <img className="img-fluid" src="https://i.postimg.cc/QNRXcmTH/travel.png" alt="" />
                            <div className="project-detail text-center">
                                <h5>Travel Guru</h5>
                                <p> A react travel booking app where travellers can book room for different place from home page and his all booking summery can see in book page. Admin see all bookings More...</p>
                                <a href="https://cranky-lovelace-e89bff.netlify.app " className="btn btn-primary">Live Site</a>
                                <a href="https://github.com/Arafat447/travel-guru" className="btn btn-primary ml-4">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-container card">
                            <img className="img-fluid" src="https://i.postimg.cc/B66zVrd4/hard.png" alt="" />
                            <div className="project-detail text-center">
                                <h5>Hard Rock Music</h5>
                                <p>A fully responsive javascript app where user can search by music name and search result show with music lyrics More...</p>
                                <a href=" https://arafat447.github.io/hard-rock-music " className="btn btn-primary">Live Site</a>
                                <a href="https://github.com/Arafat447/hard-rock-music" className="btn btn-primary ml-4">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-container card">
                            <img className="img-fluid" src="https://i.postimg.cc/5tfTwYgH/pin.png" alt="" />
                            <div className="project-detail text-center">
                                <h5>Pin Matcher</h5>
                                <p>A fully responsive javascript app where user can generate pin then the generated pin can type keypad then can submit it if matched he will get a message if not match he also get another message More...</p>
                                <a href="https://arafat447.github.io/pin-matcher/" className="btn btn-primary">Live Site</a>
                                <a href=" https://github.com/Arafat447/pin-matcher" className="btn btn-primary ml-4">Github</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="project-container card">
                            <img className="img-fluid" src="https://i.postimg.cc/d1xfPWYd/weather.png" alt="" />
                            <div className="project-detail text-center">
                                <h5>Weather App</h5>
                                <p>A fully responsive javascript app where user can search any cities in the world to know weather of the city.After search user will get cities all weather information like air pressure , humidity , wind flow , temperature More...</p>
                                <a href="https://arafat447.github.io/pin-matcher/" className="btn btn-primary">Live Site</a>
                                <a href=" https://github.com/Arafat447/pin-matcher" className="btn btn-primary ml-4">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;