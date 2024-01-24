import styles from "./ProductCard.module.scss"

const ProductCard = ({image = "", productName = "", price = ""}) => {
  return (
    <article className={styles.card}>
      <div className={styles.img__frame}>
        <img src={image} className={styles.img}/>
      </div>
      <h3>{productName}</h3>
      <p>${price}</p>
    </article>
  )
}

export default ProductCard