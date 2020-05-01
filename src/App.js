import React, { useState } from "react";

import Input from "./components/Input";

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

  return (
    <div className="App">
      <Input json={json} setJson={setJson} />
    </div>
  );
}

export default App;
