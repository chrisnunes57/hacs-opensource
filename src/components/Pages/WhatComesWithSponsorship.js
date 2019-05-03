import React from "react";
import Grid from "@material-ui/core/Grid";

export default class WhatComesWithSponsorship extends React.Component {
    render () {
        return (
            <Grid container direction="row" justify="center" spacing={8}>
                <Grid 
                    item xs={12}><h2>What Comes with Sponsorship</h2>
                </Grid>
            </Grid>
        )
    }
}