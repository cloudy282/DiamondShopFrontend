import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap'

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/clothes">Áo quần</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/shoes">Giày</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/accessories">Phụ kiện</NavLink>
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
};

Header.propTypes = {
    
};

export default Header;