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
          title="Web Applications"
          description="Development using the latest technologies in the market"
        >
          <Styled.IconLaptop />
        </CardList>
        <CardList
          title="SEO and Website Updates"
          description="The priority in making it accessible to search engines"
        >
          <Styled.IconTools />
        </CardList>
        <CardList
          title="Landing Pages"
          description="Development of highly optimized pages, generating conversions for your company"
        >
          <Styled.IconRocket />
        </CardList>
        <CardList
          title="Web Hosting"
          description="Your site hosted on the best data centers. We guarantee security and stability"
        >
          <Styled.IconServer />
        </CardList>
      </Styled.Main>
    </Container>
  </Styled.SectionServices>
)

export default Services
