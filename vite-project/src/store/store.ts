import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
reducer:{
    
}

})

// action creatory i reducery - js funkcje w redux


export const addNote = (payload) =>{
    return{
        type:'node/add', // lub ADD_TASK
        payload, // TAKA SAMA NAZWA JAK TYPE
    }
}

 export const removeNote = (payload) =>{
    return{
        type:'node/remove',
        payload
    }
}