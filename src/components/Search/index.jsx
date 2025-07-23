import styles from "./Search.module.css";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Image, Images } from "../../assets/images/index";
import UserItem from "../UserItem";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const c = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [move, setMove] = useState(false);

  const deBounced = useDebounce(searchValue, 500);
  const searchRef = useRef(null);
  const currentInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResult(false);
        setMove(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!deBounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        deBounced
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [deBounced]);

  useEffect(() => {
    if (showResult) {
      setMove(true);
      currentInputRef.current?.focus();
    }
  }, [showResult]);

  const handleClose = (userId) => {
    setSearchResult(searchResult.filter((user) => user.id !== userId));
  };

  return (
    // Search Container
    <div className={c("d-flex", "searchContainer")} ref={searchRef}>
      {/* Search warpper */}
      <div className={c("d-flex", "searchWarpper")}>
        <div className={c("logo")}>
          <Image
            src={Images.facebook}
            alt="Logo Facebook"
            width="40px"
            height="40px"
          />
        </div>
        <div className={c("search")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          <input
            type="text"
            placeholder="Search Facebook"
            value={searchValue}
            onFocus={() => setShowResult(true)}
          />
        </div>
      </div>

      {/* Search result */}
      {showResult ? (
        <div className={c("searchResult")}>
          <div className={c("result__searchWarpper", "d-flex")}>
            <div
              className={c("result__icon", move ? "move" : "")}
              onClick={() => setShowResult(false)}
            >
              <FontAwesomeIcon icon={faArrowRight} rotation={180} />
            </div>
            <div
              className={c(
                "result__search",
                "flex-item-right",
                move ? "move" : ""
              )}
            >
              <input
                type="text"
                placeholder="Search Facebook"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                ref={currentInputRef}
              />
            </div>
          </div>
          {!searchResult.length > 0 && (
            <ul className={c("searchResult-title", "d-flex")}>
              <li>Recent</li>
              <li className="flex-item-right">
                <a href="/Link">Link</a>
              </li>
            </ul>
          )}

          <ul className={c("Result__userLists")}>
            {searchResult.map((result) => {
              return (
                <li key={result.id}>
                  <UserItem data={result} onClose={handleClose} />
                </li>
              );
            })}
            {loading && (
              <li className={c("d-flex", "justify-content-center")}>
                <FontAwesomeIcon
                  icon={faSpinner}
                  className={c("loading", "fa-spin")}
                />
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
