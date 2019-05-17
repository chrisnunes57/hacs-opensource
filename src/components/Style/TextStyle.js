import React from "react";

export default class TextStyle extends React.Component {
  render() {
    return (
      <div
        style={{
          alignContent: "center",
          paddingLeft: 35,
          paddingRight: 35,
          paddingBottom: 10,
          paddingTop: 10
        }}
      >
        <h1
          style={{
            textAlign: "left",
            fontSize: 20
          }}
        >
          {" "}
          {this.props.children}{" "}
        </h1>
      </div>
    );
  }
}
