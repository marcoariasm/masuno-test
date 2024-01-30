import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import logo from "../shared/images/Group 25.png";
import book from "../shared/images/libroreclamaciones 1.png";
import phone from "../shared/images/Vector.png";
import facebook from "../shared/images/Group 87.png";
import linkedIn from "../shared/images/Group 145.png";
import twitter from "../shared/images/Group 146.png";

const Footer = () => {
  return (
    <Container style={{ backgroundColor: "#1A36A8" }}>
      <Row className="d-flex p-5">
        {/* about us */}
        <Col className="p-5" style={{ border: "1px red solid" }}>
          <Image src={logo} />
          <p className="footer__title">Nosotros</p>
          <p className="footer__copyright">Somos Mas Uno</p>
        </Col>
        {/* footer links */}
        <Col style={{ border: "1px red solid" }}>
          <p className="footer__title">Te informamos</p>
          <br />
          <ul>
            <li className="footer__copyright">Preguntas frecuentes</li>
            <li className="footer__copyright">Dapibus ac facilisis in</li>
            <li className="footer__copyright">Morbi leo risus</li>
            <li className="footer__copyright">Porta ac consectetur ac</li>
            <li className="footer__copyright">Vestibulum at eros</li>
            <Image src={book} className="my-3" />
          </ul>
        </Col>
        {/* contact us */}
        <Col style={{ border: "1px red solid" }}>
          <p className="footer__title">Contáctanos</p>
          <div className="p-2"></div>
          <Image src={phone} />
          <span className="footer__text px-2">00000-0000</span>
          <br />
          <div className="my-4">
            <Image src={facebook} className="footer__social" />
            <Image src={linkedIn} className="footer__social" />
            <Image src={twitter} className="footer__social" />
          </div>
          <p className="footer__copyright my-4">
            &copy;2022 Más Uno Lima - Peru
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
