import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // create user
    const createUser = async (email, password, name, photoURL) => {
        const user = await createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

        await updateProfile(user.user, {
            displayName: name,
            photoURL: photoURL
        });
        return user.user;
    }


    //Logout User
    const logOut = () => {
        return signOut(auth);
    }



    //Login user
    const login = async(email, password) => {
        return await signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            const user=res.user;
            setUser(user)
        })
    }


    useEffect(() => {
        const websiteState = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            websiteState();
        }
    })
    console.log(user);


    
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        login
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;