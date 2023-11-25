import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <img src='img/heroSectionImage.jpg' alt='Hero' className='hero-image' />
        <div className='hero-text'>
          <h1>Welcome to Employee Exit Hub</h1>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
