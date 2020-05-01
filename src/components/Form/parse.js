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
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <select name={key} id={key} required>
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
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="number" name={key} id={key} required />
      </div>
    );
  } else if (value.match(/yyyy|mm|dd/g)) {
    // Check for Date
    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="date" name={key} id={key} required />
      </div>
    );
  } else if (value.split(/\//g).length > 1) {
    // Check for Radio
    let options = value.split(/\//g);

    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        {options.map((option) => (
          <div className={styles.radio} key={option}>
            <input type="radio" name={key} id={key} required />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    );
  } else if (value.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g)) {
    // Check for Color
    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="color" name={key} id={key} required />
      </div>
    );
  } else if (value.match(/file /g)) {
    // Check for File
    let fileType = value.split(" ")[2].slice(0, -1);

    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="file" accept={`image/${fileType}`} id={key} required />
      </div>
    );
  } else if (value.match(/(?:[01]\d|2[0123]):(?:[012345]\d) (AM|PM)/g)) {
    // Check for time
    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="time" name={key} id={key} required />
      </div>
    );
  } else if (value.match(/\S+@\S+\.\S+/g)) {
    // Check for email
    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="email" name={key} id={key} required />
      </div>
    );
  } else if (value.match(/URL|url/g)) {
    // Check for URL
    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="url" name={key} id={key} required />
      </div>
    );
  } else if (value.match(/^([0-9]*)-([0-9]*)$/g)) {
    // Check for Range
    let range = value.split("-");

    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input
          type="range"
          name={key}
          min={range[0]}
          max={range[1]}
          id={key}
          required
        />
      </div>
    );
  } else {
    // Fallback for text
    return (
      <div className={styles.item} key={key}>
        <label htmlFor={key}>{key}</label>
        <input type="text" name={key} id={key} required />
      </div>
    );
  }
};

export default ParseElement;
