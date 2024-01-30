import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Image from "react-bootstrap/esm/Image";
import underlined3 from "../shared/images/Subrayado Rojo (1).png";
import captcha from "../shared/images/image 1.png";

const FormData = () => {
  return (
    <Card style={{ borderRadius: 6 }}>
      <Card.Body>
        <Card.Title>
          <p className="form__title">Completa tus datos</p>
          <Image src={underlined3} />
        </Card.Title>
        <Card.Text>
          <Form>
            <Form.Group
              className="mb-3 col-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ingrese sus nombres" />
            </Form.Group>
            <Form.Group
              className="mb-3 col-6"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Ingrese sus apellidos" />
            </Form.Group>
            <Form.Group
              className="mb-3 col-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Teléfono celular</Form.Label>
              <Form.Control type="text" placeholder="Ingrese sus nombres" />
            </Form.Group>
            <Form.Group
              className="mb-3 col-6"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="text" placeholder="Ingrese sus nombres" />
            </Form.Group>
            {/* <Form.Control aria-label="Text input with checkbox"> */}
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup>
            {/* </Form.Control> */}
            <Image src={captcha} />
          </Form>
        </Card.Text>
        <Button className="btn btn-secondary btn-lg" disabled>
          Registrarme
        </Button>
        <p className="form__text text-center">
          Aprovecha las mejores ofertas y descuentos en cerdo, congelados,
          embutidos <span className="form__text--red">y mucho más</span>. No te
          pierdas de nada estos Cyberdays registrándote y obteniendo grandes
          descuentos exclusivos.
        </p>
      </Card.Body>
    </Card>
  );
};

export default FormData;
