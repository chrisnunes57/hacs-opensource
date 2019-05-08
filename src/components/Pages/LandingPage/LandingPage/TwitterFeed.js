import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Grid from "@material-ui/core/Grid/index";

/**
 * Component to house an embedded twitter feed for HACS
 */
export default class TwitterFeed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid item xs={12} container justify={"center"}>
          <Grid item xs={12}>
          <h1
            style={{
              color: "#000000",
              textAlign: "center"
            }}
          >
            Twitter Feed
          </h1>
          </Grid>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="texasHACS"
          options={{ height: 500, width: "100%" }}
        />

        </Grid>
      </React.Fragment>
    );
  }
}
