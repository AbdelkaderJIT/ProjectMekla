import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from "react-redux"
import {getFood} from "../../redux/food/actions"
import Table from 'react-bootstrap/Table';
import AddFoods from './AddFoods';
import ModifyFoods from './ModifyFoods';
import DeleteFood from './DeleteFood';


function ManageFood() {

    const dispatch = useDispatch();
    const getfooods=()=>{
        dispatch(getFood());
    }
    useEffect(()=>{getfooods();
    console.log("hhhhhhhhhhhhhhhhh");
    },[])

  const foodlist= useSelector((state)=>state.food.food.foods)
console.log(foodlist,"helooooooooooo")

  return (

<div style={{margin:"5%"}}>
  <div style={{marginTop:"150px",marginBottom:"20px",marginLeft:"20px"}}>
   <AddFoods/>
   </div>
<Table striped bordered hover variant="light" >
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>Food's name</th>
          <th>Description</th>
          <th>Extras</th>
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
            <td>
              <ul>
              {el.extras.map((el)=>(
              <li>{el}</li>
            ))}
            </ul>
            </td>
            <td><ModifyFoods el={el}/> <DeleteFood el={el}/></td>
    
          </tr>
          ))
         }
     
      </tbody>
    </Table>

</div>

  
  );
}

export default ManageFood;