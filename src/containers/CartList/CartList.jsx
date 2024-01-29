import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./CartList.module.scss";

const CartList = () => {
  const { cart, setCart } = useContext(CartContext);
  //subtotal using state? or using map then reduce from js challenges?

  return (
    <section className={styles.container}>
      <p>CartList container. map cards below</p>
      {cart.length > 0 && cart.map((item) => {
        return <CartCard 
          key={item.productId}
          productId={item.productId}
          productName={item.productName}
          pricePerUnit={item.pricePerUnit}
          variant={item.variant}
          image={item.image}
          units={item.units}
          amountInStock={item.amountInStock}
        />
      })}

      <p>Subtotal:</p>
    </section>
  )
}

export default CartList