import React, { useState } from 'react';
import searchBox from '../searchBox/searchBox';
const NavBer = () => {
  


    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand fs-3 text-primary fw-bold" href="/home"> <i class="fas fa-globe"></i> Country Info Book</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/home">Country</a>
        </li>
      </ul>
     <searchBox></searchBox>
      
    </div>
  </div>
</nav>
     
    );
};

export default NavBer;