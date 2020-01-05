import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/AboutMe.css"

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div>IT'S ALL ABOUT ME</div>
        <Link className="page_link" to="/">Home</Link>
      </div>
    );
  }
}
