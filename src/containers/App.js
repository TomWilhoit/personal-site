import React from "react";
import Documents from "./Documents";
import AboutMe from "./AboutMe";
import ApiExamples from "./ApiExamples";
import Projects from "./Projects";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <text>Home</text>
        <Documents />
        <AboutMe />
        <ApiExamples />
        <Projects/>
      </header>
    </div>
  );
}

export default App;
