import React from "react";

import { ReactComponent as TwitterLogo } from "../Layouts/navBarPics/twitter-logo.svg";
import { ReactComponent as FaceBookLogo } from "../Layouts/navBarPics/facebook-logo-button.svg";
import { ReactComponent as EmailLogo } from "../Layouts/navBarPics/email-logo.svg";
import { ReactComponent as HacsLogo } from "../Layouts/navBarPics/hacs-logo.svg";
import { ReactComponent as InstagramLogo } from "../Layouts/navBarPics/instagram-logo.svg";

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import "./styles.css";
import "../../index.css";
import { Grid } from "@material-ui/core";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    // this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



  // closeNavbar() {
  //   if (this.state.collapsed !== true) {
  //     this.toggle();
  //   }
  // }

  render() {
    return (
      <div>
        <Navbar
          style={{height: 55, background: "#F0BB40", paddingTop:"0px" , paddingBottom: "0px", padding:0 }}
          className="primary-color"
          dark
          expand="md"
          fixed={"top"}
        >
          <NavbarBrand tag={RRNavLink} to={"/"}>
            {/* <span className="text-white">HACS</span>  */}
              <HacsLogo style={{paddingLeft: 10, width: 55,  height: 55}}/> 
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{ paddingTop:"0px" , paddingBottom: "0px"}}>
              <NavItem className="nav-item" >
                <NavLink
                  exact
                  to={"/"}
                  activeClassName={"active"}
                  tag={RRNavLink}
                  // onClick={this.closeNavbar}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={"/sponsorship"}
                  activeClassName={"active"}
                  tag={RRNavLink}
                  // onClick={this.closeNavbar}
                >
                  Corporate
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={"/events"}
                  activeClassName={"active"}
                  tag={RRNavLink}
                  // onClick={this.closeNavbar}
                >
                  Events
                </NavLink>
              </NavItem>
              <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.facebook.com/groups/TexasHACS"}
              ><FaceBookLogo style={{paddingLeft: 5, paddingRight: 5, width: 44, height: 44}}/> </a>
              <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.instagram.com/texashacs/"}
              ><InstagramLogo style={{paddingLeft: 5, paddingRight: 5, width: 44, height: 44}}/> </a>
              <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://twitter.com/texashacs?lang=en"}
              > <TwitterLogo style={{paddingLeft: 5, paddingRight: 5, width: 44, height: 44}}/> </a>
              <EmailLogo style={{paddingLeft: 5, paddingRight: 5, width: 44, height: 44}}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
