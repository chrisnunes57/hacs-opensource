import React from "react";
import { Container, Row } from "reactstrap";

/**
 * Most of the logic for this component has already been created.
 * It takes in two props from the parent
 * name : a string giving the name of the sponsor
 * icon : an image src for the sponsors icon
 */
export default class SponsorIcon extends React.Component {
  render() {
    return (
      <Container>
        <Row>{this.props.name}</Row>
        <Row>
          <img
            src={this.props.icon}
            style={{ width: "300px" }}
            alt={`Icon for ${this.props.name}`}
          />
        </Row>
      </Container>
    );
  }
}
