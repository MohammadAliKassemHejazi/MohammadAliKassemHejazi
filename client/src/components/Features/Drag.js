import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Drag.module.scss";
import image1 from "../../assets/images/Group 35.svg";
import image2 from "../../assets/images/Group 39.svg";
import image3 from "../../assets/images/Group 40.svg";
import image4 from "../../assets/images/Group 41.svg";
import image5 from "../../assets/images/Group 43.svg";
import image6 from "../../assets/images/Group 44.svg";
import image7 from "../../assets/images/Group 45.svg";
import image8 from "../../assets/images/Group 53.svg";
import image9 from "../../assets/images/Group 87.svg";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Drag() {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );
  return (
    <section>
      <Row>
        <motion.div style={{ background }}>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
          ></motion.div>
        </motion.div>
      </Row>
      <Row>
        <Col>
          <img
            src={image1}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
        <Col>
          <img
            src={image2}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
        <Col>
          <img
            src={image3}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
        <Col>
          <img
            src={image4}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
        <Col>
          <img
            src={image5}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
        <Col>
          <img
            src={image6}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
        <Col>
          <img
            src={image7}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
        <Col>
          <img
            src={image8}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
        <Col>
          <img
            src={image9}
            className={styles.hello}
            alt="image1"
            draggable
          ></img>
        </Col>
      </Row>
    </section>
  );
}

export default Drag;
