import styles from "./Header.module.css";
import { Image, Images } from "../../assets/images/index";
import classNames from "classnames/bind";
import Search from "../Search";
import { Svg, Svgs } from "../../assets/svgs";

const c = classNames.bind(styles);

function Header() {
  return (
    <header className={c("container-fluid", "d-flex", "px-0", styles.header)}>
      {/* search */}
      <Search />

      {/* mainNav */}
      <ul className={c(styles.mainNav, "d-flex", "px-0")}>
        <li className={c()}>
          <li className={c()}>
            <Svg size="24px">{Svgs.home}</Svg>
          </li>
        </li>
        <li className={c()}>
          <li className={c()}>
            <Svg size="24px">{Svgs.video}</Svg>
          </li>
        </li>
        <li className={c()}>
          <Svg size="24px">{Svgs.group}</Svg>
        </li>
        <li className={c()}>
          <Svg size="24px">{Svgs.gaming}</Svg>
        </li>
      </ul>
      {/* userActions */}
      <ul className={c(styles.userActions, "d-flex", "px-0")}>
        <li className={c()}>
          <Svg>{Svgs.menu}</Svg>
        </li>
        <li className={c()}>
          <Svg viewBox={"0 0 12 12"}>{Svgs.message}</Svg>
        </li>
        <li className={c()}>
          <Svg>{Svgs.notification}</Svg>
        </li>
        <li className={c()}>
          <Image
            src={Images.avatar}
            alt="Avatar"
            width="40px"
            height="40px"
            style={{ borderRadius: "100px" }}
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
