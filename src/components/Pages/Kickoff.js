import React from "react";
import Grid from "@material-ui/core/Grid";

export default class Kickoff extends React.Component {
    render () {
        return (
            <Grid container direction="row" justify="right" spacing={8}>
                <Grid 
                    item xs={12}><h2>Kickoff</h2>
                    <p> To start every semester, HACS kicks off a general meeting 
                        to get everyone excited for the upcoming events of the year.  This allows 
                        new members to meet the officers and other existing members.
                    </p>
                </Grid>
            </Grid>
        )
    }
}