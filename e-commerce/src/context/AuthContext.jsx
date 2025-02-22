import { createContext, useContext, useState, useEffect} from "react";

import {auth} from "../firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";

const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export const AuthProvider =({ Children })=>{
    const [ user , setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            setUser(user);
            setIsAdmin(user?.email === "admin@gmail.com");
        })
    })

    const logout = async()=>{
        await signOut(auth);
    }

    return(
        <AuthContext.Provider value={{user, isAdmin,logout}}>
        {Children}
</AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);