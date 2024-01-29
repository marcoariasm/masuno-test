import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import logo from '../shared/images/Group 25.png'
import Image from 'react-bootstrap/esm/Image'

const Footer = () => {
  return (
    <Container style={{backgroundColor: '#1A36A8'}}>
      <Row className='d-flex'>
        {/* logo */}
        <Col xs style={{border: '1px red solid'}}>
          <Image src={logo} />
          <p>Nosotros</p>
          <p>Somos Mas Uno</p>
        </Col>
        {/* links */}
        <Col xs style={{border: '1px red solid'}}>
          <p>Te informamos</p><br />
          <p>link1</p>
          <p>link2</p>
          <p>link3</p>
          <p>link4</p>
          <p>link5</p>
        </Col>
        {/* contacto */}
        <Col xs style={{border: '1px red solid'}}>
          <p>Contáctanos</p>
          <p>T 00000-0000</p>
          <p>f tw in</p><br /><br />
          <p>&copy;2022 Mas Uno Lima - Peru</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer