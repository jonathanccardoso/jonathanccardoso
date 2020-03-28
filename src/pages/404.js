import React from "react";

import Layout from "../components/Layout/layout";
import SEO from "../components/Seo/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found!</h1>
    <p>The page you are looking for was not found...</p>
  </Layout>
);

export default NotFoundPage;
