import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountry] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all'
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h2 className="">Country : {countries.length} </h2>
            <div className="country-container">
                
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            
            </div>
        </div>
    );
};

export default Countries;