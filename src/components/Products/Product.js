import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";

const Product = (props) => {
  let { match } = props;
  let { category } = match.params;
  return <div>{category}</div>;
};

Product.propTypes = {};

export default Product;
