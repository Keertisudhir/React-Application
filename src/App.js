import logo from './logo.svg';
import './App.css';
import Log from "./pages/Login"
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Display from './pages/Display';
import User from './pages/User';
import { useState } from 'react';
import { createContext } from 'react';
import Authorized from './pages/Authorized';
export const GlobalC=createContext()


function App() {
 
  let a=10
  let string="somerandom words"
  
const [theme,setTheme]=useState("black")

function practiceroutes(){
  return<>
<GlobalC.Provider value={{setTheme,theme}}>
<Routes>
<Route path='/login'  element={<Log/>}   />
<Route path='/register' element={<Register/>}/>
<Route path='/' element={<Display/>} />
<Route path='/user' element={<User/>} />
<Route path='/user/:uid' element={<User/>} />
<Route path='auth' element={<Authorized/>} />
</Routes>
</GlobalC.Provider>
  </>

}



let obj={}

  return <>
{practiceroutes()}



  </>
}





export default App;
