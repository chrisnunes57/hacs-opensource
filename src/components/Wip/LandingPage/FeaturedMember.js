import React from "react";
import { Container } from "reactstrap";

const member = {
  name: "Earl Potts",
  desc: "This man is tall as heck",
  imgSrc:
    "https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/48405627_1170391476459114_6794279757056835584_n.jpg?_nc_cat=109&_nc_ht=scontent.fftw1-1.fna&oh=2fe6d7a983f14899eca3ed5628a6d643&oe=5CF97627"
};

export default class FeaturedMember extends React.Component {
  render() {
    return (
      <Container>
        <div
          style={{
            backgroundColor: "#F4B24C",
            width: "100%",
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <h1> Featured Member </h1>
        </div>
      </Container>
    );
  }
}
