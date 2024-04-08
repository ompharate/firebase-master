import { useEffect, useState } from "react";
import Auth from "./components/Auth.jsx";
import { db } from "./config/firebase.js";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(collection(db, "movies"));
        const filteredData = data.docs.map((doc)=>({...doc.data()}))
        setMovies(filteredData);
      } catch (error) {
        console.log("error from useEffect->")
      }
    };
    getMovieList();
  },[]);

  return (
    <>
      <Auth />
    </>
  );
}

export default App;
