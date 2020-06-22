import React from "react"

import * as Styled from "./styled"
import Container from "../Container"
import CardList from "../CardList"

const Portfolio = () => (
  <Styled.SectionPortfolio id="portfolio">
    <Container>
      <Styled.SectionTitle>Portfolio</Styled.SectionTitle>
      <Styled.Main>
        <CardList
          image="mobister"
          description="Specialist in design and production of digital solutions, Mobister develops products focused on UX."
          year="2018"
        />
      </Styled.Main>
    </Container>
  </Styled.SectionPortfolio>
)

export default Portfolio
