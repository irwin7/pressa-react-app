import axios from "axios";
import React, { useState } from "react";
import { Container } from "../../../../Auth/Containers";
import { Wrapper } from "../../../../Auth/pages/HomePage/Search/Search";
import Dropdowns from "../../../Dropdowns/Dropdowns";
import { useDispatch } from "react-redux";
import { InitialRequest } from "./../../../../Actions/index";

function Search({ result }) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function ShowCancelBtn(e) {
    e.preventDefault();
    (async function () {
      const { data } = await axios.get(
        `https://dream-team-n1.herokuapp.com/api/cards?search=${search}`
      );
      dispatch(InitialRequest(data));
    })();
  }

  function ClearSearch() {
    setSearch("");
  }

  return (
    <Container>
      <Wrapper>
        <div>
          <h1>Master klasslarni topish yanada oson</h1>
        </div>
        <form onSubmit={ShowCancelBtn}>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            placeholder="Search"
            value={search}
            list="data-authors"
          />
          <span>
            <button
              type="button"
              onClick={ClearSearch}
              style={
                search.length > 0 && window.innerWidth > 576
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
            >
              <i className="fal fa-times"></i>
            </button>
            <button type="submit">
              <i className="far fa-search"></i>
            </button>
          </span>
        </form>
        <Dropdowns result={result} />
      </Wrapper>
    </Container>
  );
}

export default Search;
