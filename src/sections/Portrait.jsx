import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/Row";
import FormData from "../components/FormData";
import ImageLogo from "../components/ImageLogo";
import Coupon from "../components/Coupon";
import iconsGroup1 from "../shared/images/iconsGroup1.png";
import logoLight from "../shared/images/Group 25.png";

import underlined from "../shared/images/Subrayado Rojo.png";

const Portrait = () => {
  return (
    <Container style={{ backgroundColor: "#1A36A8" }}>
      <Row>
        <Col
          style={{ height: 117 }}
          className="d-flex justify-content-center align-items-center pt-1"
        >
          <ImageLogo src={logoLight} />
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "1px red solid" }} className="p-5">
          {/* titles and coupon */}
          <Image src={iconsGroup1} />
          <p className="portrait__info px-2">es hora de</p>
          <p className="portrait__title my-4">CYBER DAYS</p>
          <p className="portrait__subtitle">en</p>
          <span>
            <span className="portrait__underlined mx-3">Más uno</span>
            <Image className="portrait__line" src={underlined} />
          </span>
          <br />
          <p className="portrait__dates my-4">Del 28 al 30 de marzo</p>
          <Coupon />
        </Col>
        <Col style={{ border: "1px red solid" }} className="p-5">
          {/* form */}
          <FormData />
        </Col>
      </Row>
    </Container>
  );
};

export default Portrait;
