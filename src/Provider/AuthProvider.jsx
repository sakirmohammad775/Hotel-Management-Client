import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('current User:', currentUser);
      setLoading(false)
    })
    return () => {
      return unSubscribe() //clean up the subscription
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut

  }
  return (

    <>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

