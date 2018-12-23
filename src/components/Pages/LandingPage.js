import React from "react";
import { Col, Container, Row } from "reactstrap";

export default class LandingPage extends React.Component {


  render() {
    return (
      <Container>
        <Row>
          <Col>
            Col 1
          </Col>
          <Col>
            <h1>Hey this is the landing page, where the jumbotron and about stuff will go.</h1>
          </Col>
          <Col>
            Col 3
          </Col>
        </Row>
      </Container>
    );
  }
}