import { useEffect, useState } from "react"
import styles from "./HomePage.module.scss"
import { getAllProducts, toggleFavourite } from "../../services/products";
import ProductList from "../../containers/ProductList/ProductList";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts()
    .then((response) => {
      setLoading(false)
      setProducts(response);
    });
  }, [])

  //toggleFavourite("CtigONUC6YvgWOrTdukq");

  return (
    <main >

      <section className={styles.center}>
        <h2 className={styles.feature__heading}>Featured</h2>
        {/* {!loading && products &&  <Carousel products={products} />} */}

        {!loading && products &&  <Carousel products={products.slice(5, 9)} />}
      </section>

      <Header heading={"All Products"}/>
      {loading && <p>Loading...</p>}
      {!loading && products && <ProductList products={products}/>}
    </main>
  )
}

export default HomePage