import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    const {name,flags,population,area,cca3} = country ;

    const [visited,setVisisted] = useState(false);

    const handleVisited = () => {
        setVisisted(true);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area/1000} Km <sup>2</sup></p>
            <p>Code : {cca3}</p>
            {visited ? "I have visited this country" : 
            <button onClick={handleVisited}>Going</button>}
        </div>
    );
};

export default Country;