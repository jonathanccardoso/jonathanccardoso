import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/layout";
import Aside from "../components/Aside/aside";
import SEO from "../components/Seo/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, welcome to my website.</h1>
    <p>My name is Jonathan Cardoso. I'm 20 years old. I'm an Systems Analyst.</p>
    <p>Since the age of 12 I was already interested in codes. But the hobby was stronger and becoming a profession!</p>
    <p>I started studying IT since 2014, with a course in Internet Computing Technician and later I'm studying SADT, both of which were not done at the IFRN..</p>
    <Link to="/about/">See more about...</Link>
    <Aside />
  </Layout>
);

export default IndexPage;
