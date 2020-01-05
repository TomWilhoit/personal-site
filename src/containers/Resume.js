import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Resume.css"

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div>Resume</div>
        <Link className="page_link" to="/">Home</Link>
      </div>
    );
  }
}

