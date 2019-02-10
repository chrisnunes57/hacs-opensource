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
            backgroundColor: "#000000",
            width: "100%",
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              textAlign: "center"
            }}
          >
            Twitter Feed
          </h1>
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
