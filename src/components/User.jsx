import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function User(){

    let {uid}=useParams()
    const [state,setState]=useState([])
    const [inp,setInp]=useState([])
    const [country,setCountry]=useState([])
    let fun= async()=>{
        try{
            let save=await axios.get(`https://66cf1ac9901aab248420ea9f.mockapi.io/detail/family/${uid}`)
            setState([save.data])
        }
        catch(error){
            console.error(error)
        }
    }
    let send=async()=>{
        try{
            let send= await axios.post("https://66cf1ac9901aab248420ea9f.mockapi.io/detail/family",{Name:inp, country:country})
        console.log(send)
        }
        catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        fun()
    },[])
   async function update(){
let response= await axios.put(`https://66cf1ac9901aab248420ea9f.mockapi.io/detail/family/${uid}`,{Name:inp, country:country})
console.log(response)   
}
    
    // console.warn(state)
    async function del(){
        let response= await axios.delete(`https://66cf1ac9901aab248420ea9f.mockapi.io/detail/family/${uid}`)
        console.log(response)
    }
    return <>
<h1>Details</h1>
{state.length?state.map((e)=><ul>
    <li key={e.id}>{e.Name}</li>
</ul>):<h2>No data here</h2>}


<div>
    <input onChange={(e)=>setInp(e.target.value)} placeholder="enter name" className="my-2 mx-2"></input><br></br>
    <input onChange={(e)=>setCountry(e.target.value)} placeholder="enter country" className="my-2 mx-2"></input><br></br>
    <button onClick={send} className="btn btn-primary mx-2">Send data</button>
    <button onClick={update} className="btn btn-primary mx-2">Update data</button>
    <button onClick={del} className="btn btn-primary mx-2">Delete data</button>
</div>
</>
}
export default User;