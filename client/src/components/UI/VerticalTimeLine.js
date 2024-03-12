import React from "react";
import styles from "./VerticalTimeLine.module.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function VerticalTimeLine(props) {
  return (
    <VerticalTimeline
      className={`${styles.opacit} ${styles["border-color"]}  p-5  rounded `}
      lineColor="#7D6000"
    >
      {props.Experience &&
        props.Experience.map((n) => (
          <VerticalTimelineElement
            key={n.id}
            className={`vertical-timeline-element--work`}
            contentStyle={{
              background: "#282828",
              color: "#909090",
              boxShadow:
                "0 0 0 1px #7D6000, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #7D6000",
            }}
            date={n.date}
            iconStyle={{
              background: "#282828",
              color: "#7D6000",
              boxShadow:
                "0 0 0 4px #FFD700, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
            }}
            icon={n.iconsSrc}
          >
            <h3 className={`vertical-timeline-element-title ${styles.gold}`}>
              {n.title}
            </h3>
            <h4
              className={`vertical-timeline-element-subtitle ${styles["gold"]}`}
            >
              {n.location}
            </h4>
            <p>{n.description}</p>
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
}

export default VerticalTimeLine;
