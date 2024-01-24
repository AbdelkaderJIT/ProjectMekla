import React ,{useEffect, useState}from 'react'
import { loginUser } from '../../redux/userAuth/actions'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Nav} from "react-bootstrap";



function LoginModal() {

  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  

  const toggle=()=>{
    setModal(!modal)
    console.log(modal,"MODAL STATUS")
  }


  const isAuth=useSelector((state)=>state.auth.isAuth)
  const errors=useSelector((state)=>state.auth.err)
  


  const dispatch=useDispatch()
  const navigate=useNavigate()

 

  const handleLogin=async ()=> {
    const formdata={email,password}
    dispatch(loginUser(formdata,navigate))
    if (await isAuth === true) {
      toggle()
       }
  }

  return (
    <div>


          <Nav.Item>
          <Nav.Link href="#" onClick={toggle} >
     
          <strong className="navbar-text mr-3"> Login</strong> 
       
          </Nav.Link>
          </Nav.Item>
     

      <Modal show={modal} onHide={toggle} >
        <Modal.Header toggle={toggle}>Login</Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"  onChange={(event)=>setEmail(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
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
          <Button variant="warning" onClick={handleLogin}>
Login          </Button>
          <Button variant="danger" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default LoginModal


