import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from "react-redux"
import {getFood} from "../../redux/food/actions"
import Table from 'react-bootstrap/Table';
import AddFoods from './AddFoods';


function ManageFood() {

    const dispatch = useDispatch();
    const getfooods=()=>{
        dispatch(getFood());
    }
    useEffect(()=>{getfooods();
    console.log("hhhhhhhhhhhhhhhhh");
    },[])

  const foodlist= useSelector((state)=>state.food.food.foods)
  console.log(foodlist,"kkkkzezqrqerrrrkkkk")


  return (

<div style={{margin:"5%"}}>
  <div style={{marginTop:"100px",marginBottom:"20px",marginLeft:"20px"}}>
   <AddFoods/>
   </div>
<Table striped bordered hover variant="light" >
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>Food's name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {

          foodlist !== undefined && foodlist.map((el, i)=>(
            <tr key={i}>
               <td>{i + 1}</td>
            <td>{el.imgURL && (
                    <img style={{maxWidth:"100px", maxHeight:"70px"}} src={el.imgURL}   />
                  )}</td>
            <td>{el.foodName}</td>
            <td>{el.description}</td>
            <td><Button> Modify </Button> <Button> Delete </Button></td>
    
          </tr>
          ))
         }
     
      </tbody>
    </Table>

</div>

  
  );
}

export default ManageFood;