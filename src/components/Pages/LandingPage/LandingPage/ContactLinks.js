import React from "react";
import TwitterLogo from "./logoPics/twitter.png";
import FacebookLogo from "./logoPics/facebook.png";
import InstagramLogo from "./logoPics/instagram.png";
import EmailLogo from "./logoPics/email.png";
import Obfuscate from "react-obfuscate";
import Grid from "@material-ui/core/Grid/index";

export default class ContactLinks extends React.Component {
  render() {
    return (
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
        spacing={8}
      >
        {/*<h1 style={{ textAlign: "center", paddingTop: "25px" }}>*/}
        <Grid item xs={4}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://twitter.com/texashacs?lang=en"}
          >
            <img
              src={TwitterLogo}
              alt="Twitter Logo"
              style={{ width: "100px" }}
            />
          </a>
        </Grid>
        <Grid item xs={4}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.instagram.com/texashacs/"}
          >
            <img
              src={InstagramLogo}
              alt="Instagram Logo"
              style={{ width: "100px" }}
            />
          </a>
        </Grid>
        <Grid item xs={4}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.facebook.com/groups/TexasHACS"}
          >
            <img
              src={FacebookLogo}
              alt="Facebook Logo"
              style={{ width: "100px" }}
            />
          </a>
        </Grid>
        <Grid item xs={4}>
          <img src={EmailLogo} alt="Email Logo" style={{ width: "100px" }} />
          <Obfuscate element={"span"}>Texashacs@gmail.com</Obfuscate>
        </Grid>
      </Grid>
    );
  }
}
