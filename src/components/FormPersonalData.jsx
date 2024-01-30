import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";

const FormPersonalData = () => {
  return (
    <Card style={{ borderRadius: 6 }}>
      <Card.Body>
        <Card.Title>Completa tus datos</Card.Title>
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
              <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup>
            </Form.Group>
            <Form.Control aria-label="Text input with checkbox" />
          </Form>
        </Card.Text>
        <Button>Text</Button>
      </Card.Body>
    </Card>
  );
};

export default FormPersonalData;
