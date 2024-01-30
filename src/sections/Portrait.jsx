import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// components
import FormData from "../components/FormData";
import ImageLogo from "../components/ImageLogo";
import PortraitLeft from "./PortraitLeft";
// styles
import logoLight from "../shared/images/Group 25.png";

const Portrait = () => {
  return (
    <Container className="portrait__background">
      <Row>
        <Col className="portrait__top d-flex justify-content-center align-items-center pt-1">
          <ImageLogo src={logoLight} />
        </Col>
      </Row>
      <Row>
        <Col className="p-5">
          <PortraitLeft />
        </Col>
        <Col className="py-5 px-4">
          <FormData />
        </Col>
      </Row>
    </Container>
  );
};

export default Portrait;
