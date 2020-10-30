import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
const Work = () => {
    return (
        <div className="container mt-4 pt-4">
            <h1 className="text-center mb-4 pb-4">My Work</h1>
            <div className="row">
                <div className="col-md-4 card-container">
                    <Link to="/portfolio">
                        < div className="card" style={{ border: 'none' }}>
                            <img className="card-img-top" src="https://i.imgur.com/mhww2BH.png" alt="Card image cap" />
                            <div className="card-body text-center">
                                <h5 className="card-title text-muted">Responsive Web App</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 card-container">
                    <Link to="/portfolio">
                        < div className="card" style={{ border: 'none' }}>
                            <img className="card-img-top" src="https://i.postimg.cc/6p9Xz8HN/react.jpg" alt="Card image cap" />
                            <div className="card-body text-center">
                                <h5 className="card-title text-muted">React Application</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4 card-container">
                    <Link to="/portfolio">
                        < div className="card" style={{ border: 'none' }}>
                            <img className="card-img-top" src="https://i.postimg.cc/7YrDGs0h/mern3.png" alt="Card image cap" />
                            <div className="card-body text-center">
                                <h5 className="card-title text-muted">MERN Stack App</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Work;