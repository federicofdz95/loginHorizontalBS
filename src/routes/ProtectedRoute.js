import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import BarraNavegacion from "../pages/BarraNavegacion";
import { useState } from "react";
import Login from "../pages/Login";


export const ProtectedRoute = ( {handleEvent} ) => {


    const { token } = useAuth();


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    //console.log(handleEvent)

  
    // Check if the user is authenticated
    //if (!handleEvent) {
    if (!token) {
      // If not authenticated, redirect to the login page
      return (
        
        /*<Navigate to="/login" />*/
        <Login/>

      );
    }
  
    // If authenticated, render the child routes
    return (
      <>
        <div className="">
        
          <BarraNavegacion/>
          <Outlet />
          
        </div>
      </>
    );
    
};