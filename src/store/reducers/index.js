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
import testsPageReducer from "./testsPageReducer";
import evidenceConfigReducer from "./evidenceConfigReducer";
import confirmationPageReducer from "./confirmationPageReducer";
import coveragePageReducer from "./coveragePageReducer";
import finalReportReducer from "./finalReportReducer";

export default combineReducers({
  test: testReducer,
  tests: testsPageReducer,
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
  }),
  confirmationPage: confirmationPageReducer,
  coveragePage: coveragePageReducer,
  finalReport: finalReportReducer
});

