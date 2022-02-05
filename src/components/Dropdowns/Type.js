import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import { Checkbox } from "../../Auth/pages/Dropdowns/Dropdowns";
import { StatusChange } from "./../../Actions/index";

function Type({ result, setResult, data }) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  function handleChangeValue() {
    if (status == "Online") {
      dispatch(StatusChange("Offline"));
    } else {
      dispatch(StatusChange("Online"));
    }
    let filtered = data.filter((item) => {
      if (item.status === status) {
        return false;
      } else {
        return true;
      }
    });
    setResult(filtered);
  }

  return (
    <li className="item">
      <Checkbox>
        <input className="checkbox" type="checkbox" id="radio" />
        <label
          className="checkbox-label"
          onClick={handleChangeValue}
          htmlFor="radio"
        >
          {status}
        </label>
      </Checkbox>
    </li>
  );
}

export default Type;
