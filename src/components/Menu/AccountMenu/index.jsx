import MenuWrapper from "../MenuWrapper";
import styles from "./AccountMenu.module.css";
import classNames from "classnames/bind";

const c = classNames.bind(styles);

function AccountMenu() {
  return (
    <MenuWrapper>
      <div className={c("AccountMenu")}>
        <h2>AccountMenu</h2>
      </div>
    </MenuWrapper>
  );
}

export default AccountMenu;
