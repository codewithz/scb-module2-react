import React from 'react';
import {Link} from 'react-router-dom';


function NavigationComponent(){

    return(

        <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <a class="navbar-brand" href="#">Standard Chartered</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
           
            <li class="nav-item">
              <Link className="nav-link" to="/ucone">UseCaseOne</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/module2">Module 2</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/uctwo">Use Case Two</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/routing">Routing</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/material">Material UI</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/toastify">Toastify</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/validation">Validation-JOI</Link>
            </li>

          </ul>
        </div>
      </nav>

    
    );

}


export default NavigationComponent;