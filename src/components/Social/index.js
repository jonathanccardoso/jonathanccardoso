import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactGA from "react-ga"

import * as Styled from "./styled"

const trackClick = item => {
  ReactGA.event({
    category: "Social",
    action: "click",
    label: `Social - ${item}`,
  })
}

const Social = () => {
  const { site } = useStaticQuery(
    graphql`
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
    `
  )

  return (
    <Styled.Social>
      <Styled.SocialItem
        href={site.siteMetadata.social.githubLink}
        title="Github"
        onClick={() => trackClick("Github")}
      >
        <Styled.SocialGithub />
      </Styled.SocialItem>
      <Styled.SocialItem
        href={site.siteMetadata.social.linkedinLink}
        title="LinkedIn"
        onClick={() => trackClick("LinkedIn")}
      >
        <Styled.SocialLinkedin />
      </Styled.SocialItem>
      <Styled.SocialItem
        href={site.siteMetadata.social.mediumLink}
        title="Medium"
        onClick={() => trackClick("Medium")}
      >
        <Styled.SocialMedium />
      </Styled.SocialItem>
      <Styled.SocialItem
        href={site.siteMetadata.social.devtoLink}
        title="Dev.to"
        onClick={() => trackClick("Dev.to")}
      >
        <Styled.SocialDev />
      </Styled.SocialItem>
    </Styled.Social>
  )
}

export default Social

// import React from "react"

// import * as Styled from "./styled"

// const Social = () => (
//   <div>
//     <a
//       class="p-2"
//       href="https://fa-github.com/jonathanccardoso"
//       target="_blank"
//     >
//       <i
//         class="fa fa-github fa-2x social"
//         title="https://github.com/jonathanccardoso"
//       ></i>
//     </a>
//     <a
//       class="p-2"
//       href="https://www.linkedin.com/in/jonathanccardoso/"
//       target="_blank"
//     >
//       <i class="fa fa-linkedin fa-2x social" title="linkedin"></i>
//     </a>
//     <a
//       class="p-2 facebook"
//       href="http://www.facebook.com/jonathanccardoso"
//       target="_blank"
//     >
//       <i class="fa fa-facebook fa-2x social" title="facebook"></i>
//     </a>
//     <a class="p-2" href="https://medium.com/jonathanccardoso" target="_blank">
//       <i class="fab fa-medium-m fa-2x social" title="medium"></i>
//     </a>
//     <a class="p-2" href="https://dev.to/jonathanccardoso" target="_blank">
//       <i class="fab fa-dev fa-2x social" title="dev.to"></i>
//     </a>
//   </div>
// )

// export default Social
