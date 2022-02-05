import { createStore } from "redux";
import axios from "axios";

export const AppState = {
  category: "Kategoriya",
  status: "Online",
  spiker: "Spiker",
  data: [],
};

const reducer = (state = AppState, action) => {
  switch (action.type) {
    case "DATA_LOAD": {
      const { data } = action;
      return {
        ...state,
        data,
      };
    }
    case "CATEGORY_CHANGE": {
      const { category } = action;
      return {
        ...state,
        category,
      };
    }
    case "STATUS_CHANGE": {
      const { status } = action;
      return {
        ...state,
        status,
      };
    }
    case "SPIKER_CHANGE": {
      const { spiker } = action;
      return {
        ...state,
        spiker,
      };
    }

    default:
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
