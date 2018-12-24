import React from "react";
import { Col, Container, Row } from "reactstrap";

export default class EventsPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Col 1</Col>
          <Col>
            <h1>
              We got events going on here in this
            </h1>
          </Col>
          <Col>Col 3</Col>
        </Row>
      </Container>
    );
  }
}
