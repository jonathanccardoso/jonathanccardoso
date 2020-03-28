import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/layout";
import Aside from "../components/Aside/aside";
import SEO from "../components/Seo/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/blog/">Blog</Link>
    <Aside />
  </Layout>
);

export default IndexPage;
