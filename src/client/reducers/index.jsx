import {combineReducers} from "redux";

const checkBox = (store, action) => {
  if (action.type === "TOGGLE_CHECK") {
    return {
      checked: !store.checked
    };
  }

  return store || {checked: false};
};

const number = (store, action) => {
  if (action.type === "INC_NUMBER") {
    return {
      value: store.value + 1
    };
  } else if (action.type === "DEC_NUMBER") {
    return {
      value: store.value - 1
    };
  }

  return store || {value: 0};
};

const userReducer = (state = {}, { type, payload }) => {
  if (type === "USER_LOGGED_IN") {
    return payload
  }
  if (type === "USER_LOGGED_OUT") {
    return {}
  }
  return state
}

export default combineReducers({
  checkBox,
  number,
  userReducer
});
