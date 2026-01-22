import img1 from "../assets/galeria1.jpg";
import img2 from "../assets/galeria2.jpg";
import img3 from "../assets/galeria3.png";
import img4 from "../assets/galeria4.png";

import "./Gallery.css";

const Gallery = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="gallery-section">
      <h2>Galería</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Fotografía ${index + 1}`} />
            <div className="overlay">
              <span>Itzel Olgin</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
