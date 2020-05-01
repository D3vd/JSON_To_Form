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
        <select name={key} required>
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
        <input type="number" name={key} required />
      </div>
    );
  } else if (value.match(/yyyy|mm|dd/g)) {
    // Check for Date
    return (
      <div className={styles.item}>
        <label htmlFor={key}>{key}</label>
        <input type="date" name={key} required />
      </div>
    );
  } else if (value.split(/\//g).length > 1) {
    // Check for Radio
    let options = value.split(/\//g);

    return (
      <div className={styles.item}>
        <label htmlFor={key}>{key}</label>
        {options.map((option) => (
          <div className={styles.radio} key={option}>
            <input type="radio" name={key} id={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    );
  } else if (value.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g)) {
    // Check for Color
    return (
      <div className={styles.item}>
        <label htmlFor={key}>{key}</label>
        <input type="color" name={key} />
      </div>
    );
  }
};

export default ParseElement;
