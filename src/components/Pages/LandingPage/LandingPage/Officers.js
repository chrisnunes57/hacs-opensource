import React from "react";
import Officer from "./Officer";
import Grid from "@material-ui/core/Grid/index";

const apiURL = "http://127.0.0.1:3001/officers";

export default class Officers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officers: []
    };
  }
  componentDidMount() {
    fetch(apiURL)
      .then(results => {
        return results.json();
      })
      .then(officers => {
        //debugger;
        let data = [];
        for (let i = 0; i < officers.length; i++) {
          let officer = officers[i];
          if (officer) {
            data.push(officer);
          }
        }
        this.setState({
          officers: data
        });
      });
  }

  render() {
    debugger;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={24}
      >
        {this.state.officers &&
          this.state.officers.map(officer => {
            return (
              <Grid item xs={4}>
                <Officer
                  description={officer.description}
                  photo_link={officer.photo_link}
                  name={officer.name}
                />
              </Grid>
            );
          })}
      </Grid>
    );
  }
}
