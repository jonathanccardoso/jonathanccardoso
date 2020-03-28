import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Avatar = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "profile.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 48, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return <Avatar fluid={image.childImageSharp.fluid} />;
};

export default Avatar;
