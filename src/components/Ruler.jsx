import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import icons from "../shared/images/Group 701.png";

const Ruler = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div
            style={{
              borderTop: "2px solid #1A36A8",
              width: "1230px",
              display: "inline",
            }}
          ></div>
          <Image src={icons} />
          <div
            style={{
              borderTop: "2px solid #1A36A8",
              width: "1230px",
              display: "inline",
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ruler;
