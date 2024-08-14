import React from "react";
import "./index.css"
import Home from "./Pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";

import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { useAuthContext } from "./context/AuthContext";

import {Toaster} from 'react-hot-toast';
// import Home from "./Pages/Home/Home";

// import Navbar from "./Components/Navbar/Navbar";

function App() {
  const {authUser}= useAuthContext();
  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center">
    
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to= {"/login"}/>}/>
        <Route path='/login' element={authUser ? <Navigate to = "/" /> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to = "/" /> : <Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
    </>
  );
}

export default App;
