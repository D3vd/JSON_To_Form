import React, { useState, useEffect } from "react";

import ParseElement from "./parse";

import styles from "./form.module.scss";

function Form({ json }) {
  let [elements, setElements] = useState([]);
  let [title, setTitle] = useState("");
  let [subTitle, setSubTitle] = useState("");
  let [inputJSON, setInputJSON] = useState({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTitle(json["Title"]);
    setSubTitle(json["Sub Title"]);

    delete json["Title"];
    delete json["Sub Title"];

    elements = [];
    for (let key in json) {
      elements.push({
        key,
        value: json[key],
      });
    }
    setElements(elements);
  }, [json]);

  const submitHandler = (event) => {
    event.preventDefault();

    // Map Form key to input
    let inputJSON = {};

    elements.forEach((element, index) => {
      const input = event.target[index].value;
      const key = element.key;

      inputJSON[key] = input;
    });

    setInputJSON(inputJSON);
  };

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <form onSubmit={submitHandler}>
        {elements.map((element) => ParseElement(element))}
        <input className={styles.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
