import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Container from "../Container"
import * as Styled from "./styled"

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Container>
      <Styled.Main>
        <Link to="/">{siteTitle}</Link>
        <Styled.Nav>
          <input type="checkbox" id="nav" className="hidden" />
          <label for="nav" className="nav-btn" id="labelNav">
            <i></i>
            <i></i>
            <i></i>
          </label>
          <div className="nav-wrapper">
            <ul>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#services">Services</Link>
              </li>
              <li>
                <Link to="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="blog.html">Blog</Link>
              </li>
            </ul>
          </div>
        </Styled.Nav>
      </Styled.Main>
    </Container>
  </Styled.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
