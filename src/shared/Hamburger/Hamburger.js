import React from "react";
import PropTypes from "prop-types";
import "./Hamburger.scss";

const Hamburger = (props) => {
  const className = props.isOpen
    ? "hamburglar is-open"
    : "hamburglar is-closed";

  return (
    <div className="d-md-none">
      <div id="hamburger" className={className}>
        <div class="burger-icon">
          <div class="burger-container">
            <span class="burger-bun-top"></span>
            <span class="burger-filling"></span>
            <span class="burger-bun-bot"></span>
          </div>
        </div>

        <div class="burger-ring">
          <svg class="svg-ring">
            <path
              class="path"
              fill="none"
              stroke="white"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
            />
          </svg>
        </div>

        <svg width="0" height="0">
          <mask id="mask">
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ff0000"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
            />
          </mask>
        </svg>
        <div class="path-burger">
          <div class="animate-path">
            <div class="path-rotation"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hamburger.propTypes = {};

export default Hamburger;
