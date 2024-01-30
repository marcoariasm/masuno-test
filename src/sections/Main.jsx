import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Ruler from "../components/Ruler";
import Step from "../components/Step";
import ImageLogo from "../components/ImageLogo";
import Slider from "../components/Slider";
import Image from "react-bootstrap/esm/Image";
import logoDark from "../shared/images/Group 25 (1).png";
import step1 from "../shared/images/Group 173.png";
import step2 from "../shared/images/Group 174.png";
import step3 from "../shared/images/Group 175.png";
import underlined from "../shared/images/Subrayado Rojo.png";

const Main = () => {
  return (
    <Container style={{ border: "1px red solid" }}>
      <Row>
        {/* steps */}
        <Col className="text-center">
          <Ruler />
          <p className="main__header">
            ¿Cómo obtengo el descuento por Cyber Days?
          </p>
          <Image src={underlined} />
          <p className="main__text">
            Para adquirir nuestro descuento especial por&nbsp;
            <span className="main__text--red">Cyber Days</span>&nbsp; sigue los
            siguientes pasos
          </p>
          <br />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Step
            title={"Paso 1"}
            subtitle={"Regístrate"}
            text="Completa el formulario con tus datos personales y acepta los términos."
            image={step1}
          />
          <Step
            title={"Paso 2"}
            subtitle={"Recibe un cupón"}
            text="Recibirás un correo electrónico donde podrás ver el cupón de descuento."
            image={step2}
          />
          <Step
            title={"Paso 3"}
            subtitle={"Empieza a ahorrar"}
            text="¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en nuestra tienda online."
            image={step3}
          />
        </Col>
        <Ruler />
        <Row>
          {/* technologies */}
          <Col
            className="d-flex justify-content-center align-items-center"
            style={{ border: "1px red solid" }}
          >
            <ImageLogo src={logoDark} />
          </Col>
        </Row>
        <Row>
          <Col className="text-center my-5">
            <p className="main__header">Las mejores tecnologías de Más Uno</p>
            <Image src={underlined} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Slider />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Main;
