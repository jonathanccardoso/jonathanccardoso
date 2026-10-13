---
title: "How to Develop a Portfolio using Gatsby"
description: "Making a portfolio more performant with Gatsby, Styled Components, Netlify and GraphQL."
pubDate: 2020-07-13
lang: en
category: Web
tags: [gatsby, javascript, netlify, seo]
canonicalUrl: https://dev.to/jonathanccardoso/how-to-develop-a-portfolio-using-gatsby-2fjn
draft: false
---

### Making it more performance, using: Styled Components, Netlify, GraphQL, …

> Gatsby is a React-based static website generator. It offers advantages such as performance and SEO components!

## 2018

In 2018, I wanted to apply some knowledge, and thus learn more about components, in addition to wanting to have my own website. So I elaborated using these technologies:

* [Bootstrap v4](https://getbootstrap.com/)

* [Font Awesome](https://fontawesome.com/)

* Javascript

* CSS

So, over time there was a need to apply new development stacks, which made me think about refactoring.

## New website

With the rise of javascript frameworks, in 2020, I refactored using Gatsby. Along with some specific tools to increase performance, the main ones are listed below:

* [Gatsby](https://www.gatsbyjs.org/)

* [GraphQL](https://graphql.org/)

* [Styled Components](https://www.styled-components.com/)

* [Netlify](https://www.netlify.com/)

![Screenshot of the website](https://cdn-images-1.medium.com/max/2708/1*O92ylDjH7BUebikE9xk83g.png)*Screenshot of the website*

## Gatsby

An SSG (Static Site Generator), based on React that uses GraphQL for content consumption.

As already mentioned, one of its main advantages is to generate static files in the build, becoming a great ally to use SEO resources, having integrations through plugins with [Analytics](https://www.gatsbyjs.org/docs/adding-analytics/) and [Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/). And it has multiple plugins.

![How Gatsby works on Docs Gatsby](https://cdn-images-1.medium.com/max/2000/1*lTP8mYYrDTVQ0qkxa8aRGQ.png)*How Gatsby works on Docs Gatsby*

## GraphQL

Created with the aim of facilitating data manipulation, where you make queries describing what type of data you need and it returns exactly the respective values.

Together with Gatsby, we inform what data a specific component will need. Then, the Gatsby receive this data when that component is rendered.

## Styled Components

CSS-in-JS solution, which takes advantage of current componentization methods to create components in a way that reduces style conflicts, for example:

    // Static object
    const Box = styled.div({
      background: 'palevioletred',
      height: '50px',
      width: '50px'
    });

    // Adapting based on props
    const PropsBox = styled.div(props => ({
      background: props.background,
      height: '50px',
      width: '50px'
    }));

    render(
      <div>
        <Box />
        <PropsBox background="blue" />
      </div>
    );

## Netlify

It’s a complete and automated platform for hosting projects “free for personal projects”, where it already has continuous deployment and several advanced features.

In the continuous deployment process, each build performed can be accessed separately through a generated URL.

If you want to know more about the source code, just access [github](https://github.com/jonathanccardoso/jonathanccardoso).

<hr />

I hope you enjoyed the content! If you have suggestions and/or criticisms comment below. Bye! 🖐🏽
