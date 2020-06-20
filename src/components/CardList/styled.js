import styled from "styled-components"
import media from "styled-media-query"

import { Github, LinkedinIn, MediumM, Dev } from "styled-icons/fa-brands"

const Icon = `
  display: block;
  height: 4rem;
  width: 4rem;
  margin-bottom: 1rem;

  ${media.lessThan("medium")`
    margin: 2rem;
  `}
`

export const CardItemIcon = styled(Github).attrs(props => ({
  title: props.title,
  icon: props.icon,
}))`
  ${Icon}
`

export const CardItemTitle = styled.h4`
  font-size: 1.5rem;
`

export const CardItemDescription = styled.p``

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
