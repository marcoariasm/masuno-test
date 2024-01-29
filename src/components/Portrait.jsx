import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FormPersonalData from "./FormPersonalData";
import CouponSection from "./CouponSection";

const Portrait = () => {
  return (
    <Container style={{ backgroundColor: "#1A36A8" }}>
      <Row>
        {/* title */}
        <Col style={{ border: "1px red solid" }}>
          <p>Es hora de</p>
          <CouponSection />
        </Col>
        {/* form */}
        <Col style={{ border: "1px red solid" }}>
          <FormPersonalData />
        </Col>
      </Row>
    </Container>
  );
};

export default Portrait;
