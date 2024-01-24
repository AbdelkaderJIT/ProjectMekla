import React ,{useState,useEffect}from 'react'
import {useDispatch, useSelector} from "react-redux"
import { editFood } from '../../redux/food/actions'
import "bootstrap/dist/css/bootstrap.min.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function ModifyFoods({el}) {


  const[modal,setModal]=useState(false)
  const[foodName,setFoodName]=useState(el.foodName)
  const[imgURL,setImgURL]=useState(el.imgURL)
  const[description,setDescription]=useState(el.description)
  const[extras,setExtras] = useState([]) 
  const[extrasN1,setExtrasN1]=useState(el.extras[0])
  const[extrasN2,setExtrasN2]=useState(el.extras[1])
  const[extrasN3,setExtrasN3]=useState(el.extras[2]) 

  useEffect(() => {

    setExtras([ extrasN1, extrasN2, extrasN3]);

  }, [extras]);

  const toggle=()=>{
    setModal(!modal)
    console.log(modal,"modify MODAL STATUS")
  }

  const dispatch=useDispatch()

  const handleADDFood= ()=>{
     
    const formdata={foodName,imgURL,description,extras}
    dispatch(editFood(el._id,formdata))

toggle()
 
  }

  

  return (
    <div>


          
          <Button href="#" variant="warning" style={{margin:"5px"}} onClick={toggle} >
          
     
          <strong className="navbar-text mr-3"> Modify </strong> 
       
          </Button>
          

      <Modal show={modal} onHide={toggle} >
        <Modal.Header toggle={toggle}>Add Food</Modal.Header>
        <Modal.Body>

<Form>

<Form.Group className="mb-3" >
  <Form.Label> Name of the food </Form.Label>

  <Form.Control type="text" value={foodName} placeholder="Name of the food " onChange={(event)=>setFoodName(event.target.value)} />
  
  </Form.Group>


<Form.Group className="mb-3" >
  <Form.Label> Image code adress </Form.Label>

  <Form.Control type="text" value={imgURL} placeholder="Image URL" onChange={(event)=>setImgURL(event.target.value)} />
  
  </Form.Group>


<Form.Group className="mb-3" >
  <Form.Label> Description </Form.Label>

  <Form.Control type="text" value={description} placeholder="Description"  onChange={(event)=>setDescription(event.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Extras</Form.Label>
        <Form.Control type="text" value={extrasN1} placeholder="Extras"  onChange={(event)=>setExtrasN1(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Extras</Form.Label>
        <Form.Control type="text" value={extrasN2} placeholder="Extras"  onChange={(event)=>setExtrasN2(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Extras</Form.Label>
        <Form.Control type="text" value={extrasN3} placeholder="Extras"  onChange={(event)=>setExtrasN3(event.target.value)} />
      </Form.Group>

 
  

</Form>   

        </Modal.Body>

        <Modal.Footer>
          <Button color="primary" onClick={handleADDFood}>
            Modify Food
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ModifyFoods
