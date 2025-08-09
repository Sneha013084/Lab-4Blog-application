
//to use this context -  created a login component

import React, { useContext} from "react";
import { AuthContext } from "../context/AuthContext";



function LoginButton(){
    const {isAuthenticated ,login, logout} = useContext(AuthContext);

    return(


    )

}