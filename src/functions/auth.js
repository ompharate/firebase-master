import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const signIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
  } catch (error) {
    return error;
  }
};
export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (email, password, userData) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db,"users",user.user.uid), {
      uid: user.user.uid,
      ...userData,
    });
    return user.user;
  } catch (error) {
    console.log(error.message);
  }
  
};
