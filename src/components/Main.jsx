import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Main = () => {
  return (
    <Container>
      <Row>
        {/* steps */}
        <Col style={{border: '1px red solid'}}>Content</Col>
        {/* info */}
        <Col style={{border: '1px red solid'}}>Content</Col>
      </Row>
    </Container>
  )
}

export default Main