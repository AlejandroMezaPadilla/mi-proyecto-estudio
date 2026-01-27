import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Ubicacion from "./components/Ubicacion";
import Contacto from "./pages/Contacto";

const Home = () => (
  <>
    <Hero />
    <Ubicacion />
  </>
);

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
