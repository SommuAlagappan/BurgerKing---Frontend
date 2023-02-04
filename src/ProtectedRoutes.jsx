import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";



function ProtectedRoutes() {
  return (
    window.localStorage.app-token.length>70?<Outlet/> : <Login/>
    
  )
}
export default ProtectedRoutes
