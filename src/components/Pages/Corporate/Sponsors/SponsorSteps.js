import React from "react";

export default class SponsorSteps extends React.Component {
  render() {
    return (
      <h1
        style={{
          paddingLeft: 45,
          paddingBottom: 15,
          color: 255,
          alignItems: "left",
          fontSize: 35
        }}
      >
        {" "}
        {this.props.children}{" "}
      </h1>
    );
  }
}
