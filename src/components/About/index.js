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
            src="../../../content/assets/profile.jpg"
          />
        </Styled.ProfileImage>
        <Styled.Profile>
          <Styled.ProfileTitle>PROFILE</Styled.ProfileTitle>
          <Styled.ProfileDescription>My name is Jonathan Cardoso.</Styled.ProfileDescription>
          <Styled.ProfileDescription>I'm 21 years old. I'm an Systems Analyst.</Styled.ProfileDescription>
          <Styled.ProfileDescription>
            Since the age of 12 I was already interested in codes. But the hobby
            was stronger and becoming a profession!
          </Styled.ProfileDescription>
          <Styled.ProfileDescription>
            I started studying IT since 2014, with a course in Internet
            Computing Technician and later I'm studying SADT, both of which were
            not done at the IFRN.
          </Styled.ProfileDescription>
          <Styled.ProfileTitle>PROFESSIONAL</Styled.ProfileTitle>
          <Styled.ProfileDescription>
            I work as a web developer also to the business branch when the
            freelancer.
          </Styled.ProfileDescription>
          <Styled.ProfileDescription>
            I worked in advertising agencies, academic institutions and
            development companies. And from the beginning I developing the
            front-end and back-end.
          </Styled.ProfileDescription>
          <Styled.ProfileDescription>
            Always taking each obstacle as a professional learning as life
            experience.
          </Styled.ProfileDescription>
        </Styled.Profile>
      </Styled.ScrollProfile>
    </Container>
  </Styled.SectionAbout>
)

export default About
