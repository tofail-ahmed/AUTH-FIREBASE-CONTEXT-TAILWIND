import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)
      const googleAuthprovider = new GoogleAuthProvider();

      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const signIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
      }
      const googleSignIn = (email, password) => {
            return signInWithPopup(auth, googleAuthprovider)
      }


      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  console.log('auth state change', currentUser);
                  setUser(currentUser)
                  setLoading(false)
            })
            return () => {
                  unsubscribe()
            }
      }, [])
      const logOut = () => {
            signOut(auth)
      }

      const authInfo = {
            user,
            loading,
            createUser,
            signIn,
            logOut,
            googleSignIn
      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProviders;