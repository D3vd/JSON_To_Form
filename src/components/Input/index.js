import React from "react";

import styles from "./input.module.scss";

function Input({ json }) {
  return (
    <div className={styles.container}>
      <h1>Input Json</h1>
      <textarea className={styles.textarea} name="json">
        {JSON.stringify(json, null, 2)}
      </textarea>
      <div className={styles.submit}>Generate Form &rarr;</div>
    </div>
  );
}

export default Input;
