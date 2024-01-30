import styles from "./Carousel.module.scss";
import { useState } from 'react';

const Carousel = ({ products }) => {

  const featuredProducts = products.slice(5, 9);
  const images = featuredProducts.map((product) => product.image);
  //console.log(images);

  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.btn.concat(" ", styles.btn__prev)}>&lt;</button>
      
      <img
        src={images[activeIndex]}
        className={styles.img}
      />
      <button onClick={nextSlide} className={styles.btn.concat(" ", styles.btn__next)}>
        &gt;
      </button>
    </div>
  )
}

export default Carousel