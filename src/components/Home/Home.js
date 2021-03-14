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
         <div className="mt-3">
             
             <div className="row">
               { 
                   countries?.map(country=>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <Country country={country}></Country>
                    </div>
                    
                    )
               }
               
              
              </div>
         </div>
    );
};

export default Home;