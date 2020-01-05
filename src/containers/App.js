import React, { Component } from "react";
import Home from "./Home";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import ApiExamples from "./ApiExamples";
import Projects from "./Projects";
import { Route } from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      placeHolder: true
    };
  }

  render() {
    return (
      <main className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about_me" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/api_examples" component={ApiExamples} />
      </main>
    );
  }
}

export default App;
