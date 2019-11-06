import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListUsers from "./components/ListUsers/ListUsers";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListPictures from "./components/ListPictures/ListPictures";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ListUsers} />
        <Route exact path="/pictures/:userId" component={ListPictures} />
      </Router>
    </div>
  );
}

export default App;
