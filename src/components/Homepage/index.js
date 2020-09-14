import React from "react";
import "./Homepage.scss";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import MemberHighlight from "./MemberHighlight";
import UpcomingEvents from "./UpcomingEvents";
import TwitterFeed from "./TwitterFeed";
import Leadership from "./Leadership";

const placeholderEvents = [
  {
    title: "HACS Annual Kickoff GM",
    date: "October 2020, TBD",
    link: "utexas.zoom.zzzzzzzzz",
    location: "",
    description: "Come on out and learn about the great HACS organization! We’ll have catering by doordash (i rly hope)"
  },
  {
    title: "Study Night #4",
    date: "March 8, 2020, 7-9 PM",
    link: "",
    location: "GDC 5.302",
    description: "Feeling stressed about upcoming exams, projects, essays, or homework? Join HACS at our first study night of the Spring Semester and study with us!"
  }
]

function Homepage(props) {
  return (
    <section className="homepage">
      <Hero />
      <ImageSlider />
      {props.memberOfWeek ? <MemberHighlight member={props.memberOfWeek} /> : ""}
      <UpcomingEvents events={placeholderEvents} />
      <TwitterFeed />
      <Leadership />
    </section>
  );
}

export default Homepage;
