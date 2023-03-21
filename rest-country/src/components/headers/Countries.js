import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countrys, setCountrys] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=> res.json())
        .then(data=> setCountrys(data))
    },[])

    return (
        <div>
            <h2>All Country Data loaded {countrys.length}</h2>
        </div>
    );
};

export default Countries;