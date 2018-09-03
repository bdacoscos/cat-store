// // import cats data
// import cats from "../src/cats";

const initialState = {
  cats: {},
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(initialState, action) {
  switch (action.type) {
    case "FETCH_CATS": {
      return { ...state, fetching: true };
      break;
    }
    case "FETCH_CATS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
      break;
    }
    case "RECEIVE_CATS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        cats: action.payload
      };
      break;
    }
  }

  return state;
}
