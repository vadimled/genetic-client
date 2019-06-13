import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import tableReducer from "./tableReducer";
import variantsReducer from "./variantsReducer";
import igvReducer from "./igvReducer";

export default combineReducers({
  filters: filtersReducer,
  table: tableReducer,
  variants: variantsReducer,
  igv: igvReducer
});
