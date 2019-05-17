import React from "react";
import Grid from "@material-ui/core/Grid";
import TargetPic from "../../images/target.png";


export default class NetworkingEventsPic extends React.Component {
    render () {
        return (
            <Grid container direction="row" justify="right" spacing={8}>
                <Grid 
                    item xs={12}>
                    <img src={TargetPic} alt="Logo"/>
                </Grid>
            </Grid>
        )
    }
}