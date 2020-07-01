module.exports = {
  siteMetadata: {
    title: `Jonathan Cardoso`,
    author: `@jonathanccardoso`,
    siteUrl: `https://jonathanccardoso.netlify.app/`,
    description: `Full Stack development. Living and learning!.`,
    social: {
      linkedinLink: `https://www.linkedin.com/in/jonathanccardoso/`,
      githubLink: `https://github.com/jonathanccardoso`,
      mediumLink: `https://medium.com/jonathanccardoso`,
      devtoLink: `https://dev.to/jonathanccardoso/`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/assets`,
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jonathanccardoso`,
        short_name: `jonathanccardoso`,
        start_url: `/`,
        background_color: `#343a40`,
        theme_color: `#343a40`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-icon.png`,
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-105149098-2",
        head: false
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
  ],
}
