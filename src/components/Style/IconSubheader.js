import React from "react";

export default class IconSubHeader extends React.Component {
  render() {
    return (
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          paddingTop: "5px",
          paddingLeft: "75px",
          paddingRight: "75px",
          paddingBottom: "40px"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: 30
          }}
        >
          {" "}
          {this.props.children}{" "}
        </h1>
      </div>
    );
  }
}
