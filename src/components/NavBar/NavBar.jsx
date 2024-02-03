import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

  const solidHeart = <FontAwesomeIcon icon={fasHeart} style={{color: "#4D2574",}}/>;
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} style={{color: "#4D2574",}}/>;

  return (
    <nav className={styles.nav}>
      <NavLink to="/"><h2 className={styles.name}>Dream Florist</h2></NavLink>
      <span className={styles.icons}>
        <NavLink to="/favourites"><h2>{solidHeart}</h2></NavLink>
        <NavLink to="/cart"><h2>{cartIcon}</h2></NavLink>
      </span>
    </nav>
  )
}

export default NavBar