import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container mb-3">
            <div className="d-flex justify-content-center mt-4">
            <p className="mt-4">&copy;2020 Arafat Hossain All Right Reserved</p>
            <ul className="mt-3">
                <li>
                    <a href="https://www.facebook.com/arafathossain.ar"><img src="https://i.postimg.cc/FF0T8K6W/fb.png" alt=""/></a>
                    <a href="https://linkedin.com/in/arafat-hossasin-ah"><img src="https://i.postimg.cc/wM5FmWJ8/ln.png" alt=""/></a>
                    <a href="https://github.com/Arafat447"><img src="https://i.postimg.cc/xTY622D0/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe.png" alt=""/></a>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default Footer;