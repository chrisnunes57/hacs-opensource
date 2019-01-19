import React from "react";
import {Container} from "reactstrap";

/**
 * Component for announcements, not limited to events, but including things like signups to stuff
 * dates of volunteer events, and news immediately relevant to our members.
 * TODO:
 * Announcements will be retrieved via an API Call to our backend,
 * So we'll need at least some mock data to be able to complete this
 */
export default class Announcements extends React.Component {
  render() {
    return (
      <Container>
        <h1>Announcements</h1>
      </Container>
    );
  }
}
