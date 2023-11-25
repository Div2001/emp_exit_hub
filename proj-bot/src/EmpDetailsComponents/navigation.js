
import React  from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {

  
  return (
    
    <nav id="menu1">
      <div >
      <ul className='left-menu' >  
          <li>
            <img src='img/uni_logo.svg' alt="Logo" className="logo1" style={{ width: '100px', height: 'auto' }} />
          </li>
          <li style={{ marginLeft: 'auto', paddingRight: '10px' }}>
            <button style={{borderRadius:'25px'}} >
              <Link className='link' to="/">Logout</Link>
            </button>
          </li>
        </ul>  
      </div>
    </nav>
  );
};
