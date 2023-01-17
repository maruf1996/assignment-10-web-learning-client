import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebaseConfig';

export const AuthContext=createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading, setLoading] = useState(true);


    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signInFacebook=()=>{
        setLoading(true);
        signInWithPopup(auth, facebookProvider)
    }

    const logOut=()=>{
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.error(error)
          });
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoading(false);
          });
        return ()=>unsubscribe();
    },[]);

    const authInfo={user,createUser,signIn,updateUserProfile,signInGoogle,signInFacebook,logOut,loading}
    
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;