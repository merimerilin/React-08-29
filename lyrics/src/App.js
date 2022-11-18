import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/navbar";
import Index from "./components/layout/navbar";
import { Components, Lyrics } from "react";

import { Provider } from './context';

import "./App.css";


class App extends Components {
  render(){
  return (
      <Provider>
        <Router>
          <React.Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Routes>
          </div>
        </React.Fragment>
        </Router>
      </Provider>
    
  );
 }
}

export default App;