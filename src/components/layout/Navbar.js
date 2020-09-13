import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-info mb-5">
        <div className="container">
          <div className="navbar-header" id="parent">
            <Link className="navbar-brand text-white text-lg brand-text" id="app-header" to="/">
              MovieSearchListSPA
            </Link>
            <u className="navbar-nav ml-auto text-light d-inline-block">
              <div className="imdb-container">
                <li className="nav-item d-inline-block mr-4" id="imdb-header">
                  <i className="fab fa-imdb fa-5x" id="imdb-logo" />
                </li>
              </div>
              <li className="nav-item d-inline-block mr-4" id="react-header">
                <i className="fab fa-react fa-5x" id="react-logo" />
              </li>
            </u>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
