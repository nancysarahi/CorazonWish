import {combineReducers} from "redux";

function kids(state = [], action) {
  if (action.type === "KIDS_LOADED"){
    return action.value
  }
return state;
}

const rootReducer = combineReducers({
  kids, 
});
export default rootReducer;
