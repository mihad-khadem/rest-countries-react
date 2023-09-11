import { useState } from 'react';
import './country.css';
const Country = ({country}) => {
    const {name, flags, population, area, capital, languages} = country
    console.log(country);

    const [visited, setVisited] =useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className="box">
            <img src={flags.png} alt="flag" />
            <h2>Name : {name.common}</h2>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            {/* <h3>Language: {languages}</h3> */}
            <p>Capital : {capital}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit Soon'}</button>
            
        
        </div>
    );
};

export default Country;