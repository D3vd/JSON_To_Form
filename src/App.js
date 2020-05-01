import React, { useState } from "react";

import Input from "./components/Input";
import Error from "./components/Error";

function App() {
  const [json, setJson] = useState({
    Name: "Grootan",
    Age: 23,
    Country: ["India", "Australia", "Kenya"],
    DOB: "yyyy/mm/dd",
    Gender: "male/female",
    "Languages Known": "Java, Ruby and Python",
    "Favourite Color": "#000",
    "Upload photograph": "file (only png)",
    Email: "foo@bob.in",
    "Start Time": "10:30 AM",
    "Website Address": "URL",
    Title: "Grootan Test",
    "Sub Title": "Round 2",
    CGPA: "1-10",
  });

  const [error, setError] = useState(false);
  const [routeForm, setRouteForm] = useState(false);

  return (
    <div className="App">
      {!error ? (
        !routeForm ? (
          <Input
            json={json}
            setJson={setJson}
            changeRoute={setRouteForm}
            setError={setError}
          />
        ) : (
          <h1>Test</h1>
        )
      ) : (
        <Error />
      )}
    </div>
  );
}

export default App;
