import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from "react-redux"
import {getFood} from "../../redux/food/actions"

function ManageFood() {

    const dispatch = useDispatch();
    const getfooods=()=>{
        dispatch(getFood());
    }
    useEffect(getfooods,[])
  const foodlist=useSelector((state)=>state.food.food.foods)
  console.log(foodlist,"kkkkzezqrqerrrrkkkk")


  return (

<>
hellloooo
{
          foodlist && foodlist.map(function(el, i){
           <h1>hello</h1>
           })
         }
</>

  
  );
}

export default ManageFood;