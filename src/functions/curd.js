import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

import { db } from "../config/firebase";

export const CreateUser = async (collectionName, data) => {
  try {
    const docRef = collection(db, "students");
    await addDoc(docRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const readData = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("no such data");
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (collection, id, data) => {
  try {
    const docRef = doc(db, collection, id);
    await updateDoc(docRef, data);
    console.log("update successful");
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    await deleteDoc(docRef);
    console.log("delete successful");
  } catch (error) {
    console.log("error deleting document");
  }
};

export const readAllData = async (collectionName) => {
  try {
    const newDataArr = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      newDataArr.push(doc.data());
    });
    return newDataArr;
  } catch (error) {
    console.log(error);
  }
};

export const listenToCollection = (collectionName, callBack) => {
  const collectionRef = collection(db, collectionName);

  return onSnapshot(collectionRef, (querySnapshot) => {
    const newDataArr = [];
    querySnapshot.forEach((doc) => {
      newDataArr.push(doc.data());
    });
    callBack(newDataArr);
  });
};
