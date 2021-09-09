import React from 'react';
import {Link} from 'react-router-dom';


function NavbarComponent(){

    return(

        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
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
            <li class="nav-item active">
              <Link className="nav-link" to="/"
                >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/posts">Posts</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/city">City</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

          </ul>
        </div>
      </nav>

    
    );

}


export default NavbarComponent;