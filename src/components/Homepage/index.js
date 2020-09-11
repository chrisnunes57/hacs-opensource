import React from "react";
import "./Homepage.scss";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import MemberHighlight from "./MemberHighlight";
import UpcomingEvents from "./UpcomingEvents";
import TwitterFeed from "./TwitterFeed";
import Leadership from "./Leadership";

const placeholderMemberData = {
  name: "Satya Nadella",
  description: `Satya Narayana Nadella (/nəˈdɛlə/; born 19 August 1967) is an Indian-American business executive. He is the chief executive officer (CEO) of Microsoft, succeeding Steve Ballmer in 2014. Before becoming CEO, he was the executive vice president of Microsoft's cloud and enterprise group, responsible for building and running the company's computing platforms.

At Microsoft, Nadella has led major projects that included the company's move to cloud computing and the development of one of the largest cloud infrastructures in the world.`,
  imageUrl:
    "https://cdn.vox-cdn.com/thumbor/k_EaMfAhfbXn40BMkE0aBq3YI7o=/0x0:640x427/1400x1400/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/3666711/satyanadella.jpg",
};

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

function Homepage() {
  return (
    <section className="homepage">
      <Hero />
      <ImageSlider />
      <MemberHighlight member={placeholderMemberData} />
      <UpcomingEvents events={placeholderEvents} />
      <TwitterFeed />
      <Leadership />
    </section>
  );
}

export default Homepage;
