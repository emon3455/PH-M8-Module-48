import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    const {name,area,population,region,flags} = props.country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Region: {region}</h4>
            <p>Area: {area}</p>
            <p>Poppulation: {population}</p>
        </div>
    );
};

export default SingleCountry;