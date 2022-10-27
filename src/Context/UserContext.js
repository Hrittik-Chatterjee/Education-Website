import React,{ createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init'


const auth =getAuth(app)
export const AuthContext = createContext()

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const [user, setUser] =useState({})

    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateName =(name)=>{
            return updateProfile(auth.currentUser, {displayName:name})
    }

  

    const signInWithGoogle= ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub =()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const logout = () =>{
        return signOut(auth)
    }
    const authInfo ={
        user,
        createUser,
        updateName,
        signInWithGoogle,
        logout,
        signInWithGithub,
    }

    useEffect (()=>{

    const unsubscribe=    onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
            return ()=>{
                unsubscribe()
            }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;