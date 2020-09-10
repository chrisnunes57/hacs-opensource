import React from "react";
import "./Homepage.scss";

function MemberHighlight(props) {
  return (
    <section className="member-highlight">
      <h3 className="section-title">Member of the Week</h3>
      <div className="member-wrapper">
        <img
          src={props.member.imageUrl}
          alt={"HACS member of the week, " + props.member.name}
        />
        <div className="content">
          <p className="name">{props.member.name}</p>
          <p className="description">{props.member.description}</p>
        </div>
      </div>
    </section>
  );
}

export default MemberHighlight;
