import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css"

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div>Projects</div>
        <Link className="page_link" to="/">Home</Link>
      </div>
    );
  }
}
