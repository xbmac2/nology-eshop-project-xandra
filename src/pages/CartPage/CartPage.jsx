import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartList from "../../containers/CartList/CartList";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  //console.log(cart);
  return (
    <main>
      <h1>Your Cart</h1>
      <CartList />
    </main>
  )
}

export default CartPage