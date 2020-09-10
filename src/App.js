import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
// import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navigation /> */}
          <Header />
        
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
