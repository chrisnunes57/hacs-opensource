import React from "react";
import {Col, Container, Row} from "reactstrap";
import SponsorPackage from "../Wip/Corporate/SponsorPackage";
import Sponsors from "../Wip/Corporate/Sponsors";

export default class CorporatePage extends React.Component {
  render() {
    return (
      <Container>
        <h1>This will be the Corporate page</h1>
        <Row>
          <Col>
            <SponsorPackage />
          </Col>
        </Row>
        <Row>
          <Col>
            <Sponsors />
          </Col>
        </Row>
      </Container>
    );
  }
}
