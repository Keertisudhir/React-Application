import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './todo.css';

function Todo(){
const [tasks,setTask]=useState("")
    const [inp,setInp]=useState([])
    const navigate=useNavigate()
    async function send() {
        try{
            let response= await axios.post("https://66cf1ac9901aab248420ea9f.mockapi.io/detail/todolist",{task:tasks})
            receive()
            setTask("")
        console.log(response)
        }

        catch(error)
        {
            console.error(error)
        }

}

 async function receive(){
    
    try{
        let response= await axios.get("https://66cf1ac9901aab248420ea9f.mockapi.io/detail/todolist")
        setInp(response.data)
        console.log(inp)
        
    }
    catch(error){
console.error(error)
    }
}
useEffect (()=>{
receive()
},[])

async function dele(id){
    
try{
let response=await axios.delete(`https://66cf1ac9901aab248420ea9f.mockapi.io/detail/todolist/${id}`)
receive()
console.log(response)
}
catch(error){
console.error(error)
}
}

    return <div className="todo" >
    <h1 className="heading"><center>myTODO</center></h1>
    <input placeholder="Enter the task" className="m-2 border border-dark border-2 rounded" onChange={(e)=>setTask(e.target.value)}></input>
    <button className="btn btn-primary mx-2" onClick={send}>Add task</button>
    {/* <button className="btn btn-primary" onClick={send}>Send task</button> */}
    <table className="table table-bordered border-4 border-dark table-hover  table-striped my-4">
    <thead className="table-light">
                <tr className="table-dark">
                    <th>My Task</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {inp.map((tasks)=>(
                    <tr key={tasks.id}>
                        <td className="fw-bold text-dark ">{tasks.task}</td>
                        <td className=""><button className="btn btn-primary" onClick={()=>navigate(`/update/${tasks.id}`)}>Edit</button></td>
                        <td className=""><button className="btn btn-primary"onClick={()=>dele(tasks.id)}>Delete</button></td>
                    </tr>
                ))}
                
            </tbody>
    </table>
    
    
    </div>
}
export default Todo;
