import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactGA from 'react-ga';

import * as Styled from './styled';

const trackClick = item => {
  ReactGA.event({
    category: 'Social',
    action: 'click',
    label: `Social - ${item}`,
  });
};

const Social = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            linkedinLink
            githubLink
            mediumLink
            devtoLink
          }
        }
      }
    }
  `);

  return (
    <Styled.Social>
      <Styled.SocialItem href={site.siteMetadata.social.githubLink} title="Github" onClick={() => trackClick('Github')}>
        <Styled.SocialGithub />
      </Styled.SocialItem>
      <Styled.SocialItem
        href={site.siteMetadata.social.linkedinLink}
        title="LinkedIn"
        onClick={() => trackClick('LinkedIn')}
      >
        <Styled.SocialLinkedin />
      </Styled.SocialItem>
      <Styled.SocialItem href={site.siteMetadata.social.mediumLink} title="Medium" onClick={() => trackClick('Medium')}>
        <Styled.SocialMedium />
      </Styled.SocialItem>
      <Styled.SocialItem href={site.siteMetadata.social.devtoLink} title="Dev.to" onClick={() => trackClick('Dev.to')}>
        <Styled.SocialDev />
      </Styled.SocialItem>
    </Styled.Social>
  );
};

export default Social;
