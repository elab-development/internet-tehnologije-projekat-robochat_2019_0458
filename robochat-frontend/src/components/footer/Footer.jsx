import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="salon-info">
                <img className='logo3'  src="https://i.ibb.co/z2z43JF/logo-roze.png" alt="logo" border="0"/>
                    <h3>RoboChat®</h3>
                    <p>All rights reserved</p>
                </div>
                <button className="back-to-top" onClick={scrollToTop}>
                    <FaArrowCircleUp className="arrow-icon" /> To top
                </button>
            </div>
        </footer>
    );
};

export default Footer;