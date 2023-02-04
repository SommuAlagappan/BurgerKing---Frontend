import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";



function ProtectedRoutes() {
  return (
    window.localStorage.apptoken.length>70?<Outlet/> : <Login/>
    
  )
}
export default ProtectedRoutes
