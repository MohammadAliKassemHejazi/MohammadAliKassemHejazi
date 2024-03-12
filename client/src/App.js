import React from "react";
import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";

import "swiper/css";
import "swiper/css/effect-fade"; // Make sure to import the required Swiper styles

import Three from "./components/Background/Three";
import Slider from "./components/UI/Slider";
import Home from "./components/layouts/HomePage";
import Work from "./components/layouts/WorkPage";

function App(props) {
  const [cursorVariant] = useState("default");

  const ref = props.reff;
  const mouse = useMouse(ref, {
    enterDelay: 170,
    leaveDelay: 170,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = Math.min(mouse.clientX, window.innerWidth - 50);
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 25,
      width: 25,
      fontSize: "16px",
      backgroundColor: "#000",
      x: mouseXPosition - 20,
      y: mouseYPosition - 10 + window.scrollY,

      transition: {
        type: "spring",
        mass: 1,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 80,
  };

  return (
    <Fragment>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      ></motion.div>
      <Three></Three>

      <Swiper autoHeight={true}>
        <SwiperSlide>
          <Home></Home>
        </SwiperSlide>

        <SwiperSlide>
          <Container>
            <Row>
              <Col sm={6}></Col>

              <Slider
                title={"Front-end"}
                subTitle={"3+ years of Experience"}
                btnName={"Education"}
                skills={[
                  { id: 0, title: "CSS, HTML, SCSS, JavaScript", value: 100 },
                  {
                    id: 1,
                    title:
                      "Bootstrap, JQuery, TailWind, Third Party Packages... ",
                    value: 85,
                  },
                  { id: 2, title: "Next.js", value: 95 },
                  { id: 3, title: "React.js", value: 90 },
                ]}
              ></Slider>

              <Slider
                title={"Back-End"}
                subTitle={"3+ years of Experience"}
                btnName={"Education"}
                skills={[
                  { id: 1, title: "Node.js, Express, JavaScript", value: 100 },
                  { id: 2, title: ".NET framework, VB, .NET 5", value: 50 },
                  {
                    id: 3,
                    title:
                      "MVC, MVVM, Web sockets, Payment Gateways, Third Party Packages... ",
                    value: 85,
                  },
                  { id: 4, title: "SQL, MySQL, MongoDB, DynamoDB", value: 95 },
                  {
                    id: 5,
                    title: "Authentication, RESTful API, Security",
                    value: 90,
                  },
                ]}
              ></Slider>
            </Row>

            <Row className="mb-5">
              <Col sm={6}></Col>
              <Slider
                title={"Project Management"}
                subTitle={"3+ years of Experience"}
                btnName={"Education"}
                skills={[
                  { id: 6, title: "ClickUp", value: 100 },
                  { id: 7, title: "Git, GitHub", value: 100 },
                ]}
              ></Slider>
              <Slider
                title={"Cloud Infrastructure"}
                subTitle={"1 year of Experience"}
                btnName={"Education"}
                skills={[
                  {
                    id: 8,
                    title: "Docker, Docker Compose, Kubernetes",
                    value: 70,
                  },
                  { id: 9, title: "AWS, S3, Ec2, EKS, EFS, ECS ", value: 60 },
                ]}
              ></Slider>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Work></Work>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
}

export default App;
