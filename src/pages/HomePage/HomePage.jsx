import { useEffect, useState } from "react"
import styles from "./HomePage.module.scss"
import { getAllProducts } from "../../services/products";
import ProductList from "../../containers/ProductList/ProductList";
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

  return (
    <main >

      <section className={styles.center}>
        <h2>Featured</h2>
        {!loading && products &&  <Carousel products={products} />}
      </section>

      <h1>All Products</h1>
      {loading && <p>Loading...</p>}
      {!loading && products && <ProductList products={products}/>}
    </main>
  )
}

export default HomePage