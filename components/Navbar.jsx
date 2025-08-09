
//imports React, Link from react-router-dom for navigation links, and a custom useAuth hook from your authentication context

import React from "react" ;
import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext"

// component calls useAuth() to get two values: isAuthenticated(a boolean indicating if the user is logged in or not.)

// logout: a function to log the user out.

export default function Navbar() {

  const {isAuthenticated , logout} = useAuth();

  // jsx will render - 1. //  a link to blog page(/blog)

  //2. is NOT authenticated (!isAuthenticated):

  // If not logged in, it shows a Log In link that navigates to the /login page.
  // 3. if logged in - shows log out button, on click calls log out function
  // 4. link to admin page
  return(
    <nav>
      <Link to={"/blog"}> Blog</Link> {"|"}  


      {!isAuthenticated ? (
        <Link to={"/login"}> Log In </Link>
     ) : (
      <>
       <button onClick={logout}> Log Out </button> {"|"}

       <Link to={"/admin"}>Admin</Link>
      </>
     )}

    </nav>
  );
}