import React from "react";

const Documents = ({changePage}) => {
  return (
    <div className="Documents">
        <div>Documents</div>
        <button onClick={() => changePage('App')}>Back to Home</button>
    </div>
  );
}

export default Documents;
