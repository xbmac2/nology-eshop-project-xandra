import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from "../../services/products";
import styles from "./ProductPage.module.scss"


const ProductPage = () => {

  const path = useParams();
  const id = path.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
    .then((result) => {
      setProduct(result)
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
    .finally(() => setLoading(false))
  }, [id]);

  return (
    <main>
      {/* <h1>Product name</h1> */}

      {loading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}

      {product && 
      ( <>

      <img src={product.image} className={styles.img}/>
      <h1>{product.productName}</h1>
        
      <p>${product.price}</p>

      <p>Quantity:</p>
      <p>Counter component - 1 +</p>
      <button>Add to Cart</button>
      <button>Add to Favourites</button>
      </>)
      }
    </main>
  )
}

export default ProductPage