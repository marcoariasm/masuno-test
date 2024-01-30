import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
//styles
import icons from "../shared/images/Group 701.png";

const Ruler = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="d-flex justify-content-space-between">
          <hr className="ruler__line"></hr>
          <Image src={icons} className="px-3" />
          <hr className="ruler__line"></hr>
        </Col>
      </Row>
    </Container>
  );
};

export default Ruler;
