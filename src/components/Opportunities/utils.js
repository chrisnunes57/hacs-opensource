import React from "react";
import { isoDateToDateTimeString, isoDateToDateString } from "../utils/utils";

// Return array from firestore object representation of array
function objectToArray(obj) {
  return Object.keys(obj).map((i) => obj[i]);
}

// Return JSX for a provided array of links
function renderLinks(links) {
  return <div className="other-links" />;
}

// Return JSX of a timeline
function renderTimeline(t) {
  return (
    <div className="timeline-container">
      <h4 className="event-start-time">
        {t?.openDate ? `Opens: ${isoDateToDateString(t.openDate)}` : "NOW OPEN"}
      </h4>
      {t?.closeDate ? (
        <h4 className="event-end-time">
          Closes: {isoDateToDateString(t.closeDate)}
        </h4>
      ) : null}
    </div>
  );
}

// Return JSX for an array of job-listings
export function renderJobListings(listings, editable) {
  objectToArray(listings)
  listings = Object.keys(listings).map((l) => listings[l]);
  return (
    <div className="sponsor-listings flex-row carousel">
      {listings.map((l) => (
        <div
          className="job-listing-container opportunity flex card"
          key={l.title}
        >
          {l.img ? (
            <img
              src={l.img}
              className="scholarship-image"
              alt="scholarship-view"
            />
          ) : null}
          <div className="details">
            <h3 className="title">{l.title}</h3>
            <div className="job-timeline-container">
              {renderTimeline(l.timeline)}
            </div>
            <a href={l.link} className="job-link">
              <button>Visit Site</button>
            </a>
            <div className="other-links-container">
              {renderLinks(l.otherLinks)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Return JSX for an array of events
export function renderEvents(events, editable) {
  events = Object.keys(events).map((l) => events[l]);
  return (
    <div className="sponsor-events flex-row carousel">
      {events.map((e) => {
        return (
          <div className="event-container opportunity flex card" key={e.title}>
            {e.img ? (
              <img src={e.img} className="event-image" alt="event-view" />
            ) : null}
            <div className="details">
              <h3 className="title">{e.title}</h3>
              <div className="event-time-container">
                <h4 className="event-start-time">
                  {isoDateToDateTimeString(e.startTime)}
                </h4>
                <h4 className="event-end-time">
                  {isoDateToDateTimeString(e.endTime)}
                </h4>
              </div>
              <div className="event-links-container flex-row">
                <a href={e.rsvpLink} className="rsvp-link">
                  <button>RSVP</button>
                </a>
                <a href={e.meetingLink} className="meeting-link">
                  <button>JOIN</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Return JSX for an array of scholarships
export function renderScholarships(scholarships, editable) {
  scholarships = Object.keys(scholarships).map((l) => scholarships[l]);
  return (
    <div className="sponsor-scholarships flex-row carousel">
      {scholarships.map((s) => (
        <div
          className="scholarship-container opportunity flex card"
          key={s.title}
        >
          {s.img ? (
            <img
              src={s.img}
              className="scholarship-image"
              alt="scholarship-view"
            />
          ) : null}
          <div className="details">
            <h3 className="title">{s.title}</h3>
            <a href={s.link} className="scholarship-link">
              <button>Visit Site</button>
            </a>
            <div className="scholarship-timeline-container">
              {renderTimeline(s.timeline)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
