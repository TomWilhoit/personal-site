import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"

export default class Home extends Component {
  render() {
    return (
      <div className="home_container">
        <div>This is the homepage sucka</div>
        <Link className="page_link about_me_link" to="/about_me">
          About Me
        </Link>
        <Link className="page_link resume_link" to="/resume">
          Resume
        </Link>
        <Link className="page_link projects_link" to="/projects">
          Projects
        </Link>
        <Link className="page_link api_examples_link" to="/api_examples">
          API Examples
        </Link>
      </div>
    );
  }
}
