import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import tableReducer from "./tableReducer";
import variantsReducer from "./variantsReducer";
import igvReducer from "./igvReducer";
import confirmationReducer from "./confirmationReducer";
import alertReducer from "./alertReducer";
import resultConfigReducer from "./resultConfigReducer";
import variantPageReducer from "./variantPageReducer";
import testReducer from "./testReducer";
import evidenceConfigReducer from "./evidenceConfigReducer";

export default combineReducers({
  test: testReducer,
  filters: filtersReducer,
  table: tableReducer,
  variants: variantsReducer,
  igv: igvReducer,
  confirmation: confirmationReducer,
  alert: alertReducer,
  resultConfig: resultConfigReducer,
  variantPage: combineReducers({
    pageData: variantPageReducer,
    evidenceConfig: evidenceConfigReducer
  })
});
