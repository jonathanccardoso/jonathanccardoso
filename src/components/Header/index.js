import PropTypes from "prop-types"
import React, { useEffect } from "react"

import Container from "../Container"
import * as Styled from "./styled"

const Header = ({ siteTitle }) => {
  useEffect(() => {
    const labelNav = document.querySelector("label#labelNav")
    const links = document.querySelectorAll("nav > .nav-wrapper > ul > li > a")

    const linksA = document.querySelectorAll(".nav-wrapper a")

    for (let x = 0; x < links.length; x++) {
      links[x].onclick = function () {
        labelNav.click()
      }
    }

    // let i = true
    labelNav.addEventListener("click", () => {
      // console.log("labelNav", labelNav)
      linksA.forEach(function (text) {
        text.style.display = "block"
      })

      // if (i) {
      //   document.querySelector("body").style.overflowY = "hidden"
      //   i = false
      // } else {
      //   document.querySelector("body").style.overflowY = "initial"
      //   i = true
      // }
    })
  }, [])

  return (
    <Styled.Header>
      <Container>
        <Styled.Main>
          <a href="/">{siteTitle}</a>
          <Styled.Nav>
            <Styled.Input type="checkbox" id="nav" />
            <label htmlFor="nav" className="nav-btn" id="labelNav">
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
              </ul>
            </div>
          </Styled.Nav>
        </Styled.Main>
      </Container>
    </Styled.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
