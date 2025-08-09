
import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

//useAuth from authentication context to access the login function

//useNavigate from React Router to programmatically navigate between routes.

export default function LoginPage(){

// useAuth() to get the login function which handles user login logic.

// calls useNavigate() to get a navigate function to change routes.



   const{ login } =useAuth();
   const navigate = useNavigate();

   const handleLogin = () =>{



//Calls the login() method to perform the login (e.g., setting auth state).

// Redirects the user to the /admin page using navigate("/admin") after login
    
     login();
    navigate("/admin")
   }

    return(
        <div>
            <h1> Login </h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}