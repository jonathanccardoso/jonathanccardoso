import styled from "styled-components"

export const Header = styled.div`
  position: relative;
  padding: 1.9rem;
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

export const Nav = styled.div`
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
`
