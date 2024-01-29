import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import logo from '../shared/images/Group 25.png'

const Logo = () => {
  return (
    <Container style={{backgroundColor: '#1A36A8'}}>
      <Row>
        <Col style={{height: '117px'}}>
          <Image src={logo} />
        </Col>
      </Row>
    </Container>
  )
}

export default Logo