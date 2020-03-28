import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/blog/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
