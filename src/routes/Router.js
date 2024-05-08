import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/LoginPage";
import { ViewTaskDetails } from "../pages/ViewTaskDetails";
import { UpdateTask } from "../pages/UpdateTask";
import { ViewTaskList } from "../pages/ViewTaskList";
import { Dashboard } from "../pages/Dashboard";
export const Routers = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<CreateAccount/>}/>
          <Route path="/Login" element={<Login/>}/> 
          <Route path="/ViewDetails" element={<ViewTaskDetails/>}/> 
          <Route path="/Login" element={<UpdateTask/>}/> 
          <Route path="/ViewTaskList" element={<ViewTaskList/>}/> 
          <Route path="/Dashboard" element={<Dashboard/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};
