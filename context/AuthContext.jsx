
import React, {useContext, createContext, useState} from "react";

//create a authentication context object so other components can access the auth state

export const AuthContext = createContext();

//defining a provider- to provide the context value to the child components

export function AuthProvider({children}){
    const[isAuthenticated ,setIsAuthenticated] = useState(false)


//create a function to simulate llogin

const login =() => {setIsAuthenticated(true)};

//function to simulate logout

const logout =() =>{ setIsAuthenticated(false)};


return(
    <AuthContext.Provider value ={{ isAuthenticated, login, logout}}>

        {children}
        
    </AuthContext.Provider>
);
}