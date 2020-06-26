import styled from "styled-components"
import media from "styled-media-query"

export const Header = styled.div`
  /* position: relative; */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;

  padding: 2.3rem;
  color: white;
  background-color: #343a40;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;

  a {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
  }
`
export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.nav`
  ul {
    float: right;
  }

  ul li {
    display: inline-block;
    float: left;
  }

  ul li:not(:first-child) {
    margin-left: 48px;
  }

  ul li:last-child {
    margin-right: 24px;
  }

  ul li a {
    display: inline-block;
    outline: none;
    color: white;
    text-transform: uppercase;
    text-decoration: none !important;
    font-size: 15px;
    letter-spacing: 1.2px;
    font-weight: 601;
    transition: 0.7s;
  }

  ul li a:hover {
    text-decoration: none;
    color: #f2769f;
  }

  #nav:checked + .nav-btn {
    transform: rotate(45deg);
  }

  #nav:checked + .nav-btn i {
    background: #000;
    transition: transform 0.2s ease;
  }

  #nav:checked + .nav-btn i:nth-child(1) {
    transform: translateY(6px) rotate(180deg);
  }

  #nav:checked + .nav-btn i:nth-child(2) {
    opacity: 0;
  }

  #nav:checked + .nav-btn i:nth-child(3) {
    transform: translateY(-7px) rotate(90deg);
  }

  #nav:checked ~ .nav-wrapper {
    z-index: 9990;
    opacity: 1;
  }

  #nav:checked ~ .nav-wrapper ul li a {
    opacity: 1;
    transform: translateX(0);
  }

  ${media.lessThan("medium")`
    
    .nav-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: #fff;
      opacity: 0;
      transition: all 0.2s ease;
    }

    .nav-wrapper a {
      color: black;
      display: none;
    }

    .nav-wrapper ul {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }

    .nav-wrapper ul li {
      display: block;
      float: none;
      width: 100%;
      text-align: right;
      margin-bottom: 10px;
    }

    .nav-wrapper ul li:nth-child(1) a {
      transition-delay: 0.2s;
    }

    .nav-wrapper ul li:nth-child(2) a {
      transition-delay: 0.3s;
    }

    .nav-wrapper ul li:nth-child(3) a {
      transition-delay: 0.4s;
    }

    .nav-wrapper ul li:nth-child(4) a {
      transition-delay: 0.5s;
    }

    .nav-wrapper ul li:not(:first-child) {
      margin-left: 0;
    }

    .nav-wrapper ul li a {
      padding: 10px 24px;
      opacity: 0;
      color: #000;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1.2px;
      transform: translateX(-20px);
      transition: all 0.2s ease;
    }

    .nav-btn {
      position: fixed;
      right: 10px;
      top: 18px;
      display: block;
      width: 48px;
      height: 48px;
      cursor: pointer;
      z-index: 9999;
      border-radius: 50%;
    }

    .nav-btn i {
      display: block;
      width: 32px;
      height: 3px;
      background: white;
      border-radius: 2px;
      margin-left: 4px;
    }

    .nav-btn i:nth-child(1) {
      margin-top: 16px;
    }

    .nav-btn i:nth-child(2) {
      margin-top: 4px;
      opacity: 1;
    }

    .nav-btn i:nth-child(3) {
      margin-top: 4px;
    }
  `}
`

export const Input = styled.input`
  display: none;
`
