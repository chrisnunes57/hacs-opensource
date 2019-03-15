import React from "react";
import { Col, Container, Row } from "reactstrap";
import EventsCalendar from "../Wip/Events/EventsCalendar";

export default class EventsPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>We got events going on here in this</h1>
          </Col>
        </Row>
        <Row>
          <EventsCalendar />
        </Row>
      </Container>
    );
  }
}
