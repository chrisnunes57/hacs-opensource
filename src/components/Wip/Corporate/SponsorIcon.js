import React from "react";
import {Container, Row} from "reactstrap";

export default class SponsorIcon extends React.Component {
  render() {
    return (
      <Container>
        <Row>{this.props.name}</Row>
        <Row>
          <img src={this.props.icon} style={{ width: "300px" }} alt={`Icon for ${this.props.name}`} />
        </Row>
      </Container>
    );
  }
}
