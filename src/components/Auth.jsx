import React, { useEffect, useState } from "react";
import { GoogleProvider, auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
    console.log("from auth ", auth.currentUser);

  async function signIn() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("error from create user->", error);
    }
  }
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, GoogleProvider);
    } catch (error) {
      console.log("error from signInGooglePop->", error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error from logout->", error);
    }
  }

  return (
    <div>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        name="password"
      />
      <button onClick={signIn}>sign in</button>
      <button onClick={signInWithGoogle}>sign in with google</button>
      <button onClick={logout}>log out</button>
    </div>
  );
};

export default Auth;
