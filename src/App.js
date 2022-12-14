import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import ItemDetailContainer from "./Pages/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:catId" element={<ItemListContainer />} />
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2> 404 . PAGINA NO EXISTENTE</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
