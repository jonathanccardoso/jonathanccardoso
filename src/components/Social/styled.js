import styled from "styled-components"
import media from "styled-media-query"

import { Github, LinkedinIn, MediumM, Dev } from "styled-icons/fa-brands"

const Icon = `
  display: block;
  height: 2rem;
  width: 2rem;

  ${media.lessThan("medium")`
    margin: 2rem;
  `}
`

export const Social = styled.div`
  display: flex;
  
  ${media.lessThan("medium")`
    padding-bottom: 1rem;
  `}
`

export const SocialItem = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  align-items: center;
  display: inline-flex;
  will-change: color;
`

export const SocialGithub = styled(Github)`
  ${Icon}
`

export const SocialLinkedin = styled(LinkedinIn)`
  ${Icon}
`

export const SocialMedium = styled(MediumM)`
  ${Icon}
`

export const SocialDev = styled(Dev)`
  ${Icon}
`
