import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 sticky-top">
      <div className="container-fluid">
        <Link to="/"><button type="button" className="btn btn-light"><h3>Bookstore CMS</h3></button></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-5">
            <li className="nav-item m-2">
              <Link to="/"><button type="button" className="btn btn-light"><p>BOOKS</p></button></Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/category"><button type="button" className="btn btn-light"><p>CATEGORIES</p></button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
