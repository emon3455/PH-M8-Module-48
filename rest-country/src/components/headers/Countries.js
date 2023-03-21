import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Countries.css'

const Countries = () => {
    const [countrys, setCountrys] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=> res.json())
        .then(data=> setCountrys(data))
    },[])

    return (
        <div>
            <h2>Totall Country {countrys.length}</h2>
            <div className="country-container">
                {
                    countrys.map(country=> <SingleCountry country={country} key={country.cca3}></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default Countries;