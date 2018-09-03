import { combineReducers } from "redux";

import cats from "../reducers/catsReducer";
import order from "../reducers/orderReducer";

// const store = createStore(reducer, middleware);

// store.dispatch(dispatch => {
//   dispatch({ type: "FETCH_CATS" });
//   cats
//     .getCats()
//     .then(res => {
//       dispatch({ type: "RECEIVE_CATS", payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: "FETCH_CATS_ERROR", payload: err });
//     });
// });

export default combineReducers({
  cats,
  order
});
