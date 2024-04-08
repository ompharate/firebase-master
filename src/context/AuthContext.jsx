import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { readData } from "../functions/curd";

const UserContext = createContext();

export const UserAuth = () => {
  return useContext(UserContext);
}

export default function AuthContextProvider({ children }) {
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [user, setUser] = useState(null);
  // console.log("from auth", user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedOut(false);
        onSnapshot(doc(db, "users", user.uid), (doc) => {
        setUser(doc.data());
        console.log("it ran again")  
        });
      } else {
        setIsLoggedOut(true);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <UserContext.Provider
      value={{
        isLoggedOut,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
