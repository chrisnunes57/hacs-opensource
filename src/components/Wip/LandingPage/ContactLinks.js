import React from "react";
import { Col, Container, Row } from "reactstrap";
import TwitterLogo from "./logoPics/twitter.png";
import FacebookLogo from "./logoPics/facebook.png";
import InstagramLogo from "./logoPics/instagram.png";
import EmailLogo from "./logoPics/email.png";
import Obfuscate from "react-obfuscate";

export default class ContactLinks extends React.Component {
  render() {
    return (
      <Container>
        <h1 style={{ textAlign: "center", paddingTop: "25px" }}>
          <a target="_blank" href={"https://twitter.com/texashacs?lang=en"}>
            <img
              src={TwitterLogo}
              alt="Twitter Logo"
              style={{ width: "100px" }}
            />
          </a>
          <a target="_blank" href={"https://www.instagram.com/texashacs/"}>
            <img
              src={InstagramLogo}
              alt="Instagram Logo"
              style={{ width: "150px", padding: "25px" }}
            />
          </a>
          <a target="_blank" href={"https://www.facebook.com/groups/TexasHACS"}>
            <img
              src={FacebookLogo}
              alt="Facebook Logo"
              style={{ width: "95px" }}
            />
          </a>
          <Row>
            <Col>
              <img src={EmailLogo} alt="Email Logo" style={{ width: "75px" }} />
              <Obfuscate element={"span"}>Texashacs@gmail.com</Obfuscate>
            </Col>
          </Row>
        </h1>
      </Container>
    );
  }
}
