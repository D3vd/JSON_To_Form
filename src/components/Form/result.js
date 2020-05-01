import React, { useEffect, useState } from "react";

import styles from "./form.module.scss";

function Result({ json }) {
  let [result, setResult] = useState([]);

  useEffect(() => {
    let result = [];
    for (let key in json) {
      result.push({
        key,
        value: json[key],
      });
    }

    setResult(result);
  }, [json]);

  return (
    <div className={styles.results}>
      <h1>Result From Your Submitted Form</h1>
      {result.map((r) => (
        <div className={styles.result} key={r.key}>
          <h1>{r.key}</h1>
          <h2>{r.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default Result;
