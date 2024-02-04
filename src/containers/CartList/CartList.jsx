import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./CartList.module.scss";

const CartList = () => {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce((total, item) => total + (item.pricePerUnit * item.units), 0);

  return (
    <section>
      
      {cart.length > 0 && cart.map((item) => {
        return <CartCard 
          key={item.variantId}
          productId={item.productId}
          variantId={item.variantId}
          productName={item.productName}
          pricePerUnit={item.pricePerUnit}
          variant={item.variant}
          image={item.image}
          units={item.units}
          amountInStock={item.amountInStock}
        />
      })}

      {cart.length > 0  && <p className={styles.subtotal}>Subtotal: ${subtotal}</p>}
      {cart.length === 0  && <p>Nothing in your cart right now</p>}
    </section>
  )
}

export default CartList