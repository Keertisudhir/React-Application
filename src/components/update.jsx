import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

 function Update() {
   let {uid}=useParams();
   let navigate=useNavigate()
const [state,setState]=useState("")

useEffect(()=>{
get()
},[])
async function get(){
  let response =await axios.get(`https://66cf1ac9901aab248420ea9f.mockapi.io/detail/todolist/${uid}`)
 setState(response.data.task) 
}
    async function updatedata(uid){
        let response=await axios.put(`https://66cf1ac9901aab248420ea9f.mockapi.io/detail/todolist/${uid}`,{task:state})
        navigate('/todo')
        console.log(response)

    }
   
  return (
    <div className='m-4'>
        <h1>This is to update the task</h1>
        <input type="text" value={state} placeholder='enter to modify the task' onChange={(e)=>setState(e.target.value)}></input>
        <button className='btn btn-primary mx-2' onClick={()=>(updatedata(uid))}>Update the task</button>
        
    </div>
  )
}
export default Update;