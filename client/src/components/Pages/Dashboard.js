import React from 'react'
import { useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Dashboard() {

  const user=useSelector((state)=>state.auth.user)

  const isthistheAdmin = () => {
    
  }

  return (

    <div style={{marginTop:"100px",marginLeft:"200px"}}>
     
      <h1 style={{ marginTop:"200px"}}>Profile Menu</h1>
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          User Name :
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={user && user.name} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          User Last  Name :
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={ user && user.lastName} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          User Email :
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={user && user.email} />
        </Col>
      </Form.Group>
      </Form>
    
      
    </div>
    
  )
}

export default Dashboard
