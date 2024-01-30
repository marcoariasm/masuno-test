import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import icons from "../shared/images/Group 701.png";

const Ruler = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="d-flex justify-content-space-between">
          <hr
            style={{
              // color: "#1A36A8",
              backgroundColor: "#1A36A8",
              height: "2px",
              width: "40%",
              opacity: 1,
              marginLeft: 10,
              marginRight: 10,
            }}
          ></hr>
          <Image src={icons} />
          <hr
            style={{
              // color: "#1A36A8",
              backgroundColor: "#1A36A8",
              height: "2px",
              width: "40%",
              opacity: 1,
              marginLeft: 10,
              marginRight: 10,
            }}
          ></hr>
        </Col>
      </Row>
    </Container>
  );
};

export default Ruler;
