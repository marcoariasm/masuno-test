import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
//styles
import captcha from "../shared/images/image 1.png";
import seal from "../shared/images/Cyber-Days-Sello-Empresa-Certificada-2022 1.png";
import underlined3 from "../shared/images/Subrayado Rojo (1).png";
// content
import text from "../content/text";

const { form } = text;

const FormData = () => {
  return (
    <Card className="form__card p-3">
      <Card.Body>
        <Image src={seal} className="portrait__seal" />
        <Card.Title>
          <p className="form__title">{form.title}</p>
          <Image src={underlined3} />
        </Card.Title>
        <Card.Text>
          <Form className="form">
            <Row>
              <Form.Group
                className="mb-3 col"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>{form.label1}</Form.Label>
                <Form.Control type="text" placeholder="Ingrese sus nombres" />
              </Form.Group>
              <Form.Group
                className="mb-3 col"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>{form.label2}</Form.Label>
                <Form.Control type="text" placeholder="Ingrese sus apellidos" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                className="mb-3 col"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>{form.label3}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su teléfono celular"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>{form.label4}</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Select aria-label="select" className="mb-3 col fix-select">
                <option>{form.select}</option>
                <option value="1">Pollo</option>
                <option value="2">Cerdo</option>
                <option value="3">Embutidos</option>
              </Form.Select>
              <Image src={captcha} className="mb-3 col" />
            </Row>
            <Row>
              <InputGroup>
                <Form.Check type="checkbox" label={form.legal1} />
                &nbsp;
                <a className="form__links" href="_blank">
                  {form.linklegal1}
                </a>
                <br />
              </InputGroup>
              <InputGroup>
                <Form.Check type="checkbox" label={form.legal2} />
                &nbsp;
                <a className="form__links" href="_blank">
                  {form.linklegal2}
                </a>
              </InputGroup>
            </Row>
          </Form>
          <Row className="text-center m-4">
            <Col>
              <Button className="btn btn-lg btn-form">{form.sendButton}</Button>
            </Col>
          </Row>
          <Row className="text-centert">
            <Col>
              <p className="form__text text-center">
                {form.text1}&nbsp;
                <span className="form__text--red">{form.text2}</span>&nbsp;
                {form.text3}
              </p>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FormData;
