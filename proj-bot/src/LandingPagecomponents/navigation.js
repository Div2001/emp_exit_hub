import React  from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {

  
  return (
    
    <nav id="menu" className="navbar navbar-default " >
      <div>
            <ul className='left-menu' >
              
              <a href="#LandingPage"> 
                <img src='img/uni_logo.svg' alt="Logo" className="logo1" style={{ width: '100px', height: 'auto' }} />
              </a>

              <li style={{ marginLeft: 'auto' }}>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
            
              <li>
                <a href="#testimonials" className="page-scroll">
                  Reviews
                </a>
              </li>

              <li>
                <a href="#contact" className="page-scroll">
                  Contact Us
                </a>
              </li>

              <li style={{ marginLeft: 'auto' }}>
              <button><Link className='link' to ="/login">Login</Link></button>
              </li>
            </ul>  
      </div>
    </nav>
  );
};
