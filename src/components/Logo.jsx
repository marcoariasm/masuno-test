import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ImageLogo from "./ImageLogo";
import Row from "react-bootstrap/Row";
import logoLight from "../shared/images/Group 25.png";

const Logo = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center pt-1"
      style={{ backgroundColor: "#1A36A8", height: 117 }}
    >
      <Row>
        <Col>
          <ImageLogo src={logoLight} />
        </Col>
      </Row>
    </Container>
  );
};

export default Logo;
