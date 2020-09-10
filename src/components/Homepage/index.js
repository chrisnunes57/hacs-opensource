import React from "react";
import "./Homepage.scss";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import MemberHighlight from "./MemberHighlight";

const placeholderMemberData = {
  name: "Satya Nadella",
  description: `Satya Narayana Nadella (/nəˈdɛlə/; born 19 August 1967) is an Indian-American business executive. He is the chief executive officer (CEO) of Microsoft, succeeding Steve Ballmer in 2014. Before becoming CEO, he was the executive vice president of Microsoft's cloud and enterprise group, responsible for building and running the company's computing platforms.

At Microsoft, Nadella has led major projects that included the company's move to cloud computing and the development of one of the largest cloud infrastructures in the world.`,
  imageUrl:
    "https://cdn.vox-cdn.com/thumbor/k_EaMfAhfbXn40BMkE0aBq3YI7o=/0x0:640x427/1400x1400/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/3666711/satyanadella.jpg",
};

function Homepage() {
  return (
    <section className="homepage">
      <Hero />
      <ImageSlider />
      <MemberHighlight member={placeholderMemberData} />
    </section>
  );
}

export default Homepage;
