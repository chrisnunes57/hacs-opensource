import React from "react";
import { Container } from "reactstrap";

/**
 * Component for announcements, not limited to events, but including things like signups to stuff
 * dates of volunteer events, and news immediately relevant to our members.
 * TODO:
 * Announcements will be retrieved via an API Call to our backend,
 * So we'll need at least some mock data to be able to complete this
 */
const announcement = {
  title: "Example Announcement",
  date: "Example Date",
  description: "Example Description"
};

const apiURL = "http://127.0.0.1:3001/announcements";

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: []
    };
  }
  componentDidMount() {
    fetch(apiURL)
      .then(results => {
        return results.json();
      })
      .then(announcements => {
        debugger;
        let data = [];
        for (let i = 0; i < announcements.length; i++) {
          let announcement = announcements[i];
          if (announcement) {
            data.push(announcement);
          }
        }
        this.setState({
          announcements: data
        });
      });
  }

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
          <h1
            style={{
              textAlign: "center"
            }}
          >
            {" "}
            Announcements{" "}
          </h1>
        </div>
        <dl>
          {this.state.announcements.map(announcement => {
            return (
              <React.Fragment>
                <dt> Title: {announcement.title} </dt>
                <dd>- {announcement.createdAt}</dd>}
                <dd>- {announcement.content}</dd>
              </React.Fragment>
            );
          })}
        </dl>
      </Container>
    );
  }
}
