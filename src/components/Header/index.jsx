import styles from "./Header.module.css";
import { Image, Images } from "../../assets/images/index";
import classNames from "classnames/bind";
import Search from "../Search";
import { Svg, Svgs } from "../../assets/svgs";
import AccountMenu from "../Menu/AccountMenu";
import { useEffect, useRef, useState } from "react";
import MainMenu from "../Menu/MainMenu";

const c = classNames.bind(styles);

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <header className={c("container-fluid", "d-flex", "px-0", styles.header)}>
      {/* search */}
      <Search />

      {/* mainNav */}
      <ul className={c(styles.mainNav, "d-flex", "px-0")}>
        <li className={c()}>
          <Svg size="24px">{Svgs.home}</Svg>
        </li>
        <li className={c()}>
          <Svg size="24px">{Svgs.video}</Svg>
        </li>
        <li className={c()}>
          <Svg size="24px">{Svgs.group}</Svg>
        </li>
        <li className={c()}>
          <Svg size="24px">{Svgs.gaming}</Svg>
        </li>
      </ul>
      {/* userActions */}
      <ul className={c("userActions", "d-flex", "px-0")} ref={menuRef}>
        <li
          className={c("userActions__item")}
          onClick={() => handleMenuClick("MainMenu")}
        >
          <Svg>{Svgs.menu}</Svg>
        </li>
        <li className={c("userActions__item")}>
          <Svg viewBox={"0 0 12 12"}>{Svgs.message}</Svg>
        </li>
        <li className={c("userActions__item")}>
          <Svg>{Svgs.notification}</Svg>
        </li>
        <li
          className={c("userActions__item")}
          onClick={() => handleMenuClick("AccountMenu")}
        >
          <Image
            src={Images.avatar}
            alt="Avatar"
            width="40px"
            height="40px"
            style={{ borderRadius: "100px" }}
          />
        </li>
        <div className={c("menus")}>
          {activeMenu === "MainMenu" && <MainMenu />}
          {activeMenu === "AccountMenu" && <AccountMenu />}
        </div>
      </ul>
    </header>
  );
}

export default Header;
