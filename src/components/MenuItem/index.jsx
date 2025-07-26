import classNames from "classnames/bind";
import styles from "./MenuItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const c = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <>
      <div
        className={c("MenuItem", "d-flex", "align-items-center")}
        onClick={onClick}
      >
        <div className={c("circle-bg")}>
          <div className={c("icon")}>
            <span>{data && data.icon}</span>
          </div>
        </div>
        <div className={c("title")}>{data && data.title}</div>
        <div className={c("rightArrow", "flex-item-right", "d-flex", "p-2")}>
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </div>
      </div>
    </>
  );
}

export default MenuItem;
