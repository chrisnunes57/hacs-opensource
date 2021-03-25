import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./Opportunities.scss";
import {
  renderEvents,
  renderJobListings,
  renderScholarships,
} from "./utils.js";
import { getTimeStamp } from "../utils/utils";

const placeholderEvents = [
  {
    title: "HACS x Cisco 1",
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
  {
    title: "HACS x Cisco 2",
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
  {
    title: "HACS x Cisco 3",
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
  {
    title: "HACS x Cisco 4",
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
  {
    title: "HACS x Cisco 5",
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
  {
    title: "HACS x Cisco 6",
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
  {
    title: "HACS x Cisco 7",
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
  {
    title: "HACS x Cisco 8",
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
    title: "Cisco Technical Consulting Engineer Co-op 1",
    timeline: {
      openDate: null,
      closeDate: null,
    },
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    link: "http://bit.ly/tcecoop21",
    description:
      "Cisco doesn't have many roles open right now, however they are recruiting actively for their technical consulting engineer co-op.",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
    },
  },
  {
    title: "Cisco Technical Consulting Engineer Co-op 2",
    timeline: {
      openDate: null,
      closeDate: null,
    },
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    link: "http://bit.ly/tcecoop21",
    description:
      "Cisco doesn't have many roles open right now, however they are recruiting actively for their technical consulting engineer co-op.",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
    },
  },
  {
    title: "Cisco Technical Consulting Engineer Co-op 3",
    timeline: {
      openDate: null,
      closeDate: null,
    },
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    link: "http://bit.ly/tcecoop21",
    description:
      "Cisco doesn't have many roles open right now, however they are recruiting actively for their technical consulting engineer co-op.",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
    },
  },
  {
    title: "Cisco Technical Consulting Engineer Co-op 4",
    timeline: {
      openDate: "10/10/10",
      closeDate: null,
    },
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    link: "http://bit.ly/tcecoop21",
    description:
      "Cisco doesn't have many roles open right now, however they are recruiting actively for their technical consulting engineer co-op.",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
    },
  },
  {
    title: "Cisco Technical Consulting Engineer Co-op 5",
    timeline: {
      openDate: "10/11/11",
      closeDate: "10/11/12",
    },
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    link: "http://bit.ly/tcecoop21",
    description:
      "Cisco doesn't have many roles open right now, however they are recruiting actively for their technical consulting engineer co-op.",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
    },
  },
  {
    title: "Cisco Technical Consulting Engineer Co-op 6",
    timeline: {
      openDate: null,
      closeDate: "12/12/12",
    },
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    link: "http://bit.ly/tcecoop21",
    description:
      "Cisco doesn't have many roles open right now, however they are recruiting actively for their technical consulting engineer co-op.",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
    },
  },
  {
    title: "Cisco Technical Consulting Engineer Co-op 7",
    timeline: {
      openDate: null,
      closeDate: null,
    },
    img:
      "http://drive.google.com/uc?export=view&id=16DFXoFE6g_GNrYvBZYYa-hmBxVU53Z8C",
    link: "http://bit.ly/tcecoop21",
    description:
      "Cisco doesn't have many roles open right now, however they are recruiting actively for their technical consulting engineer co-op.",
    otherLinks: {
      flyerLink: "http://bit.ly/37Xh8Aq",
    },
  },
];
const placeholderSponsorScholarships = [
  {
    title: "Texas Computer Science Scholarships for Diversity 1",
    timeline: {
      openDate: "12/4/2020",
      closeDate: "3/3/2021",
    },
    img: null,
    link: "https://hornraiser.utexas.edu/project/22570",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {},
  },
  {
    title: "Texas Computer Science Scholarships for Diversity 2",
    timeline: {
      openDate: "12/4/2020",
      closeDate: "3/3/2021",
    },
    img: null,
    link: "https://hornraiser.utexas.edu/project/22570",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {},
  },
  {
    title: "Texas Computer Science Scholarships for Diversity 3",
    timeline: {
      openDate: "12/4/2020",
      closeDate: "3/3/2021",
    },
    img: null,
    link: "https://hornraiser.utexas.edu/project/22570",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {},
  },
  {
    title: "Texas Computer Science Scholarships for Diversity 4",
    timeline: {
      openDate: "12/4/2020",
      closeDate: "3/3/2021",
    },
    img: null,
    link: "https://hornraiser.utexas.edu/project/22570",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {},
  },
  {
    title: "Texas Computer Science Scholarships for Diversity 5",
    timeline: {
      openDate: "12/4/2020",
      closeDate: "3/3/2021",
    },
    img: null,
    link: "https://hornraiser.utexas.edu/project/22570",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {},
  },
  {
    title: "Texas Computer Science Scholarships for Diversity 6",
    timeline: {
      openDate: "12/4/2020",
      closeDate: "3/3/2021",
    },
    img: null,
    link: "https://hornraiser.utexas.edu/project/22570",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {},
  },
  {
    title: "Texas Computer Science Scholarships for Diversity 7",
    timeline: {
      openDate: "12/4/2020",
      closeDate: "3/3/2021",
    },
    img: null,
    link: "https://hornraiser.utexas.edu/project/22570",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {},
  },
];

function Opportunities(props) {
  // const [user, updateUser] = useState(null);
  const [opportunitiesContent, updateOpportunitiesContent] = useState({
    sponsorListings: [],
    nonSponsorListings: [],
    sponsorEvents: [],
    nonSponsorEvents: [],
    sponsorScholarships: [],
    nonSponsorScholarships: [],
  });

  // const loginUser = (loginData) => {
  //   fetch("https://enigmatic-shore-29691.herokuapp.com/login", {
  //     method: "POST", // or 'PUT'
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         "Basic " + btoa(`${loginData.username}:${loginData.password}`),
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       updateUser(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  // an initial api call to get all opportunities data

  const startTime = new Date("04 December 2020 19:00 CST").toISOString();
  const endTime = new Date("03 March 2021 19:00 CST").toISOString();
  const eventData = {
    title: "HACS x Cisco 1",
    startTime: startTime,
    endTime: endTime,
    img: null,
    meetingLink:
      "https://cisco.webex.com/cisco/j.php?MTID=m56c5cf702bc5043269cece567e3efe5b",
    rsvpLink: "https://cisco.avature.net/su/c82e80f1ecff7432",
    location:
      "https://cisco.webex.com/cisco/j.php?MTID=m56c5cf702bc5043269cece567e3efe5b",
    description:
      "As the largest top-10 computer science program in the country, Texas Computer Science is uniquely positioned to tackle head-on the demand for bolstering diversity in tech. The Texas Computer Science Endowment for Change was established to support diversity efforts by funding opportunities for underserved students with a demonstrated passion for computer science. Scholarships through the Texas Computer Science Endowment for Change are available to incoming and current undergraduate computer science students who have participated in The Code Longhorn program or are members of or plan to join the Association of Black Computer Scientists (ABCS), or the Hispanic Association of Computer Scientists (HACS).",
    otherLinks: {
      flyerLink: "http://aldsjflas;fdd",
      jobListing: "adsflk;jdsfk;dsajf;l",
      adsflk: "jasd;lkfjdsaf",
      asdf: {},
    },
  };

  useEffect(() => {
    fetch("http://localhost:5000/opportunities")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateOpportunitiesContent(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(opportunitiesContent)
  var {
    jobListings,
    events,
    scholarships,
  } = opportunitiesContent;

  console.log(events)

  // sponsorEvents = placeholderEvents;
  // sponsorScholarships = placeholderSponsorScholarships;
  // sponsorListings = placeholderSponsorListings;

  const jobListingsSection = jobListings?.sponsors ? (
    <div className="job-listings">
      <Fade bottom>
        <h3 className="section-title">Job Listings</h3>
      </Fade>
      <Fade left>{renderJobListings(jobListings.sponsors)}</Fade>
    </div>
  ) : (
    <div />
  );

  const eventsSection = events?.sponsors ? (
    <div className="corporate-events">
      <Fade bottom>
        <h3 className="section-title">Events</h3>
      </Fade>
      <Fade right>{renderEvents(events.sponsors)}</Fade>
    </div>
  ) : (
    <div />
  );

  const scholarshipsSection = scholarships?.sponsors ? (
    <div className="scholarships">
      <Fade bottom>
        <h3 className="section-title">Scholarships</h3>
      </Fade>
      <Fade left>{renderScholarships(scholarships.sponsors)}</Fade>
    </div>
  ) : (
    <div />
  );

  return (
    <div className="opportunities">
      <Fade>
        <section>
          <h1>Opportunities</h1>
          <p className="description">
            We will post as many amazing opportunities here as we can! These
            include scholarships, events, programs, and job listings for our
            membership! If you find any more opportunities we should add, please
            reach out to our officer team by emailing{" "}
            <a className="fancy" href="mailto:texashacs@gmail.com">
              texashacs@gmail.com
            </a>
            .
          </p>
        </section>
      </Fade>
      {jobListingsSection}
      {eventsSection}
      {scholarshipsSection}
    </div>
  );
}

export default Opportunities;
