import { GET_FOOD } from "./actionTypes"
import axios from "axios"



//Display Food

export const getFood=()=>async (dispatch)=>{
    await axios.get("http://localhost:5001/api/food/getallfood")
    .then((res)=>dispatch({type:GET_FOOD,payload:res.data}))
    .catch((err)=>console.log(err))
    }



// ADD Food

export const AddFoodd=(newFood)=>async(dispatch)=>{
    const config={
        headers: {
            'x-auth': localStorage.getItem('token'),
          }
    
    }
   try{
    const res=await axios.post("http://localhost:5001/api/food/addFood",newFood,config)
    console.log(res,"gggggggggg")
    dispatch(getFood())
}
    catch (err){ console.log(err)}
   
}

// Edit Food

export const editFood=(idFood, editedFood)=>async(dispatch)=>{
    const config={
        headers: {
            'x-auth': localStorage.getItem('token'),
          }
    
    }
    try{
        const res = await axios.put(`http://localhost:5001/api/food/editfood/${idFood}`,editedFood,config)
        dispatch(getFood())
    }
    catch(err){
        console.log(err)
    }
}



// Delete Food

export const deleteFood=(idFood)=>async (dispatch)=>{
    const config={
        headers: {
            'x-auth': localStorage.getItem('token'),
          }
        }
          try{
            const res = await axios.delete(`http://localhost:5001/api/food/deletefood/${idFood}`,config)
            dispatch(getFood())
          }
          catch (err){
            console.log(err)
          }
  
}
