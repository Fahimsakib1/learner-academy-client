import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light");

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

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);

    }

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const handlePasswordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }



    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"))
    }




    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            // if (currentUser === null) {
            //     setUser(currentUser);
            //     console.log("Inside Auth State Changed User", currentUser);
            // }

            setUser(currentUser);
            console.log("Inside Auth State Changed User", currentUser);
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])


    const AuthInfo = {user, loading, setLoading, setUser, createUser, userLogin, handleSignOut, googleLogin, githubLogin, updateUserProfile, handlePasswordReset, theme, setTheme, toggleTheme};
    
    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;