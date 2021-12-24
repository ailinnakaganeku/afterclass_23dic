import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Components
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" greeting="Welcome" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
