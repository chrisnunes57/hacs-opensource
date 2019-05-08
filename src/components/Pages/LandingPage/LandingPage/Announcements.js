import React from "react";
import TableHead from "@material-ui/core/TableHead/index";
import TableRow from "@material-ui/core/TableRow/index";
import TableCell from "@material-ui/core/TableCell/index";
import TableBody from "@material-ui/core/TableBody/index";
import Table from "@material-ui/core/Table/index";

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
        let data = [];
        for (let i = 0; i < 3; i++) {
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

      <React.Fragment>
          <h1
            style={{
            textAlign: "center"
            }}
          >
            Announcements
          </h1> 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">What's it about?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.announcements.map(announcement => {
              return (
                <TableRow key={announcement.id}>
                  <TableCell component="th" scope="row">
                    {announcement.title}
                  </TableCell>
                  <TableCell align="right"> {announcement.createdAt}</TableCell>
                  <TableCell align="right">{announcement.content}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}
