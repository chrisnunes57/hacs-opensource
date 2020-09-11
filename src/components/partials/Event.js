import React from "react";
import "./Event.scss";

function Event(props) {
    console.log(props)
    return (
        <div className="event">
            <p className="title">{props.data.title}</p>
            <p className="date">{props.data.date}</p>
            {props.data.link ? <a className="link" href={props.data.link}>{props.data.link}</a> : ""}
            {props.data.location ? <p className="location">{props.data.location}</p> : ""}
            <p className="description">{props.data.description}</p>
        </div>
    );
}

export default Event;
