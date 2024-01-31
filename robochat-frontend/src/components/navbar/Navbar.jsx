import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Pretpostavljamo da postoji CSS fajl za stilizaciju Navbar-a

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link nav-brand">RoboChat</Link>
      <img className='logo'  src="https://i.ibb.co/z2z43JF/logo-roze.png" alt="logo" border="0"/>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/onama" className="nav-link">About us</Link>
        <Link to="/chatbot" className="nav-link">Chat wit our AI</Link>
      </div>
    </nav>
  );
};

export default Navbar;