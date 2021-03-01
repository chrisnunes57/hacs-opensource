import React from "react";

// Return JSX for a provided array of links
function renderLinks(links) {
  return <div className="other-links" />;
}

// Return JSX of a timeline
function renderTimeline(timeline) {
  return <div className="other-links" />;
}

// Return JSX for an array of events
export function renderEvents(events) {
  console.log(events);

  return events.map((e) => (
    <div className="event-container opportunity flex card" key={e.slug}>
      <h3 className="title">{e.title}</h3>
      <div className="event-time-container">
        <h4 className="event-start-time">{e.startTime}</h4>
        <h4 className="event-end-time">{e.endTime}</h4>
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
  ));

  // return events.map((e) => (
  //   <div className="event-container" key={e.slug}>
  //     <img src={e.img} className="event-image" />
  //     <h2 className="event-title">{e.title}</h2>
  //     <div className="event-time-container">
  //       <h3 className="event-start-time">{e.startTime}</h3>
  //       <h3 className="event-end-time">{e.endTime}</h3>
  //     </div>
  //     <div className="event-links-container flex-row">
  //       <a href={e.meetingLink} className="meeting-link">
  //         <button>JOIN</button>
  //       </a>
  //       <a href={e.rsvpLink} className="rsvp-link">
  //         <button>RSVP</button>
  //       </a>
  //     </div>
  //     <p className="event-description">{e.description}</p>
  //     <div className="other-links-container">{renderLinks(e.otherLinks)}</div>
  //   </div>
  // ));
}

// Return JSX for an array of job-listings
export function renderJobListings(listings) {
  console.log(listings);

  return listings.map((l) => (
    <div className="job-listing-container opportunity flex card">
      <img src={l.img} className="scholarship-image" />
      <h1 className="title">{l.title}</h1>
      <a href={l.link} className="job-link">
          <button>Visit Site</button>
      </a>
      <div className="job-timeline-container">{renderTimeline(l.timeline)}</div>
      <p className="job-description">{l.description}</p>
      <div className="other-links-container">{renderLinks(l.otherLinks)}</div>
    </div>
  ));
}

// Return JSX for an array of scholarships
export function renderScholarships(scholarships) {
  console.log(scholarships);

  return scholarships.map((s) => (
    <div className="scholarship-container opportunity flex card">
      <h3 className="title">{s.title}</h3>
      <a href={s.link} className="scholarship-link">
        <button>Visit Site</button>
      </a>
      <div className="scholarship-timeline-container">
        {renderTimeline(s.timeline)}
      </div>
    </div>
  ));

  // return scholarships.map((s) => (
  //   <div className="scholarship-container flex card">
  //     <img src={s.img} className="scholarship-image" />

  //     <h1 className="scholarship-title">{s.title}</h1>
  //     <a href={s.link} className="scholarship-link">
  //       <button>Visit Site</button>
  //     </a>
  //     <div className="scholarship-timeline-container">
  //       {renderTimeline(s.timeline)}
  //     </div>
  //     <p className="scholarship-description">{s.description}</p>
  //     <div className="other-links-container">{renderLinks(s.otherLinks)}</div>
  //   </div>
  // ));
}
