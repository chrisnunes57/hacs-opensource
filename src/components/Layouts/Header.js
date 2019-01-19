import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {NavLink as RRNavLink} from "react-router-dom";
import "./styles.css";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggle();
    }
  }

  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#07969b" }}
          dark
          expand="md"
          fixed={"top"}
        >
          <NavbarBrand tag={RRNavLink} to={"/"}>
            <span className="text-white">HACS</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-item">
                <NavLink
                  exact
                  to={"/"}
                  activeClassName={"active"}
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={"/sponsorship"}
                  activeClassName={"active"}
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                >
                  Sponsorship Info
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={"/events"}
                  activeClassName={"active"}
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                >
                  Events
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
