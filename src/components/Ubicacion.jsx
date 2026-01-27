import img1 from "../assets/galeria1.jpg";
import img2 from "../assets/galeria2.jpg";
import img3 from "../assets/galeria3.png";
import img4 from "../assets/galeria4.png";

const Ubicacion = () => {
  return (
    <section className="container">
      <h2 style={{ color: "#e91e63", marginBottom: "2rem", textAlign: "center" }}>
        Ubicación
      </h2>

      <div className="gallery">
        <img src={img1} alt="Ubicación 1" loading="lazy" />
        <img src={img2} alt="Ubicación 2" loading="lazy" />
        <img src={img3} alt="Ubicación 3" loading="lazy" />
        <img src={img4} alt="Ubicación 4" loading="lazy" />
      </div>
    </section>
  );
};

export default Ubicacion;
