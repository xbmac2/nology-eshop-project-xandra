import { Link } from "react-router-dom";
import styles from "./Carousel.module.scss";
import { useState } from "react";

const Carousel2 = ({ products }) => {

  const featuredProducts = products.slice(5, 9);
  const images = featuredProducts.map((product) => product.image);
  const imageIds = featuredProducts.map((product) => product.id);

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
    <div className={styles.container}>
      <button className={styles.btn} onClick={prevSlide}>&#x2190;</button>
      <Link to={`/product/${imageIds[activeIndex]}`}>
      <img src={images[activeIndex]} className={styles.image}/>
      </Link>
      <button className={styles.btn} onClick={nextSlide}>&#x2192;</button>

    </div>
  )
}

export default Carousel2