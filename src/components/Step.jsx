import React from "react";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Step = ({ title, subtitle, text, image }) => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h2 className="step__title">{title}</h2>
          <Image src={image} />
          <h3 className="step__subtitle">{subtitle}</h3>
          <p className="step__text">{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Step;
