import { useEffect, useState } from "react";
import MenuItem from "../MenuItem";
import styles from "./Menu.module.css";
import classNames from "classnames/bind";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const c = classNames.bind(styles);

function Menu({ data, onLevelChange }) {
  const [history, setHistory] = useState([{ data: data }]);

  const current = history[history.length - 1];

  useEffect(() => {
    if (onLevelChange) {
      onLevelChange(history.length);
    }
  }, [history, onLevelChange]);

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
            }
          }}
        />
      );
    });
  };

  return (
    <>
      {history.length > 1 && (
        <div
          className={c("leftArrow")}
          onClick={() => {
            setHistory((prev) => prev.slice(0, prev.length - 1));
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          {current.title}
        </div>
      )}
      {renderItems()}
    </>
  );
}

export default Menu;
