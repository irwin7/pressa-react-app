import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpikerChange } from "./../../Actions/index";

function Authors({ result }) {
  const dispatch = useDispatch();
  const spiker = useSelector((state) => state.spiker);

  let [showCategory, setShowCategory] = useState("none");

  function showCategories() {
    if (showCategory === "none") {
      setShowCategory("block");
    } else {
      setShowCategory("none");
    }
  }

  return (
    <li className="item">
      <button onClick={showCategories}>
        {spiker}
        <i className="fal fa-chevron-down"></i>
      </button>
      <ul className="authors-list" style={{ display: showCategory }}>
        {result.map((item) => {
          return (
            <li key={item.id}>
              <button
                onClick={() => {
                  dispatch(SpikerChange(item.fullname));
                  setShowCategory("none");
                }}
              >
                {item.fullname}
              </button>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Authors;
