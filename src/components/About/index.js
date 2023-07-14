import React, { useState } from 'react';

import Container from '../Container';
import * as Styled from './styled';

const About = () => {
  const birthdayYear = 1998;
  const [age] = useState(new Date().getFullYear() - birthdayYear);

  return (
    <Styled.SectionAbout id="about">
      <Container>
        <Styled.Title>About</Styled.Title>
        <Styled.ScrollProfile>
          <Styled.Profile>
            <Styled.ProfileTitle>PROFILE</Styled.ProfileTitle>
            <Styled.ProfileDescription>
              My name is Jonathan Cardoso. I'm {age} years old. I'm an Systems Analyst.
            </Styled.ProfileDescription>
            <Styled.ProfileDescription>
              I started studying IT since 2014, with a course in Internet Computing Technician and later I'm studying
              SADT, both of which were not done at the IFRN.
            </Styled.ProfileDescription>
            <Styled.ProfileTitle>PROFESSIONAL</Styled.ProfileTitle>
            <Styled.ProfileDescription>
              I work as a full stack developer where I have also worked with applications and microservices working with
              payment APIs and crawlers.
            </Styled.ProfileDescription>
            <Styled.ProfileDescription>
              I have experience in advertising agencies, academic institutions, and development companies.
            </Styled.ProfileDescription>
            <Styled.ProfileDescription>
              I always face each obstacle as professional learning as a life experience, in continuous learning.
            </Styled.ProfileDescription>
          </Styled.Profile>
        </Styled.ScrollProfile>
      </Container>
    </Styled.SectionAbout>
  );
};

export default About;
