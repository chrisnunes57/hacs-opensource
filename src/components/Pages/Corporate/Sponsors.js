import React from "react";
import TableHead from "@material-ui/core/TableHead/index";
import TableRow from "@material-ui/core/TableRow/index";
import TableCell from "@material-ui/core/TableCell/index";
import TableBody from "@material-ui/core/TableBody/index";
import Table from "@material-ui/core/Table/index";
import Grid from "@material-ui/core/Grid/index";
import SubHeader from "../../Style/SubHeader";

const sponsors = {
  title: "Example Announcement",
  date: "Example Date",
  description: "Example Description"
};

const apiURL = "http://127.0.0.1:3001/sponsors";

export default class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsors: []
    };
  }
  componentDidMount() {
    fetch(apiURL)
      .then(results => {
        return results.json();
      })
      .then(sponsors => {
        // debugger;
        let data = [];
        for (let i = 0; i < sponsors.length; i++) {
          let sponsor = sponsors[i];
          if (sponsor) {
            data.push(sponsor);
          }
        }
        this.setState({
          sponsors: data
        });
      });
  }

  render() {
    return (
      <Grid container justify={"center"} item xs={12} spacing={0}>
      <Grid item xs={12}>
        <SubHeader>HACS Sponsors</SubHeader>
      </Grid>
            {this.state.sponsors.map(sponsor => {
              return (
                <Grid item xs={3} container justify={"center"} spacing={0} style={{paddingBottom: 45}}>
                  <img src={sponsor.logo_link}/>
                </Grid>
              );
            })}
      </Grid>
    );
  } 
}
