import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

const inputBox = {
    width: '250px',
    height: '250px'
}


function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                base form to go here
            </p>
            <p className='footer-subscription-text'>
                you can unsub at anytime
            </p>
            <div className='input-areas'>
                <form className='footer-container'>
                    <input className='footer-input' type='email' name='email' placeholder='Your Email'/>
                    <input className='footer-input' type='text' name='name' placeholder='Your Name'/>
                    <textarea className='footer-input' type='text-box' name='quote' placeholder='What kind of work do you need done?' style={inputBox}/>
                    <Button buttonStyle='btn--outline'>Send</Button>
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
                                <Link
                                    class='social-icon-link facebook'
                                    to='/'
                                    target='_blank'
                                    aria-label='Facebook'
                                >
                                    <i class='fab fa-facebook-f' />
                                </Link>
                                <Link
                                    class='social-icon-link instagram'
                                    to='/'
                                    target='_blank'
                                    aria-label='Instagram'
                                    >
                                        <i class='fab fa-instagram' />
                                </Link>
                                <Link
                                    class='social-icon-link twitter'
                                    to='/'
                                    target='_blank'
                                    aria-label='Twitter'
                                    >
                                        <i class='fab fa-twitter' />
                                </Link>

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
