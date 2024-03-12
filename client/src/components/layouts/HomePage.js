import React, { Fragment } from "react";


import { Container, Row, Col } from "react-bootstrap";
import styles from "./HomePage.module.css";

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import imagesrc from "../../assets/mohammad.jpg";


import "../../App.scss";

function HomePage() {
  return (
    <Fragment>
      <Container fluid className="100vh">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} lg={12} className="font-monospace text-muted m-1">
            <h6 className={`${styles.letterspace} `}>
              M.A.K.H<strong>S://~</strong>
            </h6>
            <span>Full-stack web developer</span>
            <br />
            <span>Mobile App</span>
          </Col>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 4, order: 2 }}
            lg={{ span: 4, order: 0 }}
          >
            <div className="text-center">
              <h1
                className={`${styles.glitch} ${styles.heading} `}
                data-text="<Coder>"
              >
                &#60;Coder&#62;
              </h1>

              <p className={`${styles.description} "lead"`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          </Col>
          <Col md={12} sm={12} xs={12} lg={4} className="text-center">
            <div className={styles.image}>
              <img
                src={imagesrc}
                alt="An Image showing Mohammad"
                width={500}
                height={500}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="text-center">
              <h1
                className={`${styles.glitch} ${styles.heading} `}
                data-text="Desinger"
                style={{ textDecoration: "line-through" }}
              >
                Desinger
              </h1>
              <p className={`${styles.description} "lead"`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          </Col>
          <Col xs={{ span: 6, order: "last" }} lg={12} className="m-3">
            <div className="d-flex justify-content-center align-items-center ">
              <div className={`${styles.typewriter} `}>
                <h1 className={styles.typing}>Mohammad Ali Kassem Hijazi.</h1>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 12, order: "last" }} lg={12}>
            <footer>
              <IconContext.Provider
                value={{ className: styles["react-icons"] }}
              >
                <div className={styles["social-menu"]}>
                  <ul>
                    <li className={styles["fa-gi"]}>
                      <div>
                        <a href="https://github.com/sanketbodke" target="blank">
                          <FaGithub className={styles.github} />
                        </a>
                      </div>
                    </li>
                    <li className={styles["fa-in"]}>
                      <div>
                        <a
                          href="https://www.instagram.com/imsanketbodke/"
                          target="blank"
                        >
                          <FaInstagram className={styles.instagram} />
                        </a>
                      </div>
                    </li>
                    <li className={styles["fa-li"]}>
                      <div>
                        <a
                          href="https://www.linkedin.com/in/sanket-bodake-995b5b205/"
                          target="blank"
                        >
                          <FaLinkedinIn className={styles.linkedin} />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </IconContext.Provider>
            </footer>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default HomePage;
