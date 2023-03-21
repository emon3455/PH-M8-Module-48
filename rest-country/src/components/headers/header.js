import React from 'react';
import './header.css'

const Headers = () => {
    return (
        <div className='header-container'>
            <h2>This is the header</h2>
            <nav>
                <a href="./home">Home</a>
                <a href="./about">About</a>
                <a href="./contact">Contact</a>
            </nav>
        </div>
    );
};

export default Headers;