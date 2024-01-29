import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const cartData = {cart, setCart};

  return <CartContext.Provider value={cartData}>{children}
  </CartContext.Provider>
}

export default CartContextProvider