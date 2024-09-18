import './regi.css';
import {useNavigate} from "react-router-dom";
function Register(){

let navigate=useNavigate()
    return <>
    <div class="d-flex flex-row justify-content-center align-items-center m-5 ">
    <div class="bg-dark w-50 d-flex flex-column align-items-center justify-content-center border border-light border-4 rounded ">
<h1 class="my-2 text-light" id="heading">Create New Account</h1>
<div class="d-flex flex-column">
    <div>
<label class="me-1 text-light fw-bold">Username:</label><br></br>
<input class="my-3 rounded"type="text" placeholder="Enter firstname"></input>
</div>

<div>
<label class="me-1 text-light fw-bold">Email:</label><br></br>
<input class="my-3 rounded"type="email" placeholder="Enter emailid"></input>
</div>
<div>
<label class="me-1 text-light fw-bold">Password:</label><br></br>
<input class="my-3 rounded" type="password" placeholder="Enter your password"></input>

</div>
<div>
<label class="me-1 text-light fw-bold">Confirm Password:</label><br></br>
<input class="my-3 rounded" type="password" placeholder="Re-enter the password"></input>
</div>

</div>
<button class=" btn btn-primary mb-2">Register</button>

<p class="text-light">Have an Account? <a href="" onClick={()=>navigate("/login")}>Click here to Login</a></p>
    </div>
    
    </div>
    
    
    
    </>
}
export default Register;