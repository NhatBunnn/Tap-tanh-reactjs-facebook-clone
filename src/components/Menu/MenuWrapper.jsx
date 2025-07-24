import styles from "./MenuWrapper.module.css";
import classNames from "classnames/bind";

const c = classNames.bind(styles);

function MenuWrapper({ children }) {
  return <div className={c("MenuWrapper")}>{children}</div>;
}

export default MenuWrapper;
