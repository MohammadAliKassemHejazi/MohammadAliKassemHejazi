import React  from "react";
import { Fragment } from "react";

import styles from "./WorkPage.module.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { MdWork, MdSchool } from "react-icons/md";
import { IconContext } from "react-icons/lib";

import VerticalTimeLine from "../UI/VerticalTimeLine";
import Cards from "../UI/Cards";

import { Experience ,cards} from "../data/Experience";

function WorkPage() {
  return (
    <Fragment>
      {/* <Container>
        <Row>
          <Col sm={12} className="text-center mt-5">
            <h1>Title</h1>
          </Col>
        </Row>
      </Container> */}
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        className="mt-5"
      >
        <Row className="mt-5">
          <Col sm={12}>
            <Nav
              variant="pills"
              className={`${styles["gap-5"]} } d-flex justify-content-center mt-5 `}
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className={`${styles["btn-trasparent"]}  d-flex align-items-center gap-3 `}
                >
                  <IconContext.Provider
                    value={{
                      color: "#000",
                      size: "1.5rem",
                      style: { verticalAlign: "middle" },
                    }}
                  >
                    <MdSchool></MdSchool>
                  </IconContext.Provider>
                  <h3 className={styles.black}>Education</h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className={`${styles["btn-trasparent"]} d-flex align-items-center gap-3 `}
                >
                  <IconContext.Provider
                    value={{
                      color: "#000",
                      size: "1.5rem",
                      style: { verticalAlign: "middle" },
                    }}
                  >
                    <MdWork></MdWork>
                  </IconContext.Provider>
                  <h3 className={styles.black}>Work</h3>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12} className="mt-5 ">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Container className="justify-content-center align-items-center">
                  <Row>
                    <Col sm={12}>
                      <VerticalTimeLine
                        Experience={Experience}
                      ></VerticalTimeLine>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Container className="justify-content-center align-items-center">
                  <Row className="justify-content-center align-items-center gap-1">
                    
                    {/* <Col sm={12} lg={6} className="mt-5">
                      <Cards className="rounded-3 rounded-top"></Cards>
                    </Col> */}

                      <Cards cards={cards}></Cards>
                

                    {/* <Col sm={12} lg={6} className="mt-5">
                      <Cards></Cards>
                    </Col> */}

                  </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
}

export default WorkPage;
