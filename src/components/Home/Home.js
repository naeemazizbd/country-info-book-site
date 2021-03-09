import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'
const Home = () => {
    const [countries,setCountries]= useState([]);
    useEffect(()=>{
        fetch ('https://restcountries.eu/rest/v2/all')
        .then (response=>response.json())
        .then (data=> setCountries(data));

    },[])
    return (
         
              <div className="countries">
              {
                   countries?.map(country=>
                    <Country country={country}></Country> )
               }
              </div>
    );
};

export default Home;