import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            {/* <h1>Hello from countries</h1> */}
            <h1>Visiting Every country of the world!!!!</h1>
            <h3>Available Country: {countries.length}</h3>
            <div className='countries-container'> {
                countries.map(country => <Country country={country}
                    key={country.cca3}></Country>)
            }</div>
            {/* <nav className='navbar'>
                <a href="http:www.google.com">Home</a>
                <a href="http:google.com">About</a>
                <a href="http:google.com">Contact Us</a>
            </nav> */}
        </div>
    );
};

export default Countries;