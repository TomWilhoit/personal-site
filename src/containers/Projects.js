import React from "react";

const Projects = ({changePage}) => {
  return (
    <div className="Projects">
        <div>Projects</div>
        <button onClick={() => changePage('App')}>Back to Home</button>
    </div>
  );
}

export default Projects;
