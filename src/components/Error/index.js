import React from "react";

function Error() {
  return (
    <div className="error">
      <h1>Error while parsing your JSON input</h1>
      <h2>Please make sure that the input format is correct and try again</h2>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
}

export default Error;
