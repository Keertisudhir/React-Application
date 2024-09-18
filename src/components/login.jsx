import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css';
import { createContext, useContext, useState } from 'react';
import Mainpage from './mainpage';

import { GlobalContext } from './logincontext';


function Login(){
const {setUsername,setPassword}=useContext(GlobalContext)
   let gotoregsiter= useNavigate()
   let navigate=useNavigate()
   const [inp,setInp]=useState("")
   const [pass,setpass]=useState("")
   
   console.log(inp)
   console.log(pass)
   let fun=()=>{
    
   }
   function Onlogin(){
setUsername(inp)
setPassword(pass)
    navigate("/mainpage")
   }
    return <>
    <div class="d-flex flex-row justify-content-center align-items-center m-5 vh-100 " id="maindiv">
    <div class="bg-dark w-50 d-flex flex-column align-items-center border border-light border-4 rounded ">
<h1 class="my-2 text-light">Login Page</h1>
<div>
<label class="me-1 text-light">Username:</label>
<input class="my-3 rounded"type="text" placeholder="Enter username" onChange={(e)=>setInp(e.target.value)}></input>
</div>
<div>
<label class="me-1 text-light">Password:</label>
<input class="my-3 rounded" type="password" placeholder="Enter password" onChange={(e)=>setpass(e.target.value)}></input>
</div>
<button class=" btn btn-primary mb-2" onClick={Onlogin}>Login</button>
<p><a href="">Forgot Password?</a></p>
<p class="text-light">Don't have Account? <a href=""onClick={()=>gotoregsiter("/register")}>Click here to Register</a> </p>
{/* <p className='text-light'>{inp}</p>
<p className='text-light'>{pass}</p> */}
    </div>
   
   
    
    </div>
   
   
    </>
}
export default Login;