import React, { useState } from "react";

import styles from "./input.module.scss";

function Input({ json, setJson, changeRoute, setError }) {
  const [input, setInput] = useState(JSON.stringify(json, null, 2));

  const handleSubmit = () => {
    try {
      setJson(JSON.parse(input));
      changeRoute(true);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Input Json</h1>
      <textarea
        className={styles.textarea}
        name="json"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={styles.submit} onClick={handleSubmit}>
        Generate Form &rarr;
      </div>
    </div>
  );
}

export default Input;
