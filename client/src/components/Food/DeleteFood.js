import React ,{useState}from 'react'
import {useDispatch, useSelector} from "react-redux"
import { deleteFood } from '../../redux/food/actions'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'







function DeleteFood({el}) {


   

  const[modal,setModal]=useState(false)
 

  const toggle=()=>{
    setModal(!modal)
    console.log(modal,"Delete MODAL STATUS")
  }

  const dispatch=useDispatch()

  const deletehandler=()=>{
    dispatch(deleteFood(el._id))
    toggle()
      }

  

  return (
    <div>


          
          <Button style={{margin:"5px"}} variant="danger" href="#" onClick={toggle} >
          
     
          <strong className="navbar-text mr-3"> Delete </strong> 
       
          </Button>
          

      <Modal show={modal} onHide={toggle} >
        <Modal.Header toggle={toggle}>Delete Food</Modal.Header>
        <Modal.Body>
            <h5 style={{marginBottom:"10px", color:"orange"}}>Delete Confirmation</h5>
            <h3> Do you really want to delete <span style={{color:"red"}}> {el.foodName} </span>  ? </h3>
        </Modal.Body>

        <Modal.Footer>
          <Button color="primary" variant="danger" onClick={deletehandler}>
            Yes
          </Button>{' '}
          <Button color="secondary" variant="warning" onClick={toggle}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default DeleteFood
