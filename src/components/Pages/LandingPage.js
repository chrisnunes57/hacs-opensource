import React from "react";
import {Container, Row} from "reactstrap";
import Carousel from "../Wip/LandingPage/Carousel";
import Agenda from "../Wip/LandingPage/Agenda";
import TwitterFeed from "../Wip/LandingPage/TwitterFeed";
import Announcements from "../Wip/LandingPage/Announcements";
import ContactLinks from "../Wip/LandingPage/ContactLinks";

export default class LandingPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>The Landing Page</Row>
        <Row>
          <Carousel />
        </Row>
        <Row>
          <Agenda />
        </Row>
        <Row>
          <TwitterFeed />
        </Row>
        <Row>
          <Announcements />
        </Row>
        <Row>
          <ContactLinks/>
        </Row>
      </Container>
    );
  }
}
