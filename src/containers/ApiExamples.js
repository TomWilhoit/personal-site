import React from "react";

const ApiExamples = ({changePage}) => {
  return (
    <div className="ApiExamples">
        <div>ApiExamples</div>
        <button onClick={() => changePage('App')}>Back to Home</button>
    </div>
  );
}

export default ApiExamples;
