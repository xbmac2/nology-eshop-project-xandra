import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartList from "../../containers/CartList/CartList";
import styles from "./CartPage.module.scss";
import Header from "../../components/Header/Header";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  //console.log(cart);
  return (
    <main className={styles.page}>
      <Header heading={"Your Cart"}/>
      <div className={styles.container}>
        <CartList />
      </div>
      
    </main>
  )
}

export default CartPage