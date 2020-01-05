import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/ApiExamples.css"

export default class ApiExamples extends Component {
  render() {
    return (
      <div>
        <div>Api Examples</div>
        <Link className="page_link" to="/">Home</Link>
      </div>
    );
  }
}
