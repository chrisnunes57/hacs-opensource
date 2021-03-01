import React, { useRef, useState, useEffect } from "react";
import "./Opportunities.scss";
import {
  renderEvents,
  renderJobListings,
  renderScholarships,
} from "./utils.js";

const placeholderEvents = [
  {
    title: "HACS x Cisco",
    date: "3/3/2021",
    startTime: "7:00pm CST",
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    meetingLink:
      "https://cisco.webex.com/cisco/j.php?MTID=m56c5cf702bc5043269cece567e3efe5b",
    rsvpLink: "https://cisco.avature.net/su/c82e80f1ecff7432",
    location:
      "https://cisco.webex.com/cisco/j.php?MTID=m56c5cf702bc5043269cece567e3efe5b",
    description:
      "During this networking night, students will really get to know Cisco, who they are and what they do. Alongside a panel of some of their best LatinX leaders, students will be broken into breakout rooms with their volunteers to learn about their culture, their LatinX professional network organization (Conexion), the various roles open at Cisco and how they give back to their communities! All through casual networking, no need for formalities, just be yourself. 😊",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
      jobListing: "http://bit.ly/tcecoop21",
    },
  },
];
const placeholderSponsorListings = [
  {
    title: "HACS x Cisco",
    date: "3/3/2021",
    startTime: "7:00pm CST",
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    meetingLink:
      "https://cisco.webex.com/cisco/j.php?MTID=m56c5cf702bc5043269cece567e3efe5b",
    rsvpLink: "https://cisco.avature.net/su/c82e80f1ecff7432",
    location:
      "https://cisco.webex.com/cisco/j.php?MTID=m56c5cf702bc5043269cece567e3efe5b",
    description:
      "During this networking night, students will really get to know Cisco, who they are and what they do. Alongside a panel of some of their best LatinX leaders, students will be broken into breakout rooms with their volunteers to learn about their culture, their LatinX professional network organization (Conexion), the various roles open at Cisco and how they give back to their communities! All through casual networking, no need for formalities, just be yourself. 😊",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
      jobListing: "http://bit.ly/tcecoop21",
    },
  },
];
const placeholderSponsorScholarships = [
  {
    title: "Texas Computer Science Scholarships for Diversity",
    timeline: {
      startDate: "12/4/2020",
      endDate: "3/3/2021",
    },
    img:
      "http://drive.google.com/uc?export=view&id=13vJOh7uXtNfc85pexo4proasGr_k8ajg",
    link: "https://hornraiser.utexas.edu/project/22570",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {},
  },
];

function Opportunities(props) {
  const [user, updateUser] = useState(null);
  const [opportunitiesContent, updateOpportunitiesContent] = useState({
    sponsorListings: [],
    nonSponsorListings: [],
    sponsorEvents: [],
    nonSponsorEvents: [],
    sponsorScholarships: [],
    nonSponsorScholarships: [],
  });

  const loginUser = (loginData) => {
    fetch("https://enigmatic-shore-29691.herokuapp.com/login", {
      method: "POST", // or 'PUT'
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + btoa(`${loginData.username}:${loginData.password}`),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        updateUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // an initial api call to get all opportunities data
  useEffect(() => {
    fetch("https://enigmatic-shore-29691.herokuapp.com/opportunities")
      .then((response) => response.json())
      .then((data) => {
        updateOpportunitiesContent(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  var {
    sponsorListings,
    nonSponsorListings,
    sponsorEvents,
    nonSponsorEvents,
    sponsorScholarships,
    nonSponsorScholarships,
  } = opportunitiesContent;

  sponsorEvents = placeholderEvents;
  sponsorScholarships = placeholderSponsorScholarships;

  return (
    <div className="opportunities">
      <h1>Opportunities</h1>
      <p>
        We will post as many amazing opportunities here as we can! These include
        scholarships, events, programs, and job listings for our membership!
      </p>
      <div className="job-listings">
        <div className="sponsor-listings flex-row">
          {renderJobListings(sponsorListings)}
        </div>
        <div className="other-listings flex-row">
          {renderJobListings(nonSponsorListings)}
        </div>
      </div>
      <div className="corporate-events">
        <h3 className="section-title">Events from our sponsors</h3>
        <div className="sponsor-events flex-row">
          {renderEvents(sponsorEvents)}
        </div>
        <div className="other-events flex-row">
          {renderEvents(nonSponsorEvents)}
        </div>
      </div>
      <div className="scholarships">
        <h3 className="section-title">Events from our sponsors</h3>
        <div className="sponsor-scholarships flex-row">
          {renderScholarships(sponsorScholarships)}
        </div>
        <div className="other-scholarships flex-row">
          {renderScholarships(nonSponsorScholarships)}
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
