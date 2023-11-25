
import React  from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {

  
  return (
    
    <nav id="menu" className="navbar navbar-default " >
      <div>
            <ul className='left-menu' >
            <Link link to='/dashboard'>
            <img src='img/Natwest_logo.svg' alt="Logo" className="logo1" style={{ width: '100px', height: 'auto' }}/>
            </Link>
            </ul>  
      </div>
    </nav>
  );
};
