import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { ContainerFluid } from "../../../Auth/Containers";
import List from "./List/List";
import Search from "./Search/Search";

function HomePage({ result, pages, setPages, card, setCard, setHandleId }) {
  return (
    <main>
      <Search result={result} />
      <ContainerFluid>
        <List
          result={result}
          pages={pages}
          setPages={setPages}
          card={card}
          setCard={setCard}
          setHandleId={setHandleId}
        />
      </ContainerFluid>
    </main>
  );
}

export default HomePage;
