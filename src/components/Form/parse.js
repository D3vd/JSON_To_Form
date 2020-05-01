import React from "react";

import styles from "./form.module.scss";

const ParseElement = ({ key, value }) => {
  // Split the value with ',' and ' and '
  if (typeof value === "string") {
    let temp = value.split(/,| and /g);
    if (temp.length !== 1) value = temp;
  }

  if (Array.isArray(value)) {
    // Check if array for dropdown
    return (
      <div className={styles.item}>
        <label htmlFor={key}>{key}</label>
        <select name={key}>
          {value.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (typeof value === "number") {
    // Check for number
    return (
      <div className={styles.item}>
        <label htmlFor={key}>{key}</label>
        <input type="number" name={key} />
      </div>
    );
  }
};

export default ParseElement;
