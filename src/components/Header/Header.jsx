import styles from "./Header.module.scss"

const Header = ({heading}) => {
  return (
    <header className={styles.container}>
      <h1>{heading}</h1>
    </header>
  )
}

export default Header