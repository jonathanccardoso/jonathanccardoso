import React from "react"

import { Link } from "gatsby"
import * as Styled from "./styled"

const Initial = () => (
  <Styled.SectionInitial id="initial">
    <Styled.ContainerInitial>
      <Styled.Title>Hi!</Styled.Title>
      <Styled.Description>
        I have been working as a Systems Analyst since 2017. I am passionate
        about physical activities and enthusiastic about technology.
      </Styled.Description>
      <Styled.Button>
        <Link to="#about">More About</Link>
      </Styled.Button>
    </Styled.ContainerInitial>
  </Styled.SectionInitial>
)

export default Initial
