import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import Hamburger from "../../shared/Hamburger/Hamburger";

const Header = (props) => {
  const [searchContext, setSearchContext] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [iconClassName, setIcon] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Navbar expand="md">
        <NavbarBrand href="/">
          <div className="d-flex align-items-center">
            <img className="navbar-height" src="/diamond.png" />
            <span className="ml-3 bold d-none d-md-inline-block">
              DiamondShop
            </span>
          </div>
        </NavbarBrand>
        <button className="btn btn-link p-0" onClick={toggle}>
          <Hamburger isOpen={isOpen}></Hamburger>
        </button>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mt-2 mt-md-0" navbar>
            <NavItem>
              <NavLink onClick={toggle} to="/products/clothes">
                Quần áo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={toggle} to="/products/shoes">
                Giày
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={toggle} to="/products/accessories">
                Phụ kiện
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

Header.propTypes = {};

export default Header;
