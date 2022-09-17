import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>DOVETAIL CONTRACTING</h1>
      <p>Were here for you, contact us to let us know how we can help</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>CONTACT US <i className='far fa-envelope' /></Button>
      </div>
    </div>
  )
}

export default HeroSection;
