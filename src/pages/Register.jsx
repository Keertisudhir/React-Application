import React, { useState,useEffect, useContext } from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const Register = ({change}) => {

const [inp,setInp]=useState("")

const [inp1,setInp1]=useState("")

useEffect(()=>{
    go()

    return ()=>{
        outro()   
    }


},[])



let outro=()=>{
    console.error("bye")
}



    
let go=()=>{
    console.warn("hello")
}

let navigate=useNavigate()

return<>
    <h1><center>hello from register hi username  {change}</center></h1>






<input onChange={(e)=>setInp(e.target.value)} placeholder='username'></input><br/>

<input onChange={(e)=>setInp1(e.target.value)} placeholder='uid'></input><br/>

<center><pre>
login -->2input
register-->2input

main page ->image
react app ->
<br/>
Routes
navigate
contextapi





 </pre>{inp}   hi hello   jksdn</center>

<button >register </button>

<b>have an account ?</b><button className='btn btn-primary mx-4'>login</button>
<button className='btn btn-info' onClick={()=>navigate(`/user/${inp}`)}>navigate to user </button>
<br/>
<br/>
<br/>
</>
}







export default Register
