import { useContext, useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./CartCard.module.scss";
import { CartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";

const CartCard = ({ productName, pricePerUnit, variant, image, units, amountInStock, productId, variantId}) => {

  const totalForItem = pricePerUnit * units;
  const [qty, setQty] = useState(units);

  //if qty changes, update item
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    const editedCart = cart.map((item) => {
      if (item.variantId !== variantId) {
        return item;
      } else {
        return {
          ...item,
          units: qty
        }
      }
    })
    setCart(editedCart);
  }, [qty])

  //remove item
  const removeItem = () => {
    setCart(cart.filter(item =>
      item.variantId !== variantId
    ));
  }

  return (
    <article className={styles.card}>
      <Link to={`/product/${productId}`}><img src={image}/></Link>
      <div className={styles.container}>
        <p><b>{productName}</b></p>
        <p>{variant}</p>
        <p>${totalForItem}</p>
        <span className={styles.inline}>
          <Counter qty={qty} setQty={setQty} maxCount={amountInStock}/>
          <small onClick={removeItem}>Remove</small>
        </span>
        
      </div>
    </article>
  )
}

export default CartCard