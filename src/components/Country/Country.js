import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, flag } = props.country;
    return (


        <div className="shadow w-100 h-100 p-4  rounded ">
            <img className="w-100 h-50" src={flag} alt="" />
            <h4 className="p-2 mt-4">{name}</h4>

            <Link to={`/country/${name}`}><button className="btn btn-primary"> <i class="fas fa-external-link-square-alt"></i> More About</button></Link>

        </div>


    );
};

export default Country;