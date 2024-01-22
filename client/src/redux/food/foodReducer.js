const { GET_FOOD } = require("./actionTypes");


const initState={
    food:[]
 }



export const foodReducer=(state=initState,action)=>{
    switch (action.type) {
    
        case GET_FOOD:
        
       return{
        ...state,
        food:action.payload
       
       }
       
       default:
        return state
     }
 }
 