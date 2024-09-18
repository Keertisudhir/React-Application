import axios from 'axios'
import React, { useEffect, useId, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
let {uid}=useParams()
const [state,setState]=useState([])
const [inp,setinp]=useState([])




let post=async ()=>{
try {
  
let response=await axios.post("https://62e6b82469bd03090f74e19d.mockapi.io/user",{task:inp,age:21})
console.log(response)


} catch (error) {
  
}
}

  async function update(){
  let  response= await axios.put("https://62e6b82469bd03090f74e19d.mockapi.io/user/23",{task:inp,body:"another"})
  console.log(response)
}




let deletedata=()=>{
  let response=axios.delete("https://62e6b82469bd03090f74e19d.mockapi.io/user/22")
  console.log(response)
}

useEffect(()=>{

  fun()

},[])


let fun=async ()=>{
  
  
try {
  

  let save=await axios.get(`https://62e6b82469bd03090f74e19d.mockapi.io/user/${uid}`)
  console.log()
  setState([save.data])

  
} catch (error) {
  console.error(error)
}



}  

 return <>
      
   <h1>Details</h1>
{state.length?state.map((e)=><ul>
  <li key={e.id} >{e.task}</li>
</ul>
):<h2><center>no data here</center></h2>

}





<div>
<input onChange={(e)=>setinp(e.target.value)} className='form-control w-50 my-3' placeholder='enter task' ></input>
<button onClick={update} className='btn btn-outline-dark'>send data</button>
<button onClick={deletedata} className='btn btn-outline-dark'>delete data</button>
</div>
    
    
</>
  
}

export default User
