import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Drop.module.scss";
function Drop() {
  const onDragOver = (e) => {
    console.log(e);
  };
  return (
    <Row>
      <Col>
        <div onDragEnter={onDragOver} className={styles.drop}></div>
      </Col>
    </Row>
  );
}

export default Drop;
