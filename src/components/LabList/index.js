import React from 'react';
import ReactGA from 'react-ga';
import { graphql, useStaticQuery } from 'gatsby';

import * as Styled from './styled';

const trackClickPortfolio = item => {
  ReactGA.event({
    category: 'Portfolio',
    action: 'click',
    label: `Portfolio - ${item}`,
  });
};

const PortfolioImg = ({ imageSrc }) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "portfolio" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = images.edges.find(image => {
    return image.node.relativePath === imageSrc.relativePath;
  });

  return <Styled.Image fluid={image.node.childImageSharp.fluid} />;
};

const LabList = ({ content }) => {
  return (
    <>
      {content
        ? content.map(({ node }) => (
            <Styled.BoxShadowItem key={node.id}>
              <Styled.Link href={node.link} onClick={() => trackClickPortfolio}>
                <PortfolioImg imageSrc={node.imageSrc} />
                <Styled.BoxShadowItemBody>
                  <Styled.BoxShadowItemDescription>{node.description}</Styled.BoxShadowItemDescription>
                </Styled.BoxShadowItemBody>
              </Styled.Link>
              <Styled.BoxShadowItemFooter>{node.year}</Styled.BoxShadowItemFooter>
            </Styled.BoxShadowItem>
          ))
        : 'Loading'}
    </>
  );
};

export default LabList;
