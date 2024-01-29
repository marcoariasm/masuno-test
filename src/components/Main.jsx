import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Ruler from "./Ruler";
import Step from "./Step";
import ImageLogo from "./ImageLogo";
import InfoSlider from "./InfoSlider";

const Main = () => {
  return (
    <Container>
      <Row>
        {/* steps */}
        <Col style={{ border: "1px red solid" }}>
          <Ruler />
          <p>¿Cómo obtengo el descuento por Cyber Days?</p>
          <p>Para adquirir nuestro descuento...</p>
          <Step />
          <Step />
          <Step />
          <Ruler />
        </Col>
        <Row>
          {/* info */}
          <Col style={{ border: "1px red solid" }}>
            <ImageLogo />
            <p>Las mejores tecnologías de Más Uno</p>
            <br />
            <br />
            <br />
            <InfoSlider />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Main;
