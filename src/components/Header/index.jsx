import styles from "./Header.module.css";
import { Image, Images } from "../../assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={`container-fluid ${styles.header}`}>
      {/* Logo */}
      <div className={`${styles.logo}`}>
        <Image
          src={Images.facebook}
          alt="Logo Facebook"
          width="40px"
          height="40px"
        />
      </div>
      {/* Search */}
      <div className={`${styles.search}`}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        <input type="text" placeholder="Search Facebook" />
      </div>
    </header>
  );
}

export default Header;
