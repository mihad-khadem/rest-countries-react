import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountry] = useState([]);
    const[visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all'
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])


    const handleVisitedCountries = (country) => {
        
        console.log('Add this to your visited country');
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag =>{
        console.log("flag");
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
           <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
                <div className="flag-img-container">
                    {
                        visitedFlags.map(flag => <img src={flag}></img>)
                    }
                </div>
           </div>

            <h2 className="">Country : {countries.length} </h2>
            <div className="country-container">
                
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            
            </div>
        </div>
    );
};

export default Countries;