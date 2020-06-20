import styled from "styled-components"

import media from "styled-media-query"

export const SectionServices = styled.section.attrs(props => ({
  id: props.id,
}))`
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: justify;
`

export const SectionTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.75rem;
  font-weight: 400;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
`

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  ${media.lessThan("medium")`
    justify-content: center;
  `}
`

export const CardList = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
  color: #292b2c;
  background: #f2f2f2;
  transition: all 0.2s linear;
  overflow: hidden;
  max-width: 29rem;

  &:focus,
  &:hover {
    cursor: pointer;
    box-shadow: 2px 8px 100px rgba(0, 0, 0, 0.15);
    transform: translate3D(0, -8px, 0);
  }
`
