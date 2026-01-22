import img1 from "../assets/galeria1.jpg";
import img2 from "../assets/galeria2.jpg";

export default function Gallery() {
  return (
    <section style={{ padding: "3rem 2rem" }}>
      <h2 style={{ textAlign: "center", color: "#e91e63", marginBottom: "2rem" }}>
        Nuestro Trabajo
      </h2>

      <div className="gallery-grid">
        <img src={img1} alt="Foto estudio 1" />
        <img src={img2} alt="Foto estudio 2" />
      </div>
    </section>
  );
}
