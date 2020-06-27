import styled from "styled-components"

export const Fade = styled.div.attrs(props => ({
  class: props.className,
}))`
  opacity: ${props => (props.visible ? "1" : "0")};
  transform: ${props => (props.visible ? "none" : "translateY(20vh)")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};

  transition: opacity 1200ms ease-out, transform 600ms ease-out,
    visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;
`
