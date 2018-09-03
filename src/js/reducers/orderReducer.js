const initialState = {
  order: {},
  total: null,
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(initialState, action) {
  switch (action.type) {
    case "FETCH_ORDER": {
      return { ...state, fetching: true };
      break;
    }
    case "FETCH_ORDER_ERROR": {
      return { ...state, fetching: false, error: action.payload };
      break;
    }
    case "RECEIVE_ORDER": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        order: action.payload
      };
      break;
    }
    case "COUPON_VALID": {
      return {
        ...state,
        order: action.payload
      }
      break;
    }
  }

  return state;
}
