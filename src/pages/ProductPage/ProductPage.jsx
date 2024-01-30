import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById, getProductVariants, toggleFavourite } from "../../services/products";
import styles from "./ProductPage.module.scss"
import Counter from "../../components/Counter/Counter";
import { CartContext } from "../../context/CartContextProvider";


const ProductPage = () => {

  const path = useParams();
  const id = path.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [variants, setVariants] = useState([]);
  const [currentVariant, setCurrentVariant] = useState(0);
  //const [maxCount, setMaxCount] = useState(null);
  const [favourite, setFavourite] = useState(null)

  const [qty, setQty] = useState(1);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
    .then((result) => {
      setProduct(result);
      setFavourite(result.favourited);
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

  //to solve quantity and variant issue
  useEffect(() => {
    if (!variants.length > 0) {
      return;
    }
    //setMaxCount(variants[currentVariant].quantity)
    setQty(1);
  }, [currentVariant]);

  //cart functionality below
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {

    const item = {
      productId: variants[currentVariant].id,
      productName: product.productName,
      image: variants[currentVariant].image,
      variant: variants[currentVariant].variant,
      pricePerUnit: product.price,
      units: qty,
      amountInStock: variants[currentVariant].quantity
    };
    setCart([...cart, item]);
    //console.log(item.amountInStock);
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

      <p>Quantity: {qty}</p>
      {variants.length > 0 && <Counter maxCount={variants[currentVariant].quantity} qty={qty} setQty={setQty}/>}
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={() => {toggleFavourite(id); setFavourite(!favourite)}}>{product.favourited ? "Favourited" : "Add to Favourites"}</button>
      </>)
      }
    </main>
  )
}

export default ProductPage