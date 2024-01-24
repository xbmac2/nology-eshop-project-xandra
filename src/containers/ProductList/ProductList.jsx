import ProductCard from "../../components/ProductCard/ProductCard"
import styles from "./ProductList.module.scss"


const ProductList = ({ products }) => {
  return (
    <section className={styles.products__section}>
      {products && products.map((product) => {
        return <ProductCard 
          key={product.id}
          productName={product.productName}
          price={product.price}
          image={product.image}
        />
      })}
    </section>
  )
}

export default ProductList