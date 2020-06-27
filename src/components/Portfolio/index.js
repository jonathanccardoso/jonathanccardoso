import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as Styled from "./styled"
import Container from "../Container"
import LabList from "../LabList"
import FadeEffect from "../FadeEffect"

const portfolioJsonQuery = graphql`
  query {
    allPortfolioJson {
      edges {
        node {
          id
          link
          year
          description
          imageSrc {
            relativePath
          }
        }
      }
    }
  }
`

const Portfolio = () => {
  const data = useStaticQuery(portfolioJsonQuery)

  return (
    <Styled.SectionPortfolio id="portfolio">
      <Container>
        <Styled.SectionTitle>Portfolio</Styled.SectionTitle>
        <FadeEffect>
          <Styled.Main>
            <LabList content={data.allPortfolioJson.edges} />
          </Styled.Main>
        </FadeEffect>
      </Container>
    </Styled.SectionPortfolio>
  )
}
export default Portfolio
