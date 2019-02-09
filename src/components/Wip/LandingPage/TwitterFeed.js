import React from "react";
import {Container} from "reactstrap";
import { TwitterTimelineEmbed} from 'react-twitter-embed';

/**
 * Component to house an embedded twitter feed for HACS
 */
export default class TwitterFeed extends React.Component {
  render() {
    return (
      <Container>
        <h1>Twitter Feed Component</h1>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="texasHACS"
        options={{height: 500, width: 400}}
        />
      </Container>
    );
  }
}
