import React from "react"

import * as Styled from "./styled"
import Container from "../Container"
import Card from "../Card"

const Services = () => (
  <Styled.SectionServices id="services">
    <Container>
      <Styled.SectionTitle>Services</Styled.SectionTitle>
      <Styled.Main>
        <Card>
          <i
            class="fa fa-laptop fa-4x social"
            title="websites and web applications"
          ></i>
          <h4>Web Applications</h4>
          <span>Development using the latest technologies in the market.</span>
        </Card>

        <div class="card">
          <i
            class="fa fa-wrench fa-4x social"
            title="SEO and website updates"
          ></i>
          <h4>SEO and Website Updates</h4>
          <span>The priority in making it accessible to search engines.</span>
        </div>

        <div class="card">
          <i class="fa fa-rocket fa-4x social" title="create landing pages"></i>
          <h4>Landing Pages</h4>
          <span>
            Development of highly optimized pages, generating conversions for
            your company.
          </span>
        </div>
        <div class="card">
          <i class="fa fa-server fa-4x social" title="web hosting"></i>
          <h4>Web Hosting</h4>
          <span>
            Your site hosted on the best data centers. We guarantee security and
            stability.
          </span>
        </div>
      </Styled.Main>
    </Container>
  </Styled.SectionServices>
)

export default Services
