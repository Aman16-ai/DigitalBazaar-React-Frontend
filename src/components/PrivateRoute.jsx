import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";  
export default function PrivateRoute({children}) {
    let token = localStorage.getItem("authToken")
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    // if(token === null || token === undefined || token === "" || token === " ") {
    //     return <Navigate to={"/userNotFound"}/>
    // }
    if(!isAuthenticated) {
        return <Navigate to={"/userNotFound"}/>
    }
    return children
}