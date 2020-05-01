import React, { useState, useEffect } from "react";

import styles from "./form.module.scss";

function Form({ json }) {
  let [elements, setElements] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    elements = [];
    for (let key in json) {
      elements.push({
        key,
        value: json[key],
      });
    }
    setElements(elements);
  }, [json]);

  return (
    <div className={styles.container}>
      <form>
        {elements.map((element, index) => (
          <div key={index} className={styles.item}>
            {element.key}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Form;
