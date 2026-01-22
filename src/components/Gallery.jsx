import img1 from '../assets/galeria1.jpg'
import img2 from '../assets/galeria2.jpg'

export default function Gallery() {
  return (
    <section className="gallery">
      <img src={img1} alt="Foto 1" />
      <img src={img2} alt="Foto 2" />
    </section>
  )
}

