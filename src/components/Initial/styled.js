import styled from "styled-components"

import media from "styled-media-query"

import img from "../../../content/assets/background-portfolio.jpg"

export const SectionInitial = styled.section.attrs(props => ({
  id: props.id,
}))`
  background: url(${img});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 8rem 1rem;
  color: white;
  text-align: center;
  height: 100vh;

  ${media.lessThan("medium")`
    height: 85vh;
  `}
`

export const ContainerInitial = styled.div`
  max-width: 40rem;
  width: 100%;
  /* padding-right: 15px;
  padding-left: 15px; */
  padding: 1rem;

  position: relative;
  margin-left: auto;
  margin-right: auto;
`

export const Title = styled.h1`
  color: #f2769f;
  font-size: 3.5rem;
  padding: 2rem;
`

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 300;

  /* animations for this purpose type writter */
  ::after {
    content: "|";
    margin-left: 5px;
    opacity: 1;
    animation: cursorEffect 0.7s infinite;
  }

  @keyframes cursorEffect {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`

export const Button = styled.a`
  margin-top: 2rem;
  background-image: none;

  background-color: #343a40;
  color: white;

  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.9rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.25rem;

  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:focus,
  &:hover {
    color: #f2769f !important;
    border-color: #f2769f !important;
    background-color: #343a40 !important;
  }
`
