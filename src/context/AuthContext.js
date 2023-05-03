import { createContext, useContext, useEffect, useState } from "react";
import { auth,db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})
    const [id, setId] = useState("");
    function signUp(email,password){
        createUserWithEmailAndPassword(auth,email,password);
        
        
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)

    }
    function logOut(){
        return signOut(auth) 
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            
        })
        return () => {
            unsubscribed()
        }
    })
  return (
    <AuthContext.Provider
      value={{ signUp, user, logIn, logOut,id, setId }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
