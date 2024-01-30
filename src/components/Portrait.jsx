import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FormPersonalData from "./FormPersonalData";
import Coupon from "./Coupon";
import Image from "react-bootstrap/esm/Image";
import IconsGroup1 from "../shared/images/iconsGroup1.png";
import underlined from "../shared/images/Subrayado Rojo.png";

const Portrait = () => {
  return (
    <Container style={{ backgroundColor: "#1A36A8" }}>
      <Row>
        <Col style={{ border: "1px red solid" }} className="p-5">
          {/* titles and coupon */}
          <Image src={IconsGroup1} />
          <p className="portrait__info">es hora de</p>
          <br />
          <p className="portrait__title">CYBER DAYS</p>
          <br />
          <p className="portrait__subtitle">en</p>
          <p className="portrait__underlined">Más uno</p>
          <Image src={underlined} />
          <br />
          <p className="portrait__dates">Del 28 al 30 de marzo</p>
          <Coupon />
        </Col>
        <Col style={{ border: "1px red solid" }} className="p-5">
          {/* form */}
          <FormPersonalData />
        </Col>
      </Row>
    </Container>
  );
};

export default Portrait;
