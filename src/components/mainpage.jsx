
import { useContext } from 'react';
import './mainpage.css';
import { GlobalContext } from './logincontext';

function Mainpage(){
    const {username,password}=useContext(GlobalContext)
    return<>
    <body>
    <h1>Hello, {username}</h1>
    <h1>This is Your password{password}</h1>
    </body>
    </>
}
export default Mainpage;