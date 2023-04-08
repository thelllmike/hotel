import React from 'react';
import '../Styles/NavBar_login.css'
import logo from '../images/logo.png'

function NavbarLogin() { 
  return (
    <nav>
      <div className="logo">
        <a href="/"><img src={logo} alt="" srcset="" /></a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/special-packages">Special Packages</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/our-services">Our Services</a>
        </li>
        <li>
          <a href="/about-us">About Us</a>
        </li>
      </ul>
      <div className="auth-buttons">
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
}

export default NavbarLogin;
