import Hero from "../components/Hero";

// Imágenes para sección Ubicación
import img1 from "../assets/galeria1.jpg";
import img2 from "../assets/galeria2.jpg";
import img3 from "../assets/galeria3.png";
import img4 from "../assets/galeria4.png";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ===== SECCIÓN UBICACIÓN ===== */}
      <section className="container location-section">
        <h2>Ubicación</h2>

        <div className="gallery">
          {[img1, img2, img3, img4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Ubicación ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </>
  );
}
