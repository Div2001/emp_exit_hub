import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
// import logo from '../Natwest_logo.svg'
// import logo from 'public/img/Natwest_logo.svg'
//import logo from '../Natwest_logo.svg'
import logo from '../uni_logo.svg'

function Footer() {
  return (
    <div className='footer-container'>
        {/* <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>            
            <div className='input-areas'>
                <form>
                    <input
                    type='email'
                    name='email'
                    placeholder='Your email'
                    className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>     */}
        {/* <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                </div>
            </div>
        </div> */}
        <div className='footer-copyright'>
          <p>Copyright © Unicorn 2023. Registered office: Santa Clara, Hills</p>
        </div>

        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} alt="Logo" className="logo-svg" />

            </Link>
          </div>
          {/* <small class='website-rights'>NATWEST © 2023</small> */}
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/Unicorn/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/unicorn/?hl=en'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
          
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/Unicorn'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://in.linkedin.com/company/unicorn'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer