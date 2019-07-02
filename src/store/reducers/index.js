import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import tableReducer from "./tableReducer";
import variantsReducer from "./variantsReducer";
import igvReducer from "./igvReducer";
import confirmationReducer from "./confirmationReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  filters: filtersReducer,
  table: tableReducer,
  variants: variantsReducer,
  igv: igvReducer,
  confirmation: confirmationReducer,
  alert: alertReducer
});
