import React from 'react';

import showCurrentYear from '../../utils/ShowCurrentYear';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center text-muted" id="footer-bg">
            <span>© {showCurrentYear()}</span> Developed by
            <span className="text-success font-weight-normal">
              &nbsp;Oğuzhan Tohumcu&nbsp;
            </span>
            - Using <i className="fab fa-react" /> React JS &amp; Redux
            integrated with external movies data
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;OMDB API
        </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
