import React from "react";
import "./Homepage.scss";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import MemberHighlight from "./MemberHighlight";
import UpcomingEvents from "./UpcomingEvents";
import TwitterFeed from "./TwitterFeed";
import Leadership from "./Leadership";

const placeholderMemberData = {
  name: "Josiah Valdez",
  description: `Josiah's an incoming freshman studying CS who's already being active within the org by going to events and chatting in the Discord! In high school, he participated in his robotics club and even placed top 8 in state-wide robotics tournaments. HACS always appreciates new members bringing their knowledge, passion for technology, and positive attitude to the familia. Thank you, Josiah, for all that you do! `,
  imageUrl:
    "https://ci5.googleusercontent.com/proxy/HHc5qI_tJ9dMVjB_TwOd0XZJpKxxSvU9CTPSIacxGz0Mb6Jk89AQgerzOe0zl8GshxrIal10lQ8A665EEEH3mhuGLxvqk4Q2Cn2OM5AbTBeth7W2lrKdnuUxskB33NLh5BwsszGw9SYoB4AU1HQjvSvUJ5LfKQ=s0-d-e1-ft?trnonsuspmrk=1#https://mcusercontent.com/659d3054a1f01cae233080c14/images/11bbeb60-9544-4a70-9b1c-346845ff4972.jpg",
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
