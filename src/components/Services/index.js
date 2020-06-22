import React from "react"

import * as Styled from "./styled"
import Container from "../Container"
import CardList from "../CardList"

const Services = () => (
  <Styled.SectionServices id="services">
    <Container>
      <Styled.SectionTitle>Services</Styled.SectionTitle>
      <Styled.Main>
        <CardList
          icon="Github"
          title="Web Applications"
          description="Development using the latest technologies in the market"
        />
        <CardList
          icon="laptop"
          title="Web Applications"
          description="Development using the latest technologies in the market"
        />
        <CardList
          icon="laptop"
          title="Web Applications"
          description="Development using the latest technologies in the market"
        />
        <CardList
          icon="laptop"
          title="Web Applications"
          description="Development using the latest technologies in the market"
        />
      </Styled.Main>
    </Container>
  </Styled.SectionServices>
)

export default Services
