import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.css";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <nav>
        <input type="checkbox" id="nav" />
        <label for="nav" className="nav-btn">
          <i></i>
          <i></i>
          <i></i>
        </label>
        <div className="logo">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li>
              <Link to="/about/">about</Link>
            </li>
            <li>
              <Link to="/portfolio/">portfolio</Link>
            </li>
            {/* <li>
              <a href="#services">blog</a>
            </li> */}
            <li>
              <Link to="/links/">links</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
