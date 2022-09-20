import React from 'react';
import './Button.css';
import { Link, useHref } from 'react-router-dom';
import Footer from './Footer';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

const scrollHeight = document.body.scrollHeight;



export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={()=> window.scrollTo(0, scrollHeight)} type={type}>
                {children}
            </button>
        </Link>
    )
};
