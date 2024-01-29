import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Footer = () => {
  return (
    <Container style={{backgroundColor: '#1A36A8'}}>
      <Row className='d-flex'>
        <Col xs style={{border: '1px red solid'}}>Content</Col>
        <Col xs style={{border: '1px red solid'}}>Content</Col>
        <Col xs style={{border: '1px red solid'}}>Content</Col>
      </Row>
    </Container>
  )
}

export default Footer