import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
//styles
import book from "../shared/images/libroreclamaciones 1.png";
import facebook from "../shared/images/Group 87.png";
import linkedIn from "../shared/images/Group 145.png";
import logo from "../shared/images/Group 25.png";
import phone from "../shared/images/Vector.png";
import twitter from "../shared/images/Group 146.png";
// content
import text from "../content/text";

const { footer } = text;

const Footer = () => {
  return (
    <Container className="footer__background">
      <Row className="d-flex p-5">
        {/* about us */}
        <Col className="p-5">
          <Image src={logo} />
          <p className="footer__title">{footer.title1}</p>
          <p className="footer__copyright">{footer.subtitle1}</p>
        </Col>
        {/* footer links */}
        <Col>
          <p className="footer__title">{footer.title2}</p>
          <br />
          <ul>
            <li className="footer__copyright">{footer.link1}</li>
            <li className="footer__copyright">{footer.link2}</li>
            <li className="footer__copyright">{footer.link3}</li>
            <li className="footer__copyright">{footer.link4}</li>
            <li className="footer__copyright">{footer.link5}</li>
            <Image src={book} className="my-3" />
          </ul>
        </Col>
        {/* contact us */}
        <Col>
          <p className="footer__title">{footer.title3}</p>
          <div className="p-2"></div>
          <Image src={phone} />
          <span className="footer__text px-2">{footer.phone}</span>
          <br />
          <div className="my-4">
            <Image src={facebook} className="footer__social" />
            <Image src={linkedIn} className="footer__social" />
            <Image src={twitter} className="footer__social" />
          </div>
          <p className="footer__copyright my-4">&copy;{footer.copyright}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
