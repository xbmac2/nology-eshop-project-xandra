import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartList from "../../containers/CartList/CartList";
import styles from "./CartPage.module.scss";
import Header from "../../components/Header/Header";
import { updateQuantity } from "../../services/products";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const [checkedOut, setCheckedOut] = useState(null);

  useEffect(() => {
    setCheckedOut(false);

    return () => setCheckedOut(false);
  }, []);

  const handleCheckout = () => {
    updateQuantity("EF6d5M7rlXl0HH15ij8Z");
    console.log(cart);
  };

  

  //console.log(cart);
  return (
    <main className={styles.page}>
      <Header heading={"Your Cart"}/>
      <div className={styles.container}>
        <CartList />
        {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
      </div>
      
    </main>
  )
}

export default CartPage