import styled from "styled-components"
import media from "styled-media-query"

export const Footer = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: justify;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  padding: 3rem;

  color: white;
  background-color: #343a40;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  background-color: #343a40;
  color: white;

  a {
    color: white;
  }
  div a:nth-child(n + 2) {
    margin-left: 2rem;
  }
  div a:hover {
    color: #f2769f;
  }
`

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan("medium")`
    justify-content: center;
    flex-direction: column-reverse;
  `}
`

export const P = styled.p`
  font-size: 14px;
`
