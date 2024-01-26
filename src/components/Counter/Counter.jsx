import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = ({ maxCount }) => {

  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    if (qty < maxCount) {
      setQty(qty + 1);
    }
  }

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  return (
    <div className={styles.container}>
      <p>Quantity: {qty}</p>
      <div className={styles.counter}>
        <button onClick={handleDecrement}>-</button>
        <input type="number" name="" id="" className={styles.input} value={qty} min={1} max={maxCount} onChange={e => setQty(e.target.value)}/>
        <button onClick={handleIncrement}>+</button>
      </div>
      
    </div>
  )
}

export default Counter