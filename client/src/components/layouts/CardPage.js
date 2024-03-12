import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Fragment } from "react";

function CardPage() {
  return (
    <Fragment>
      <h1 className="m-5 text-muted">TiTle:</h1>

      <Container
        fluid
        style={{ height: "100vh" }}
        className="justify-content-center"
      >
        <Row className="justify-content-center gap-5">
          <Col xs={12} lg="2">
            <Card border="light" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Light Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg="2">
            <Card border="light" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Light Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg="2">
            <Card border="light" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Light Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default CardPage;
