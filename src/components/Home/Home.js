import React from "react";
import PropTypes from "prop-types";

import "./Home.scss";
import CategoryContainer from "../../containers/CategoryContainer";
import Product from "../Products/Product";

const Home = (props) => {
  let categories = CategoryContainer.findAll();
  return (
    <div>
      {categories.map((categoryItem) => {
        return (
          <div>
            <h1>{categoryItem.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

Home.propTypes = {};

export default Home;
