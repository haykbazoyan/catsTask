/* eslint-disable array-callback-return */
import { legacy_createStore as createStore } from "redux";
import { INCREMENT, ADD_DATA } from "./types";

const initialState = {
  count: 0,
  data: [],
};

const api_url =
  "https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1";

async function getAPI(url) {
  const response = await fetch(url);

  let data = await response.json();

  return data.map((el) => el.url);
}

const data = getAPI(api_url);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ADD_DATA:
      return {
        ...state,
        data: data,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
