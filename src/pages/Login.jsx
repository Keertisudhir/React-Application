import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import Display from "./Display"
import Register from "./Register"
import axios from "axios"

function Login({fromparent}){
const [statename,setStatename]= useState([])   
console.log("im rendering")



let navigate=useNavigate()

console.warn()
    async function l(){
    setStatename()



}



function post(params) {
    return statename

}

return <>
<input onChange={(e)=>setStatename(e.target.value)}></input><br/>
<input></input><br/>
<center>hello</center>
<button onClick={l}>login </button><br/>
<b>dont have a account?</b> <button onClick={()=>navigate("/register")}>Register here </button>
<br/>
<br/>
<br/>






</>




}

export default Login