import styles from "./MainMenu.module.css";
import classNames from "classnames/bind";

const c = classNames.bind(styles);

function MainMenu() {
  return (
    <div className={c("MainMenu")}>
      <h2>MainMenu</h2>
    </div>
  );
}

export default MainMenu;
