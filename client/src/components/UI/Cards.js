import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import styles from "./Cards.module.css"
import { Col } from "react-bootstrap";
const cards = (porps) => {

  const { cards } = porps;
  
  return (
    <Fragment>
      {cards.map((card) => {
        return (
          <Col sm={12} lg={6} className="mt-5" key={card.id}>
            <Card className={styles.card}>
              <Card.Body className={styles["card-body"]}>
                <Card.Title className={styles["card-title"]}>
                  {card.title}
                </Card.Title>
                <Card.Subtitle className={styles["card-subtitle"]}>
                  {card.sub}
                </Card.Subtitle>
                <Card.Text className={styles["card-desc"]}>
                  {card.desc}
                </Card.Text>

                {card.linkTitle && card.link && (
                  <Card.Link href={card.link} className={styles.links}>
                    {card.linkTitle}
                  </Card.Link>
                )}

                {card.linkTitle2 && cards.link2 && (
                  <Card.Link href={card.link2} className={styles.links}>
                    {card.linkTitle2}
                  </Card.Link>
                )}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Fragment>
  );
};

export default cards;
