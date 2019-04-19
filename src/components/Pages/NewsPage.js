import React from "react";
import { Col, Container, Row } from "reactstrap";
import SignUp from "../Wip/News/SignUp";

export default class NewsPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>We got news going on here in this</h1> 
          </Col>
        </Row>
        <Row>
          <SignUp/>
        </Row>
      </Container>
    );
  }
}