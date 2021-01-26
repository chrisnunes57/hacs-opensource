import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
// import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from "./components/Footer";
import AdminPage from './components/AdminPage';
import Redirect from './components/Redirect';

function App() {

  const [user, updateUser] = useState(null);
  const [siteContent, updateSiteContent] = useState({memberOfTheWeek: null, meetingLink: {link: null}});

  const loginUser = (loginData) => {
    fetch("https://enigmatic-shore-29691.herokuapp.com/login", {
        method: "POST", // or 'PUT'
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " + btoa(`${loginData.username}:${loginData.password}`),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          updateUser(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

  // an initial api call to get our member of the week
  useEffect( () => {
    fetch("https://enigmatic-shore-29691.herokuapp.com/siteContent")
      .then((response) => response.json())
      .then((data) => {
        data.officers.members.sort( (a, b) => b.order - a.order);
        updateSiteContent(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navigation /> */}
          <Header />

          <div className="main-content">
            <Switch>
              <Route path="/meet">
                <Redirect link={siteContent.meetingLink.link} />
              </Route>
              <Route path="/develop">
                <Redirect link={"https://forms.gle/c7vJN8uMALUwoGbH9"} />
              </Route>
              <Route path="/admin">
                <AdminPage
                  user={user}
                  loginUser={loginUser}
                  siteContent={siteContent}
                />
              </Route>
              <Route path="/">
                <Homepage memberOfWeek={siteContent.memberOfTheWeek} officers={siteContent.officers ? siteContent.officers.members : []} />
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
