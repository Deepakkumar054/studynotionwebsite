import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import Login from "./pages/login"
import Signup from "./pages/Signup"
import PrivateRoute from './component/privateRoute';
import Dashboard from "./pages/Dashboard"
import { useState } from 'react';



function App() {

  const [isLoggedIn,setIsloggedIn]= useState(false);
  return (
    <div className='w-screen h-screen bg-slate-950 flex flex-col overflow-auto'>
      
      <Navbar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>
      <Routes>
        <Route path="/" element ={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/Login" element={<Login setIsloggedIn={setIsloggedIn}/>}/>
        <Route path="/Signup" element={<Signup setIsloggedIn={setIsloggedIn}/>}/>
        <Route path="/Dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>

            <Dashboard/>

          </PrivateRoute>
          
          }/>
      

      </Routes>
    </div>
  );
}

export default App;
