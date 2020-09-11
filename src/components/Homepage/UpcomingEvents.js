import React from "react";
import "./Homepage.scss";
import Event from "../partials/Event.js";

function UpcomingEvents(props) {
    return (
        <section className="upcoming-events">
            <div className="content-wrapper">
                <h3 className="section-title">Upcoming Events</h3>
                {props.events.map( (event, i) => {
                    return <Event data={event} key={i} />
                })}
            </div>
        </section>
    );
}

export default UpcomingEvents;
