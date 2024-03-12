import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Form.module.css";

import { GrSend } from "react-icons/gr";
import Button from "../UI/Button";

function FormPage() {
  return (
    <Fragment>
      <h1 className="h1 text-center">Title</h1>
      <Container>
        <Row>
          <Col lg={12}>
            <div
              className={`${styles["wrap-btn"]} d-flex justify-content-center align-items-center`}
            >
              <Button className={styles.btn}>
                <GrSend></GrSend>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default FormPage;
