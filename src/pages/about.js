import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/Seo/seo";
import Avatar from "../components/Avatar/avatar";

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>

    {/* <img alt="Profile Jonathan" src="images/profile.jpg" /> */}
    <Avatar />

    <div>
      <h2>Profile</h2>
      <p>
        My name is Jonathan Cardoso. I'm 21 years old. I'm an Systems Analyst.
      </p>
      <p>
        Since the age of 12 I was already interested in codes. But the hobby was
        stronger and becoming a profession!
      </p>
      <p>
        I started studying IT since 2014, with a course in Internet Computing
        Technician and later I'm studying SADT, both of which were not done at
        the IFRN..
      </p>
    </div>

    <div>
      <h2>Professional</h2>
      <p>
        I work as a web developer also to the business branch when the
        freelancer.
      </p>
      <p>
        I worked in advertising agencies, academic institutions and development
        companies. And from the beginning I developing the front-end and
        back-end.
      </p>
      <p>
        Always taking each obstacle as a professional learning as life
        experience.
      </p>
    </div>
  </Layout>
);

export default About;
