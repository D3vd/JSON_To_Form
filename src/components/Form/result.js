import React from "react";

import styles from "./form.module.scss";

function Result({ json }) {
  return (
    <div className={styles.result}>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
}

export default Result;
