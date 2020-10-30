import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'
import Work from './Work/Work';
const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <Work></Work>
            <Footer></Footer>
        </div>
    );
};

export default Home;