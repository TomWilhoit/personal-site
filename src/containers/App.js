import React, { Component } from "react";
import Documents from "./Documents";
import AboutMe from "./AboutMe";
import ApiExamples from "./ApiExamples";
import Projects from "./Projects";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "App"
    };
  }

  changePage = string => {
    this.setState({ currentPage: string });
  };

  render() {
    const { currentPage } = this.state;
    if (currentPage === "App") {
      return (
        <div className="App">
          <header className="App-header">
            <div>Home</div>
            <button onClick={() => this.changePage("AboutMe")}>About Me</button>
            <button onClick={() => this.changePage("Documents")}>
              Documents
            </button>
            <button onClick={() => this.changePage("Projects")}>
              Projects
            </button>
            <button onClick={() => this.changePage("ApiExamples")}>
              Api Examples
            </button>
          </header>
        </div>
      );
    } else if (currentPage === "AboutMe") {
      return <AboutMe changePage={this.changePage} />;
    } else if (currentPage === "Documents") {
      return <Documents changePage={this.changePage} />;
    } else if (currentPage === "Projects") {
      return <Projects changePage={this.changePage} />;
    } else if (currentPage === "ApiExamples") {
      return <ApiExamples changePage={this.changePage} />;
    }
  }
}

export default App;
