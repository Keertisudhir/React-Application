import React, { useContext, useReducer } from 'react'
import { GlobalC } from '../App'
import axios from 'axios'

const Authorized = () => {
  const {setTheme} = useContext(GlobalC)

  let fun=async ()=>{
    
   let save=await axios.get("https://62e6b82469bd03090f74e19d.mockapi.io/user")
console.log(save)
}  


 let initial={
  name:"",
  email:[],
 }

let reducer=(state, action)=>{
switch (action.type) {
  case "addthis":
    return<></>
    ;

  default:
    break;
}


}

const [state,dispatch] = useReducer(reducer,initial)








  return (
    <div>
      <h1>HEllo im </h1>

      <button onClick={fun} className='btn btn-dark mt-4 mx-4'>crud button</button>
      <button onClick={()=>setTheme((prev)=>prev=="black"?"blue":"black")}>hello</button>
    </div>
  )
}

export default Authorized
