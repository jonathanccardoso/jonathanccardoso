import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import * as Styled from './styled';
import FadeEffect from '../FadeEffect';

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Styled.Image fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const Initial = () => {
  useEffect(() => {
    function typeWritter(text) {
      if (text.innerHTML) {
        const textArray = text.innerHTML.split('');
        text.innerHTML = '';
        if (textArray.length) {
          textArray.forEach((letter, index) => {
            setTimeout(function () {
              text.innerHTML += letter;
            }, 75 * index);
          });
        }
      }
    }

    const p = document.querySelector('p');
    typeWritter(p);
  }, []);

  return (
    <Styled.SectionInitial id="initial">
      <Styled.ContainerInitial>
        <FadeEffect>
          <Profile />
        </FadeEffect>
        <FadeEffect>
          <Styled.Description>
            I have been working as a Systems Analyst since 2017. I am passionate about physical activities and
            enthusiastic about technology.
          </Styled.Description>
          <Styled.Button>
            <a href="#about">
              <Styled.ChevronDownIcon />
            </a>
          </Styled.Button>
        </FadeEffect>
      </Styled.ContainerInitial>
    </Styled.SectionInitial>
  );
};

export default Initial;
