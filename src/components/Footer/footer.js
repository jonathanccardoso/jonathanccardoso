import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { Github, Linkedin, FacebookSquare } from "@styled-icons/boxicons-logos";
import { EmailOutline } from "@styled-icons/evaicons-outline";

import "./footer.css";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SocialLinkQuery {
      site {
        siteMetadata {
          social {
            linkedinLink
            githubLink
            codepenLink
            emailLink
            facebookLink
          }
        }
      }
    }
  `);

  return (
    <footer>
      <div className="icon mt-2 scroll-footer">
        <a
          href={data.site.siteMetadata.social.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <Github size="40" />
        </a>
        <a href="mailto:jonathan99moura@hotmail.com" target="_blank" title="Email">
          <EmailOutline size="40" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathanccardoso/"
          target="_blank"
        >
          <Linkedin size="40" />
        </a>
        <a
          href="http://www.facebook.com/jonathanccardoso"
          target="_blank"
        >
          <FacebookSquare size="40" />
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
