import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Container from "../Container"
import * as Styled from "./styled"

const Header = ({ siteTitle }) => {
  const [selectedMenu, setSelectedMenu] = useState(true)

  function handleSelectMenu() {
    setSelectedMenu(!selectedMenu)
    console.log("selectedMenu", selectedMenu)
  }

  useEffect(() => {
    const labelNav = document.querySelector("label#labelNav")
    const links = document.querySelectorAll("nav > .nav-wrapper > ul > li > a")

    const linksA = document.querySelectorAll(".nav-wrapper a")

    for (let x = 0; x < links.length; x++) {
      links[x].onclick = function () {
        labelNav.click()
      }
    }

    let i = true
    labelNav.addEventListener("click", () => {
      linksA.forEach(function (text) {
        text.style.display = "block"
      })

      if (i) {
        document.querySelector("body").style.overflowY = "hidden"
        i = false
      } else {
        document.querySelector("body").style.overflowY = "initial"
        i = true
      }
    })
  }, [])

  return (
    <Styled.Header>
      <Container>
        <Styled.Main>
          <Link to="/">{siteTitle}</Link>
          <Styled.Nav>
            <Styled.Input type="checkbox" id="nav" />
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
                {/* <li>
                <Link to="blog.html">Blog</Link>
              </li> */}
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
