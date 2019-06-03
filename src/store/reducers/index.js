import {combineReducers} from "redux";
import filtersReducer from "./filtersReducer";
import tableReducer from "./tableReducer";

export default combineReducers({
  filters: filtersReducer,
  table: tableReducer,
});
