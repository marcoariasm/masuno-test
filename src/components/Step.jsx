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
          <h2 className="step__title my-3">{title}</h2>
          <Image src={image} className="p-4" />
          <h3 className="step__subtitle my-3">{subtitle}</h3>
          <p className="step__text my-2">{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Step;
