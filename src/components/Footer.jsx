import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import logo from "../shared/images/Group 25.png";

const Footer = () => {
  return (
    <Container style={{ backgroundColor: "#1A36A8" }}>
      <Row className="d-flex p-5">
        {/* about us */}
        <Col className="p-5" style={{ border: "1px red solid" }}>
          <Image src={logo} />
          <p className="footer__title">Nosotros</p>
          <p className="footer__text">Somos Mas Uno</p>
        </Col>
        {/* footer links */}
        <Col style={{ border: "1px red solid" }}>
          <p className="footer__title">Te informamos</p>
          <br />
          <ul>
            <li className="footer__text">Cras justo odio</li>
            <li className="footer__text">Dapibus ac facilisis in</li>
            <li className="footer__text">Morbi leo risus</li>
            <li className="footer__text">Porta ac consectetur ac</li>
            <li className="footer__text">Vestibulum at eros</li>
          </ul>
        </Col>
        {/* contact us */}
        <Col style={{ border: "1px red solid" }}>
          <p className="footer__title">Contáctanos</p>
          <p className="footer__text">T 00000-0000</p>
          <p>f tw in</p>
          <br />
          <br />
          <p className="footer__text">&copy;2022 Mas Uno Lima - Peru</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
