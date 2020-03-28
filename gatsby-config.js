module.exports = {
  siteMetadata: {
    title: `Jonathan Cardoso - Full Stack development`,
    author: `Jonathan Cardoso`,
    description: `Full Stack development. Living and learning!.`,
    siteUrl: `https://jonathanccardoso.netlify.com/`,
    social: { 
      linkedinLink: `https://www.linkedin.com/in/jonathanccardoso/`,
      githubLink: `https://github.com/jonathanccardoso`,
      codepenLink: `https://codepen.io/jonathanccardoso`,
      emailLink: `jonathan99moura@hotmail.com`,
      facebookLink: `https://facebook.com/jonathanccardoso`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
