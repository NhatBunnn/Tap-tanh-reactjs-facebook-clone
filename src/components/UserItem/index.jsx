import styles from "./UserItem.module.css";
import classNames from "classnames/bind";
import { Image } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const c = classNames.bind(styles);

function UserItem({ data, onClose, noti, className }) {
  const handleClick = () => {
    if (onClose) onClose(data.id);
  };

  return (
    <div className={c("userItem", "d-flex", className)} data-id={data.id}>
      <Image
        className={c("avatar")}
        width="36px"
        height="36px"
        alt={data.full_name}
        src={data.avatar}
        style={{ borderRadius: "100px" }}
      ></Image>
      <div className={c("content")}>
        <div className={c("username")}>{data.full_name}</div>
        <div className={c("notification")}>
          {noti && <FontAwesomeIcon icon={faCircle} className={c("myIcon")} />}
          {noti}
        </div>
      </div>
      {onClose && (
        <div
          className={c("close-button", "flex-item-right")}
          onClick={handleClick}
        >
          ×
        </div>
      )}

      <div className="notification-status"></div>
    </div>
  );
}

export default UserItem;
