import React from "react";




export default class SubHeader extends React.Component {
    render() {
      return (
        <div
        style={{
          backgroundColor: "#F4B24C",
          width: "60%",
          borderRadius: 20,
          overflow: "hidden",
          paddingLeft: "75px",
          paddingRight: "75px"
        }}
      >
        <h1
          style={{
            textAlign: "center"
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
