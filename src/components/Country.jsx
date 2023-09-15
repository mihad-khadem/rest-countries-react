import { useState } from 'react';
import './country.css';
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, capital, languages} = country
    // console.log(country);

    const [visited, setVisited] =useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }



    // console.log(handleVisitedCountries);
    return (
        <div className={`country ${visited ? 'visited' : 'box'}`}>
            <img src={flags.png} alt="flag" />
            <h2>Country : {name.official}</h2>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            {/* <h3>Language: {languages}</h3> */}
            <p>Capital : {capital}</p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit Soon'}</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            
        
        </div>
    );
};

export default Country;