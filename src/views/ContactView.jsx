import React from 'react'
import { Container, InputGroup, Form, Button } from 'react-bootstrap';

export default () => {
  return (
    <>
      <Container className="contactView text-center p-5">
        <h1 style={{ fontFamily: 'cursive', color: '#AAC4FF' }}>Contact Us</h1>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="First Name"
            aria-label="First Name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Last Name"
            aria-label="Last Name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="E-Mail"
            aria-label="E-Mail"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2" style={{backgroundColor: '#AAC4FF' }} className='text-light'>@example.com</InputGroup.Text>
        </InputGroup>

        <br></br> <br></br>
        <InputGroup>
          <InputGroup.Text style={{backgroundColor: '#AAC4FF' }} className='text-light' >Message</InputGroup.Text>
          <Form.Control as="textarea" aria-label="Message" />
        </InputGroup>

        <div className='p-5' >
          <Button className='text-light' style={{ fontFamily: 'cursive', backgroundColor: '#AAC4FF' }} variant="outline-light" size='lg'>
            Send
          </Button>
        </div>

      </Container>
    </>
  );
}