import React from "react";




export default class SponsorSteps extends React.Component {
    render() {
      return (
        <h1
          style={{
            fontWeight: "35px",
            padding: "10px",
            paddingLeft: "35px",
            color: 255,
            alignItems: "left",
          }}
        >
          {" "}
          {this.props.children}
          {" "}
        </h1>
      )
    }
}
