import React from "react";




export default class SubHeader extends React.Component {
    render() {
      return (
        <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          paddingTop: "40px",
          paddingLeft: "75px",
          paddingRight: "75px",
          paddingBottom: "40px"
        }}
      >
        <h1
          style={{
            textAlign: "center", fontWeight: "10px",
          }}
        >
          {" "}
          {this.props.children}
          {" "}
        </h1>
      </div>
      )
    }
}
