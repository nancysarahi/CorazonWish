import {combineReducers} from "redux";

function cats(state = "", action) { 
  return state;
}

function myCatList(state = [], action) {
  if (action.type === "MY_CAT_LIST_LOADED"){
    return action.value
  }
return state;
}

const rootReducer = combineReducers({
  cats, 
  myCatList
});
export default rootReducer;
