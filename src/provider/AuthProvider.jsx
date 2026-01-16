import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const createUser=async(email,password,name,photoURL)=>{
        const user= await createUserWithEmailAndPassword(auth,email,password)
        .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            alert(errorMessage);
        });

        await updateProfile(user.user,{
            displayName:name,
            photoURL:photoURL
        });
        return user.user;
    }
    console.log(user);

    useEffect(()=>{
        const websiteState= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            websiteState();
        }
    })

    const authData={
        user,
        setUser,
        createUser
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;