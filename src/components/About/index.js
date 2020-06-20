import React from "react"

import * as Styled from "./styled"
import Container from "../Container"

const About = () => (
  <Styled.SectionAbout id="about">
    <Container>
      <Styled.Title>About</Styled.Title>
      <Styled.ScrollProfile>
        <Styled.ProfileImage>
          <img
            alt="Profile Jonathan"
            src="../../images/profile.jpg"
          />
        </Styled.ProfileImage>
        <Styled.Profile>
          <Styled.ProfileTitle>PROFILE</Styled.ProfileTitle>
          <p>My name is Jonathan Cardoso.</p>
          <p>I'm 21 years old. I'm an Systems Analyst.</p>
          <p>
            Since the age of 12 I was already interested in codes. But the hobby
            was stronger and becoming a profession!
          </p>
          <p>
            I started studying IT since 2014, with a course in Internet
            Computing Technician and later I'm studying SADT, both of which were
            not done at the IFRN.
          </p>
          <Styled.ProfileTitle>PROFESSIONAL</Styled.ProfileTitle>
          <p>
            I work as a web developer also to the business branch when the
            freelancer.
          </p>
          <p>
            I worked in advertising agencies, academic institutions and
            development companies. And from the beginning I developing the
            front-end and back-end.
          </p>
          <p>
            Always taking each obstacle as a professional learning as life
            experience.
          </p>
        </Styled.Profile>
      </Styled.ScrollProfile>
    </Container>
  </Styled.SectionAbout>
)

export default About
