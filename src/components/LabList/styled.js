import styled from "styled-components"
import media from "styled-media-query"

import Img from "gatsby-image"

export const Image = styled(Img).attrs(props => ({
  alt: props.title,
}))`
  width: 55% !important;
  max-width: 100%;
  height: auto;
`

export const Link = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: "_blank",
  rel: "noopener noreferrer",
}))``

export const BoxShadowItem = styled.div`
  text-align: center;
  margin: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);

  &:focus,
  &:hover {
    cursor: pointer;
  }
`

export const BoxShadowItemBody = styled.div`
  padding: 1.25rem;
  color: #343a40;

  &:focus,
  &:hover {
    color: #f2769f;
  }
`

export const BoxShadowItemDescription = styled.p``

export const BoxShadowItemYear = styled.small``
