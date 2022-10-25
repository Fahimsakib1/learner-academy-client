import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Inside Auth State Changed User", currentUser);
        })

        return () => unsubscribe();
    }, [])


    const AuthInfo = {user,loading, setLoading,setUser, createUser, userLogin, handleSignOut, googleLogin, githubLogin};
    
    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;