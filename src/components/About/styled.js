import styled from "styled-components"

import media from "styled-media-query"

export const SectionAbout = styled.section.attrs(props => ({
  id: props.id,
}))`
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: justify;
`

export const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.75rem;
  font-weight: 400;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
`

export const ScrollProfile = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${media.lessThan("medium")`
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `}
`

export const ProfileImage = styled.div`
  img {
    border-radius: 50%;
    width: 90%;
  }
`

export const Profile = styled.div`
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 58.333333%;
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
`

export const ProfileTitle = styled.p`
  text-align: justify;
  font-weight: bold;
  font-size: 15px;
`
