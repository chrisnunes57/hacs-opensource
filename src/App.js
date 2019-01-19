import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import "./App.css";
import Footer from "./components/Layouts/Footer";
import Routes from "./components/Routes/Routes";
import MyNavBar from "./components/Layouts/Header";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={""}>
        <React.Fragment>
          <MyNavBar className="App" />
          <Routes />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
