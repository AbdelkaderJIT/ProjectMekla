import React ,{useState,useEffect}from 'react'
import { registeUser } from '../../redux/userAuth/actions'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Nav} from "react-bootstrap";






function RegisterModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[name,setName]=useState("")
  const[lastName,setLastName]=useState("")
  const[password,setPassword]=useState("")

  const toggle=()=>{
    setModal(!modal)
    console.log(modal,"MODAL STATUS")
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()

const isAuth=useSelector((state)=>state.auth.isAuth)

  const errors=useSelector((state)=>state.auth.err)

  
console.log(errors,"hellllo")
console.log(isAuth,"kkkkkkkkk")



  const handleRegister=async ()=>{
     
    const formdata={name,email,password,lastName}
    dispatch(registeUser(formdata,navigate))

 if ( await isAuth === true){
toggle()
 }

  }

  
  return (
    <div>


          <Nav.Item>
          <Nav.Link href="#" onClick={toggle} >
          
     
          <strong className="navbar-text mr-3"> Register</strong> 
       
          </Nav.Link>
          </Nav.Item>

      <Modal show={modal} onHide={toggle} >
        <Modal.Header toggle={toggle}>Register</Modal.Header>
        <Modal.Body>

<Form>

<Form.Group className="mb-3" >
  <Form.Label> First Name </Form.Label>

  <Form.Control type="text" placeholder="First Name" onChange={(event)=>setName(event.target.value)} />
  
  </Form.Group>


<Form.Group className="mb-3" >
  <Form.Label> Last Name </Form.Label>

  <Form.Control type="text" placeholder="Last Name" onChange={(event)=>setLastName(event.target.value)} />
  
  </Form.Group>


<Form.Group className="mb-3" >
  <Form.Label> Email address </Form.Label>

  <Form.Control type="email" placeholder="name@example.com"  onChange={(event)=>setEmail(event.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(event)=>setPassword(event.target.value)} />
      </Form.Group>

 
  
  


{errors && (
                <Alert color="danger">
                  {errors.map((err) => (
                    <div >{err.msg}</div>
                  ))}
                </Alert>
              )}

</Form>   

        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={handleRegister}>
            register
          </Button>{' '}
          <Button variant="danger" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default RegisterModal
