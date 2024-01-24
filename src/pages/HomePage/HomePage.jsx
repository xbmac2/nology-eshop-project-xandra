import { useEffect, useState } from "react"
import styles from "./HomePage.module.scss"
import { getAllProducts } from "../../services/products";
import ProductList from "../../containers/ProductList/ProductList";

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
    <main>
      <h1>All Products</h1>
      {loading && <p>Loading...</p>}
      {!loading && products && <ProductList products={products}/>}
    </main>
  )
}

export default HomePage