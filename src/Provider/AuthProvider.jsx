import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext= createContext(null);

const auth= getAuth(app);

const AuthProvider = ({children}) => {
    // 
    const [user, setUser]= useState(null)
    const [loading, setLoading]=useState(false);

    // signUp
    const signUpUser= (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // signIn
    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    // logout
    const logout=()=>{
        setLoading(true)
        return signOut(auth);
    }
    // change user
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser)
            setLoading(false)
        })
        return ()=>unsubscribe();
    },[])

    // 
    const authInfo={
        user,
        signUpUser,
        signInUser,
        loading,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;