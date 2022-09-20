import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

const inputBox = {
    width: '250px',
    height: '250px'
}

const linkStyle = {
    'text-decoration' : 'none',
    'color': '#fff'
}


function Footer() {
  return (
    <div className='footer-container' id='footer-container'>
        <section className='footer-subscription'>
            <h2 className='footer-subscription-heading'>
                Request a quote below
            </h2>
            <p className='footer-subscription-text'>
                we will get back to you
            </p>
            <div className='input-areas'>
                <form className='footer-container'>
                    <input className='footer-input' type='email' name='email' placeholder='Your Email'/>
                    <input className='footer-input' type='text' name='name' placeholder='Your Name'/>
                    <textarea className='footer-input' type='text-box' name='quote' placeholder='What kind of work do you need done?' style={inputBox}/>
                    <Button buttonStyle='btn--outline' onClick={() => window.location = 'mailto:kirk@dovetailcontracting.com'}>Send</Button>
                </form>
            </div>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <section class='social-media'>
                        <div class='social-media-wrap'>
                            <div class='footer-logo'>
                                <Link to='/' className='social-logo'>
                                Social Media
                                </Link>
                            </div>
                            <div class='social-icons'>
                                    <a href='https://facebook.com/dovetailcontracting' target='_blank' style={linkStyle}>
                                        <i class='fab fa-3x fa-facebook-f' />
                                    </a>
                                    <a href='https://instagram.com/dovetailcontracting' target='_blank' style={linkStyle}>
                                        <i class='fab fa-3x fa-instagram' />
                                    </a>
                                    <a href='https://twitter.com/dovetailcontracting' target='_blank' style={linkStyle}>
                                        <i class='fab fa-3x fa-twitter' />
                                    </a>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <small class='website-rights'>Dovetail Contracting © 2022</small>
      
    </div>
  )
}

export default Footer
