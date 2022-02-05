import Header from "./components/Header/Header";
import "./assets/fonts/fonts.css";
import HomePage from "./components/pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Card from "./components/pages/HomePage/List/Card/Card";
import Post from "./components/pages/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { InitialRequest } from "./Actions/index";
import axios from "axios";

function App() {
  const [pages, setPages] = useState(1);
  const [card, setCard] = useState(0);
  const [handleID, setHandleId] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://dream-team-n1.herokuapp.com/api/cards?page=${pages}`
    );
    return data;
  };

  const result = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then((result) => {
      dispatch(InitialRequest(result));
    });
  }, [pages]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              result={result}
              pages={pages}
              setPages={setPages}
              card={card}
              setCard={setCard}
              setHandleId={setHandleId}
            />
          }
        />
        <Route path={`/card/${handleID[0]}`} element={<Card id={handleID} />} />
        <Route path="/add-post" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
