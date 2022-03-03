import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;