import React from "react"

import Container from "../Container"
import CardList from "../CardList"

import * as Styled from "./styled"

const Services = () => (
  <Styled.SectionServices id="services">
    <Container>
      <Styled.SectionTitle>Services</Styled.SectionTitle>
      <Styled.Main>
        <CardList
          icon="Github"
          title="Web Applications"
          description="Development using the latest technologies in the market"
        >
          <Styled.IconLaptop />
        </CardList>
      </Styled.Main>
    </Container>
  </Styled.SectionServices>
)

export default Services
