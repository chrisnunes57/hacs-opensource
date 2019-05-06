import React from "react";
import SponsorPackage from "./SponsorPackage";
import Grid from "@material-ui/core/Grid/index";
import { ListItemText } from "@material-ui/core";
import SubHeader from "../../Style/SubHeader";
import TextStyle from "../../Style/TextStyle";



export default class EventsNoPics extends React.Component {
  render() {
    return (
      <Grid container direction="row" spacing={0}>
        <Grid item xs={4}>
           <SubHeader>Social Events</SubHeader>
           <TextStyle> Every day for the last three weeks you've been coming in here and you've been asking me how the tuna is. Now, it was crappy yesterday, it was crappy the day before and guess what? It hasn't changed. 
               I'll have the tuna.
               No crust?
               No crust.
           </TextStyle>
        </Grid>
        <Grid item xs={4} style={{background: "#606060"}}>
           <SubHeader>Techical Workshop</SubHeader>
           <TextStyle> Every day for the last three weeks you've been coming in here and you've been asking me how the tuna is. Now, it was crappy yesterday, it was crappy the day before and guess what? It hasn't changed. 
               I'll have the tuna.
               No crust?
               No crust.
           </TextStyle>
        </Grid>
        <Grid item xs={4}>
           <SubHeader>Mock Interview</SubHeader>
           <TextStyle> Every day for the last three weeks you've been coming in here and you've been asking me how the tuna is. Now, it was crappy yesterday, it was crappy the day before and guess what? It hasn't changed. 
               I'll have the tuna.
               No crust?
               No crust.
           </TextStyle>
        </Grid>

      </Grid>
    );
  }
}
