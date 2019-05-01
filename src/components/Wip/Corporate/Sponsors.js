import React from "react";
import { SponsorList } from "../../../data/sponsorList";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { withStyles } from "@material-ui/core/styles";

const sponsors = SponsorList.sponsors;

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 500
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});
/**
 * The intent for this component is to hold the
 * list of SponsorIcon components that make up
 * all our sponsors. To complete this the sponsorList
 * under the data folder will need to be filled out properly.
 */
export default withStyles(styles)(
  class Sponsors extends React.Component {
    /**
    Use javascript's map function to
    list them out programmatically.
     */
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">Our Sponsors</ListSubheader>
            </GridListTile>
            {sponsors.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.icon} alt={tile.name} />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
    }
  }
);
