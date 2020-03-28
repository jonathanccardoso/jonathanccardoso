import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./aside.css";

const Aside = () => (
  <aside>
    <p>© Copyright<b>Jonathan Cardoso</b>2020. All rights reserved.</p>
  </aside>
);

Aside.propTypes = {
  siteTitle: PropTypes.string
};

Aside.defaultProps = {
  siteTitle: ``
};

export default Aside;
