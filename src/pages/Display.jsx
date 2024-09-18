import React, { useContext } from 'react'
import Authorized from './Authorized'
import { GlobalC } from '../App'


const Display = ({name,loggedin}) => {
    let email="a@gmail.com"
    let password="@123"
    console.log("ds",name)
 
let {theme,setTheme}=useContext(GlobalC)



let task=[{t:"task1",id:1},{t:"task1",id:2},{t:"task1",id:3}]



  return <>
    <div style={{backgroundColor:theme}}>
      <h1>todo list</h1>
       <ul>{task.map((e)=>{
       return <>
        <li key={e.id}>{e.t}</li>
</>
       })
  
      
      
       } </ul>
{name}


props drilling --> component 
<br/>
context api --> context context share context use



<Authorized/>



    </div>
    </>
}

export default Display
