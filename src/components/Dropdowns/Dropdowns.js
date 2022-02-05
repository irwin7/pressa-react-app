import React from "react";
import Authors from "./Authors";
import Category from "./Category";
import DataTime from "./DataTime";
import Type from "./Type";
import { Dropdown } from "../../Auth/pages/Dropdowns/Dropdowns";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { InitialRequest } from "./../../Actions/index";
import { Button } from "../../Auth/Mixins";
import styled from "styled-components";
import { Colors } from "../../Auth/Variables";

function Dropdowns({ result }) {
  const filterOptions = useSelector((state) => state);
  const dispatch = useDispatch();

  function filterHandler() {
    let test = result.find(
      (element) => element.category_name === filterOptions.category
    ).category_id;
    if (filterOptions.category !== "Kategoriya") {
      if (filterOptions.spiker !== "Spiker") {
        (async function () {
          const { data } = await axios.get(
            `https://dream-team-n1.herokuapp.com/api/cards?categories=${test}&author=${
              filterOptions.spiker
            }&status=${filterOptions.status === "Online" ? true : false}`
          );
          dispatch(InitialRequest(data));
        })();
      }
    }
  }

  let style = {};

  if (window.innerWidth > 768) {
    style = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      transform: "translateX(-20px)",
    };
  } else {
    style = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "20px",
      transform: "translateX(-20px)",
    };
  }

  return (
    <div style={style}>
      <Dropdown>
        <DataTime />
        <Category result={result} />
        <Type result={result} />
        <Authors result={result} />
      </Dropdown>
      <Button
        className="btn"
        onClick={() => {
          filterHandler();
        }}
      >
        Qidiruv
      </Button>
    </div>
  );
}

export default Dropdowns;
