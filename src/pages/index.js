import React from "react"

import Layout from "../components/Layout"
import Initial from "../components/Initial"
import About from "../components/About"
import Services from "../components/Services"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Initial />
    <About />
    <Services />
  </Layout>
)

export default IndexPage
