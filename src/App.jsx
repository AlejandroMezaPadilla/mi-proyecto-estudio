import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter basename="/mi-proyecto-estudio">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
