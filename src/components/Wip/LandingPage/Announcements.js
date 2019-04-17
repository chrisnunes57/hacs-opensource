import React from "react";
import { Container } from "reactstrap";
import GridList from "@material-ui/core/GridList";
import { GridListTile, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import ListGroup from "reactstrap/es/ListGroup";
import ListGroupItemHeading from "reactstrap/es/ListGroupItemHeading";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";

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
      <React.Fragment>
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
                <TableCell component="th" scope="row">Title: {announcement.title}</TableCell>
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
