import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

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
            <h2>Country : {countries.length} </h2>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;