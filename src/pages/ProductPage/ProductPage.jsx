import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById, getProductVariants } from "../../services/products";
import styles from "./ProductPage.module.scss"
import Counter from "../../components/Counter/Counter";


const ProductPage = () => {

  const path = useParams();
  const id = path.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [variants, setVariants] = useState([]);
  const [currentVariant, setCurrentVariant] = useState(0);

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

  //attempting variants below
  useEffect(() => {
    getProductVariants(id)
    .then((result) => setVariants(result))
  }, []);

  const handleChangeVariant = (variantIndex) => {
    setCurrentVariant(variantIndex);
    console.log(variantIndex)
  }

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
      <p>Left in stock: {variants.length > 0 && variants[currentVariant]?.quantity}</p>
      {/* <p>Left in stock: {variants[currentVariant]?.quantity ?? "unknown"}</p> */}
      {/* <p>Left in stock: { variants && variants[currentVariant].quantity}</p> */}

      <p>Variant: {variants.length > 0 && variants[currentVariant].variant}</p>
      {variants.map((variant, index) => {
        return <button onClick={() => handleChangeVariant(index)} key={index}>
          {variant.variant}
        </button>
      })}

      <p>Quantity:</p>
      <Counter maxCount={variants[currentVariant].quantity}/>
      <button>Add to Cart</button>
      <button>Add to Favourites</button>
      </>)
      }
    </main>
  )
}

export default ProductPage