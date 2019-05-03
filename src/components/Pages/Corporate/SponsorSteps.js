import React from "react";

export default class SponsorSteps extends React.Component {
  render() {
    return (
      <h1
        style={{
          fontSize: "35px",
          padding: "10px",
          color: 255,
          alignItems: "left"
        }}
      >
        {" "}
        {this.props.children}{" "}
      </h1>
    );
  }
}
