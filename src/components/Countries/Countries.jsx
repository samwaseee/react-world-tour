import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);

    const handleVisitedCountries = country =>{
        console.log(country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data));
    },[])


    return (
        <div className="main">
            <div>
            <h3>Countries : {countries.length}</h3>
            <div className="countries">
            {
                countries.map(country => <Country key={country.ccn3} handleVisitedCountries = {handleVisitedCountries} country = {country}></Country>)
            }
            </div>
            </div>
            <div>
                <h3>Visited : {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.ccn3}> 
                            {
                                country.name.common
                            }
                            <img src={country.flags.png} alt="" />
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Countries;