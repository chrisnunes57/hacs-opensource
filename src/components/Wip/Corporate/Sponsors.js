import React from "react";
import { Col, Container, Row } from "reactstrap";
import { SponsorList } from "../../../data/sponsorList";
import SponsorIcon from "./SponsorIcon";

const sponsors = SponsorList.sponsors;

/**
 * The intent for this component is to hold the
 * list of SponsorIcon components that make up
 * all our sponsors. To complete this the sponsorList
 * under the data folder will need to be filled out properly.
 */
export default class Sponsors extends React.Component {
  /**
    Use javascript's map function to
    list them out programmatically.
     */
  render() {
    return (
      <Container>
        <Row>
          <h1>Sponsors will be listed</h1>
        </Row>
        <Row>
          <Col>
            {sponsors.map(sponsor => {
              //  This function maps over the array of data we imported and passes the name and icon image onto
              //  a component called SponsorIcon. We need icon images for each of our sponsors
              return <SponsorIcon name={sponsor.name} icon={sponsor.icon} />;
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
