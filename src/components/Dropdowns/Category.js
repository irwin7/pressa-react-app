import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeCategory } from "./../../Actions/index";

const URL = "https://dream-team-n1.herokuapp.com/api/categories";

const URL_CARD = "https://dream-team-n1.herokuapp.com/api/cards";

function Category({ result: cardResult }) {
  const [result, setResult] = useState([]);
  const [current, setCurrent] = useState([]);
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState([]);
  const selectedCategory = useSelector((state) => state.category);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setCurrentCategory(data[0].sap_categories);
      });

    fetch(URL_CARD)
      .then((res) => res.json())
      .then((data) => {
        setCurrent(data);
      });
  }, []);

  function filterHandler(item) {
    dispatch(ChangeCategory(item.name));
  }

  let [showCategory, setShowCategory] = useState("none");

  function showCategories() {
    if (showCategory === "none") {
      setShowCategory("flex");
    } else {
      setShowCategory("none");
    }
  }

  return (
    <li className="item">
      <button onClick={showCategories}>
        {selectedCategory}
        <i className="fal fa-chevron-down"></i>
      </button>
      <div className="inner" style={{ display: showCategory }}>
        <ul className="category-list">
          {result.map((item) => {
            return (
              <li
                onMouseEnter={() => {
                  setCurrentCategory(item.sap_categories);
                }}
                className="category-item"
                key={item.id}
              >
                <button className="category-btn">{item.category}</button>
                <i className="fal fa-chevron-right"></i>
              </li>
            );
          })}
        </ul>
        <ul className="sub-category-list">
          {currentCategory[0] &&
            currentCategory.map((item) => {
              return (
                <li className="sub-category-item" key={item.id}>
                  <button
                    onClick={() => {
                      filterHandler(item);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </li>
  );
}

export default Category;
