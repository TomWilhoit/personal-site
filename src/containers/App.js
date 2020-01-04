import React, { Component } from "react";
import Home from "./Home"
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import ApiExamples from "./ApiExamples";
import Projects from "./Projects";
import { Route } from 'react-router-dom'
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
    return(
      <main className='App'>
        <body>
        <Route exact path='/' component={Home}/>
        <Route path='/about_me' component={AboutMe} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/api_examples' component={ApiExamples} />
        </body>
      </main>
    )
    // const { currentPage } = this.state;
    // if (currentPage === "App") {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <div>Home</div>
    //         <button onClick={() => this.changePage("AboutMe")}>About Me</button>
    //         <button onClick={() => this.changePage("Documents")}>
    //           Documents
    //         </button>
    //         <button onClick={() => this.changePage("Projects")}>
    //           Projects
    //         </button>
    //         <button onClick={() => this.changePage("ApiExamples")}>
    //           Api Examples
    //         </button>
    //       </header>
    //     </div>
    //   );
    // } else if (currentPage === "AboutMe") {
    //   return <AboutMe changePage={this.changePage} />;
    // } else if (currentPage === "Documents") {
    //   return <Documents changePage={this.changePage} />;
    // } else if (currentPage === "Projects") {
    //   return <Projects changePage={this.changePage} />;
    // } else if (currentPage === "ApiExamples") {
    //   return <ApiExamples changePage={this.changePage} />;
    // }
  }
}

export default App;
