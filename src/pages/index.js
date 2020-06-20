import React from "react"

import Layout from "../components/Layout"
import Initial from "../components/Initial"
import About from "../components/About"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Initial />
    <About />
    <Services />
    {/* <Portfolio /> */}
  </Layout>
)

export default Index
