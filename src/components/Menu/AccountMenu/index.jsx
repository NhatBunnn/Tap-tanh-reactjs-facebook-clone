import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Images } from "../../../assets/images";
import UserItem from "../../UserItem";
import MenuWrapper from "../MenuWrapper/MenuWrapper";
import styles from "./AccountMenu.module.css";
import classNames from "classnames/bind";
import {
  faCircleExclamation,
  faCircleQuestion,
  faGear,
  faMoon,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import { useState } from "react";

const c = classNames.bind(styles);

const fakeUser = {
  id: "1",
  full_name: "Nhật Bủn",
  avatar: Images.avatar,
};

const menu = [
  {
    title: "Settings & privacy",
    icon: <FontAwesomeIcon icon={faGear} />,
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    title: "Help & support",
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
  },
  {
    title: "Help & support",
    icon: <FontAwesomeIcon icon={faMoon} />,
  },
  {
    title: "Help & support",
    icon: <FontAwesomeIcon icon={faCircleExclamation} />,
  },
  {
    title: "Help & support",
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
  },
];

function AccountMenu() {
  const [menuLevel, setMenuLevel] = useState(1);

  return (
    <MenuWrapper width="360px" className={c("d-flex")}>
      {menuLevel === 1 && (
        <div className={c("AccountMenu")}>
          <div>
            <UserItem data={fakeUser} className={c("account")} />
          </div>
          <div className={c("line")}>
            <UserItem data={fakeUser} className={c("fanpage")} />
          </div>
          <div className={c("line")}>
            <button className={c("line")}>See all profiles</button>
          </div>
        </div>
      )}
      <div className={c("Setting")}>
        <Menu data={menu} onLevelChange={(level) => setMenuLevel(level)} />
      </div>
    </MenuWrapper>
  );
}

export default AccountMenu;
