import './Navbar1.css'
import React from "react";
import { Link } from 'react-router-dom';

export const Navbar1 = () => {

  return (
    <nav id="menu" className="navbar navbar-default">
      <div>
        {/* <ul className='left-menu' style={{ display: 'flex', alignItems: 'center', listStyleType: 'none', margin: '0', padding: '0' }}> */}
        <ul className='left-menu' >  
          <li>
            <img src='img/uni_logo.svg' alt="Logo" className="logo1" style={{ width: '100px', height: 'auto' }} />
          </li>
          <li style={{ marginLeft: 'auto', paddingRight: '10px' }}>
            <button >
              <Link className='link' to="/">Logout</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
