import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const{name, flag}=props.country;
    return (
        
           
                <div className="shadow  p-3  ">
             <img className="w-100" src={flag} alt=""/>   
            <p>{name}</p>
            
            <Link to={`/country/${name}`}><button className="btn btn-primary">More About</button></Link>
            
        </div>
          
            
    );
};

export default Country;