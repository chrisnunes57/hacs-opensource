import React from "react";
import { Container } from "reactstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";

/**
 * Component to house an embedded twitter feed for HACS
 */
export default class TwitterFeed extends React.Component {
  render() {
    return (
      <Container>
        <div
          style={{
            backgroundColor: "#F4B24C",
            width: "100%",
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <h1>Twitter Feed Component</h1>
        </div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="texasHACS"
          options={{ height: 500, width: "100%" }}
        />
      </Container>
    );
  }
}
