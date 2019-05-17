import React from "react";
import Grid from "@material-ui/core/Grid";
import SubHeader from "../../Style/SubHeader";

import { ReactComponent as HandShake } from "../Icons/hand-shake.svg";
import { ReactComponent as Happiness } from "src/Icons/happiness.svg";
import { ReactComponent as Help } from "src/Icons/help.svg";
import { ReactComponent as Knowledge } from "src/Icons/knowledge.svg";
import { ReactComponent as SoccerBall } from "src/Icons/soccer-ball-variant.svg";


export default class WhatWeDo extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" spacing={8}>
        <Grid item xs={12}>
          <SubHeader>What We Do</SubHeader>
        </Grid>
      <Grid item xs={4} spacing={20}>
        <Grid item xs={2.4} spacing={0} container justify={"center"}>
          <SoccerBall style={{ width: 140, height: 140 }} />
        </Grid>
      </Grid>
      <Grid item xs={4} spacing={20}>
        <Grid item xs={2.4} spacing={0} container justify={"center"}>
          <Knowledge style={{ width: 140, height: 140 }} />
        </Grid>
      </Grid>
      <Grid item xs={4} spacing={20}>
        <Grid item xs={2.4} spacing={0} container justify={"center"}>
          <Help style={{ width: 140, height: 140 }} />
        </Grid>
      </Grid>
      <Grid item xs={4} spacing={20}>
        <Grid item xs={2.4} spacing={0} container justify={"center"}>
          <Happiness style={{ width: 140, height: 140 }} />
        </Grid>
      </Grid>
      <Grid item xs={4} spacing={20}>
        <Grid item xs={2.4} spacing={0} container justify={"center"}>
          <HandShake style={{ width: 140, height: 140 }} />
        </Grid>
      </Grid>
      </Grid>
      )
    }
  }