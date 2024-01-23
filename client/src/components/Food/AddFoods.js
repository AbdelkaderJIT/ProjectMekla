import React ,{useState}from 'react'
import {useDispatch, useSelector} from "react-redux"
import { AddFoodd } from '../../redux/food/actions'
import "bootstrap/dist/css/bootstrap.min.css"
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



function AddFoods() {
  const[modal,setModal]=useState(false)
  const[foodName,setFoodName]=useState("")
  const[imgURL,setImgURL]=useState("")
  const[description,setDescription]=useState("")
  const[extras,setExtras] = useState([]) 

  const toggle=()=>{
    setModal(!modal)
    console.log(modal,"MODAL STATUS")
  }

  const dispatch=useDispatch()



  const handleADDFood= ()=>{
     
    const formdata={foodName,imgURL,description,extras}
    dispatch(AddFoodd(formdata))

toggle()
 
  }

  

  return (
    <div>


          
          <Button href="#" onClick={toggle} >
          
     
          <strong className="navbar-text mr-3"> Add Food</strong> 
       
          </Button>
          

      <Modal show={modal} onHide={toggle} >
        <Modal.Header toggle={toggle}>Add Food</Modal.Header>
        <Modal.Body>

<Form>

<Form.Group className="mb-3" >
  <Form.Label> Name of the food </Form.Label>

  <Form.Control type="text" placeholder="Name of the food " onChange={(event)=>setFoodName(event.target.value)} />
  
  </Form.Group>


<Form.Group className="mb-3" >
  <Form.Label> Image code adress </Form.Label>

  <Form.Control type="text" placeholder="Image URL" onChange={(event)=>setImgURL(event.target.value)} />
  
  </Form.Group>


<Form.Group className="mb-3" >
  <Form.Label> Description </Form.Label>

  <Form.Control type="email" placeholder="Description"  onChange={(event)=>setDescription(event.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Extras</Form.Label>
        <Form.Control type="text" placeholder="Extras"  onChange={(event)=>setExtras(event.target.value)} />
      </Form.Group>

 
  

</Form>   

        </Modal.Body>

        <Modal.Footer>
          <Button color="primary" onClick={handleADDFood}>
            Add Food
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddFoods
