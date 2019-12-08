import React from "react";

const AboutMe = ({changePage}) => {
  return (
    <div className="AboutMe">
        <div>AboutMe</div>
        <button onClick={() => changePage('App')}>Back to Home</button>
    </div>
  );
}

export default AboutMe;
