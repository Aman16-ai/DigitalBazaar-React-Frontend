import React from "react";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({children}) {
    let token = localStorage.getItem("authToken")
    if(token === null || token === undefined || token === "" || token === " ") {
        return <Navigate to={"/login"}/>
    }
    return children
}