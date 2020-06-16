import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"

import Container from "components/Container"
import * as Styled from "./styled"

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Container>
      <Styled.Main>
        <Link to="/">Jonathan Cardoso</Link>
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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
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
