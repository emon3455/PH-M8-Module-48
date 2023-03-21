import React from 'react';
import './header.css'

const Headers = () => {
    return (
        <div className='header-container'>
            <h2 className='bg-primary-subtle p-2'>Welcome to our Rest Country API Projects</h2>
            <nav>
                <a href="./home">Home</a>
                <a href="./about">About</a>
                <a href="./contact">Contact</a>
            </nav>
        </div>
    );
};

export default Headers;