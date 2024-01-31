import { useContext, useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./CartCard.module.scss";
import { CartContext } from "../../context/CartContextProvider";

const CartCard = ({ productName, pricePerUnit, variant, image, units, amountInStock, productId}) => {

  const totalForItem = pricePerUnit * units;
  const [qty, setQty] = useState(units);

  //if qty changes, update item
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    const editedCart = cart.map((item) => {
      if (item.productId !== productId) {
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
      item.productId !== productId
    ));
  }

  return (
    <article className={styles.card}>
      <img src={image}/>
      <div className={styles.container}>
        <p><b>{productName}</b></p>
        <p>{variant}</p>
        {/* <p>qty{units}</p> */}
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