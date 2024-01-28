import { getAllProducts } from "../../services/products";
import { useState, useEffect } from "react";
import ProductList from "../../containers/ProductList/ProductList";

const FavouritesPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts()
    .then((response) => {
      setLoading(false)
      setProducts(response);
    });
  }, []);

  //const prodCopy = [...products]

  const favouriteProducts = products.filter((product) => product.favourited)

  //console.log(favouriteProducts)

  return (
    <main>
      <h1>Favourites</h1>
      {loading && <p>Loading...</p>}
      {!loading && products && <ProductList products={favouriteProducts}/>}
    </main>
  )
}

export default FavouritesPage