import React,{ createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init'


const auth =getAuth(app)
export const AuthContext = createContext()

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const [user, setUser] =useState({})
    const [loading, setLoading] =useState(true)

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateName =(name)=>{
            return updateProfile(auth.currentUser, {displayName:name})
    }

  

    const signInWithGoogle= ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub =()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    const logout = () =>{
        return signOut(auth)
    }


    const signin =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
        user,
        createUser,
        updateName,
        signInWithGoogle,
        logout,
        signInWithGithub,
        signin,
        loading,
    }

    useEffect (()=>{

    const unsubscribe=    onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
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