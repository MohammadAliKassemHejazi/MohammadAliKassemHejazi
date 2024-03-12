import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const style = { ...props.style };
  console.log(style);
  return (
    <button onClick={props.onClick} style={{ style }} className={styles}>
      {props.value}
    </button>
  );
}

export default Button;
