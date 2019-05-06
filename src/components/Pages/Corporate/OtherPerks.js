import React from "react";
import Grid from "@material-ui/core/Grid/index";
import IconSubHeader from "../../Style/IconSubheader"
import SubHeader from "../../Style/SubHeader"

import { ReactComponent as TextDocument } from "../Corporate/Icons/text-document.svg";
import { ReactComponent as BriefCase } from "../Corporate/Icons/briefcase.svg";
import { ReactComponent as Shirt } from "../Corporate/Icons/shirt.svg";


export default class OtherPerks extends React.Component {
  render() {
    return (
      <Grid container direction="row" spacing={0}>
        <Grid item xs={12}>
          <SubHeader>Other Perks</SubHeader>
        </Grid>
        <Grid item xs={4} spacing={20} >
            <Grid item xs={12} spacing={0} container justify={"center"}> 
                <TextDocument style={{width: 140,  height: 140}}/> 
            </Grid>
            <IconSubHeader> Resume Book</IconSubHeader>
        </Grid>
        <Grid item xs={4} spacing={20}>
            <Grid item xs={12} spacing={0} container justify={"center"}> 
                <BriefCase style={{width: 140,  height: 140}}/> 
            </Grid>
            <IconSubHeader>Hire Us</IconSubHeader>
        </Grid>
        <Grid item xs={4} spacing={20}>
            <Grid item xs={12} spacing={0} container justify={"center"}> 
                <Shirt style={{width: 140,  height: 140}}/> 
            </Grid>
            <IconSubHeader>Recognized Sponsor</IconSubHeader>
        </Grid>
      </Grid>
    );
  }
}
