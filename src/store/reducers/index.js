import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import variantsReducer from "./variantsReducer";

export default combineReducers({
  filters: filtersReducer,
  variants: variantsReducer
});
