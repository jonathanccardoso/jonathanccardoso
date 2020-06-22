import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;
  }
  body {
    font-family: Roboto, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    line-height: 0.5;
  }

  img {
    width: 55%;
  }
  p,
  span {
    font-size: 16px;
    line-height: 1.5;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
  }

  section h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.75rem;
    font-weight: 400;

    margin-top: 2.5rem !important;
    margin-bottom: 2rem !important;
  }

  p {
    margin-top: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: #f2769f;
  }
  button:hover {
    background-color: #7f8386;
  }
`
