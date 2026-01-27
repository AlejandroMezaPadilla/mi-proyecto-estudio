import bautizo1 from "../assets/bautizo1.jpg";
import bautizo2 from "../assets/bautizo2.jpg";

import quince1 from "../assets/quince1.jpg";
import quince2 from "../assets/quince2.jpg";

import boda1 from "../assets/boda1.jpg";
import boda2 from "../assets/boda2.jpg";

import cumple1 from "../assets/cumple1.jpg";
import cumple2 from "../assets/cumple2.jpg";

import pedimento1 from "../assets/pedimento1.jpg";
import pedimento2 from "../assets/pedimento2.jpg";

const galleryData = [
  {
    title: "Bautizos",
    images: [bautizo1, bautizo2],
  },
  {
    title: "Quince Años",
    images: [quince1, quince2],
  },
  {
    title: "Bodas",
    images: [boda1, boda2],
  },
  {
    title: "Cumpleaños",
    images: [cumple1, cumple2],
  },
  {
    title: "Pedimentos",
    images: [pedimento1, pedimento2],
  },
];

const Gallery = () => {
  return (
    <section className="container">
      {galleryData.map((section, index) => (
        <div key={index} className="gallery-section">
          <h2>{section.title}</h2>

          <div className="gallery">
            {section.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${section.title} ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
