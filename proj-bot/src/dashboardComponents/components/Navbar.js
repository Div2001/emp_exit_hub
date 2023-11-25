import { click } from '@testing-library/user-event/dist/click'
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
//import logo from '../Natwest_logo.svg'
import logo from '../uni_logo.svg'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        {/* <i class="fa-solid fa-recycle"></i> */}
                        {/* <img src={logo} alt="Logo" className="logo-svg" /> */}
                        <img src='img/uni_logo.svg' alt="Logo" className="logo1" style={{ width: '100px', height: 'auto' }}/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home 
                            </Link> 
                        </li>
                        <li>    
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services 
                            </Link> 
                        </li>
                        <li>
                            <Link to='/help' className='nav-links' onClick={closeMobileMenu}>
                                Help 
                            </Link>
                        </li>
                        <li>
                            {/* <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Logout 
                            </Link>                     */}
                        </li> 
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Logout</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar