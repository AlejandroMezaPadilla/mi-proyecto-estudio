import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const Home = () => (
  <>
    <Hero />
    <Gallery />
  </>
);

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<h2 className="page">Contacto próximamente</h2>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
