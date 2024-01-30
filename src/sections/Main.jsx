import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
//components
import Ruler from "../components/Ruler";
import Step from "../components/Step";
import ImageLogo from "../components/ImageLogo";
import Slider from "../components/Slider";
//styles
import logoDark from "../shared/images/Group 25 (1).png";
import step1 from "../shared/images/Group 173.png";
import step2 from "../shared/images/Group 174.png";
import step3 from "../shared/images/Group 175.png";
import underlined from "../shared/images/Subrayado Rojo.png";
// content
import text from "../content/text";

const { main, step1Content, step2Content, step3Content } = text;

const Main = () => {
  return (
    <Container>
      {/* steps */}
      <Row>
        <Col className="text-center">
          <Ruler />
          <p className="main__title">{main.title}</p>
          <Image src={underlined} />
          <p className="main__text">
            {main.text1}&nbsp;
            <span className="main__text--red">{main.text2}</span>&nbsp;
            {main.text3}
          </p>
          <br />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Step
            title={step1Content.title}
            subtitle={step1Content.subtitle}
            text={step1Content.text}
            image={step1}
          />
          <Step
            title={step2Content.title}
            subtitle={step2Content.subtitle}
            text={step2Content.text}
            image={step2}
          />
          <Step
            title={step3Content.title}
            subtitle={step3Content.subtitle}
            text={step3Content.text}
            image={step3}
          />
        </Col>
        <Ruler />

        {/* technologies */}
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <ImageLogo src={logoDark} />
          </Col>
        </Row>
        <Row>
          <Col className="text-center my-5">
            <p className="main__title">{main.technologies}</p>
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
