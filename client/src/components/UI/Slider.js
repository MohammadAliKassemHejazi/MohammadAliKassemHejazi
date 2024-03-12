import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { Col } from "react-bootstrap";

import styles from "./Slider.module.css";

function Slider(props) {
  const [openSlider, setOpenSlider] = useState(false);
  const dropdownMotion = {
    hidden: {
      opacity: 0,
      x: "-100px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  const slidingMotion = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
      },
    },
  };
  const slidingChildMotion = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
      },
    },
  };

  const updatingBarMotion = (width) => ({
    hidden: {
      width: "0%",
    },
    visible: {
      width: `${width}%`,
      transition: {
        delay: 1.6,
      },
    },
  });

  const openSliderHandler = () => {
    setOpenSlider((prev) => {
      return !prev;
    });
  };
  return (
    <Fragment>
      <Col lg={6} className={`${styles.margin}  p-2`}>
        <div className="d-flex justify-content-between mb-1">
          <div className="d-flex flex-column">
            <p className="h1">{props.title}</p>
            <p className="h6 p1">{props.subTitle}</p>
          </div>
          <button
            className={"btn btn-outline-dark "}
            onClick={openSliderHandler}
          >
            <strong>{props.btnName}</strong>
          </button>
        </div>
        {openSlider && (
          <motion.div
            className="bg-cutome p-3"
            variants={dropdownMotion}
            animate="visible"
            initial="hidden"
          >
            {props.skills &&
              props.skills.map((skill) => {
                return (
                  <motion.div variants={slidingMotion} key={skill.id}>
                    <motion.div className="d-flex justify-content-between">
                      <p className="lead white-text">{skill.title}</p>
                      <p className="white-text">{skill.value}%</p>
                    </motion.div>
                    <motion.div variants={slidingChildMotion}>
                      <div className={styles["bar-wrap"]}>
                        <motion.div
                          className={styles.bar}
                          variants={updatingBarMotion(skill.value)}
                        ></motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
          </motion.div>
        )}
      </Col>
    </Fragment>
  );
}

export default Slider;
