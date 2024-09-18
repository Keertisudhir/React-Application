// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login'
import Register from './components/Register';
import User from './components/User';
import Todo from './components/todo';
import Mainpage from './components/mainpage';
import { createContext, useState } from 'react';
import { Globalprovider } from './components/logincontext';
import Update from './components/update';
// export const Globalccontext=createContext()

function App() {
  
  return<>
 <Globalprovider>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/user/:uid' element={<User/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/mainpage' element={<Mainpage/>}/>
      <Route path='/update/:uid' element={<Update/>}/>
    </Routes>
    </Globalprovider>
    </> 
}

export default App;
