import React from "react";
import Grid from "@material-ui/core/Grid";

export default class NetworkingEvents extends React.Component {
    render () {
        return (
            <Grid container direction="row" justify="right" spacing={8}>
                <Grid 
                    item xs={12}><h2>Networking Events</h2>
                    <p> Each semester, HACS members are exclusively invited 
                        to a diversity networking event the day before career 
                        fair.  Your company can be invited to an intimate night of 
                        networking.
                    </p>
                </Grid>
            </Grid>
        )
    }
}