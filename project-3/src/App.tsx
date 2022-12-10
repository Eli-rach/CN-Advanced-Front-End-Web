import React from "react";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { auth } from "./firebase";

import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./styles.scss"
import AuthRoute from "./components/AuthRoute";

export interface IAppProps{}

const App:React.FunctionComponent<IAppProps> = (props)=> {


  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<AuthRoute><Home/></AuthRoute>} />
        <Route path="/Register" element= {<Register/>} />
        <Route path="/Login" element= {<Login/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
 