import styles from "./MenuWrapper.module.css";
import classNames from "classnames/bind";

const c = classNames.bind(styles);

function MenuWrapper({ children, className, width, style }) {
  return (
    <div
      className={c("MenuWrapper", className)}
      //  ...style và { width } là 2 object nên đều cần phải ...spread
      style={{ ...style, ...(width ? { width } : {}) }}
    >
      {children}
    </div>
  );
}

export default MenuWrapper;
