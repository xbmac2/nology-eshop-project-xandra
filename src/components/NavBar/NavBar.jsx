import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.scss"

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  )
}

export default NavBar