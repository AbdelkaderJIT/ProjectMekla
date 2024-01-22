import { GET_FOOD } from "./actionTypes"
import axios from "axios"



//Display Food

export const getFood=()=>(dispatch)=>{
    axios.get("http://localhost:5001/api/food/getallfood")
    .then((res)=>dispatch({type:GET_FOOD,payload:res.data}))
    .catch((err)=>console.log(err))
    }



// ADD Food

export const AddFood=(newFood)=>async(dispatch)=>{
   
    await axios.post("http://localhost:5001/api/food/addFood",newFood)
    .then ((res)=> dispatch(getFood()))
    .catch ((err)=> console.log(err))
   
}

// Edit Food

export const editFood=(idFood, editedFood)=>async(dispatch)=>{
    
    await axios.put(`http://localhost:5001/api/food/editfood/${idFood}`,editedFood)
    .then ((res)=> dispatch(getFood()))
    .catch ((err)=> console.log(err))
    }



// Delete Food

export const deleteFood=(idFood)=>(dispatch)=>{
    axios.delete(`http://localhost:5001/api/food/deletefood/${idFood}`)
    .then((res)=>dispatch(getFood()))
    .catch((err)=>console.log(err))
}