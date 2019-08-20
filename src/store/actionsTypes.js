const SET_LOADING = "SET_LOADING";
// filters
const SET_FILTER_TYPE = "SET_FILTER_TYPE";
const SET_FILTER_VARIANT_CLASS_GERMLINE = "SET_FILTER_VARIANT_CLASS_GERMLINE";
const SET_FILTER_VARIANT_CLASS_SOMATIC = "SET_FILTER_VARIANT_CLASS_SOMATIC";
const SET_FILTER_HOT_SPOT = "SET_FILTER_HOT_SPOT";
const SET_FILTER_SNP = "SET_FILTER_SNP";
const SET_FILTER_ROI = "SET_FILTER_ROI";
const SET_FILTER_VAF = "SET_FILTER_VAF";
const SET_FILTER_CANCER_DBS = "SET_FILTER_CANCER_DBS";
const SET_FILTER_GNOM_ID = "SET_FILTER_GNOM_ID";
const SET_FILTER_ZYGOSITY = "SET_FILTER_ZYGOSITY";
const GET_FILTERED_DATA = "GET_FILTERED_DATA";
const CLEAR_FILTER_SECTION = "CLEAR_FILTER_SECTION";
const UPDATE_SEARCH = "UPDATE_SEARCH";
const SET_DEFAULT_FILTERS = "SET_DEFAULT_FILTERS";
const SET_FILTER_EFFECT = "SET_FILTER_EFFECT";

// table
const HANDLE_SELECTED_ROW = "HANDLE_SELECTED_ROW";
const HANDLE_SELECT_ALL_ROWS = "HANDLE_SELECT_ALL_ROWS";
const HANDLE_ZYGOSITY = "HANDLE_ZYGOSITY";
const SET_ZYGOSITY = "SET_ZYGOSITY";
const HANDLE_VARIANT_CLASS = "HANDLE_VARIANT_CLASS";
const APPLY_CONFIRMATION = "APPLY_CONFIRMATION";
const HANDLE_CONFIRMATION_STATUS = "HANDLE_CONFIRMATION_STATUS";
const HANDLE_UNCHECK_CONFIRMATION_DATA = "HANDLE_UNCHECK_CONFIRMATION_DATA";
const FETCH_TABLE_DATA_SUCCESS = "FETCH_TABLE_DATA_SUCCESS";
const FETCH_TABLE_DATA = "FETCH_TABLE_DATA";
const SET_SORT = "SET_SORT";
const SET_PARSED_DATA_TO_STORE = "SET_PARSED_DATA_TO_STORE";

const SET_NOTES_TO_STORE = "SET_NOTES_TO_STORE";
const TABLE_DATA_ADD_RESULT = "TABLE_DATA_ADD_RESULT";
const TABLE_DATA_EDIT_RESULT = "TABLE_DATA_EDIT_RESULT";
const SET_TABLE_REDUCER_LOADING = "SET_TABLE_REDUCER_LOADING";
const SET_CONFIRMATION_STATUS_TO_STORE = "SET_CONFIRMATION_STATUS_TO_STORE";


// confirmation
const HANDLE_ON_CONFIRMATION = "HANDLE_ON_CONFIRMATION";
const SEND_FOR_CONFIRMATION = "SEND_FOR_CONFIRMATION";
const SET_CONFIRMATION_DATA = "SET_CONFIRMATION_DATA";
const REMOVE_CONFIRMATION_ROW = "REMOVE_CONFIRMATION_ROW";
const HANDLE_CONFIRMATION_NOTES = "HANDLE_CONFIRMATION_NOTES";
const HANDLE_CONFIRMATION_PRIMER = "HANDLE_CONFIRMATION_PRIMER";
const HANDLE_CONFIRMATION_FRAGMENT_SIZE = "HANDLE_CONFIRMATION_FRAGMENT_SIZE";
const ADD_ADDITIONAL_CONFIRMATION_DATA = "ADD_ADDITIONAL_CONFIRMATION_DATA";
const REMOVE_ADDITIONAL_CONFIRMATION_DATA = "REMOVE_ADDITIONAL_CONFIRMATION_DATA";

// variants
const SET_MUTATION_TYPE = "SET_MUTATION_TYPE";
const SET_NOTES = "SET_NOTES";
const SET_TUMOR_INFO_MODE = "SET_TUMOR_INFO_MODE";
const SET_TUMOR_INFO = "SET_TUMOR_INFO";

// activity log
const UPDATE_ACTIVITY_LOG = "UPDATE_ACTIVITY_LOG";

// IGV
const FETCH_BAM_FILE = "FETCH_BAM_FILE";
const FETCH_BAM_FILE_STATUS = "FETCH_BAM_FILE_STATUS";
const HANDLE_IGV_ALERT_SHOW = "HANDLE_IGV_ALERT_SHOW";
const HANDLE_IGV_ALERT_SHOW_AGAIN = "HANDLE_IGV_ALERT_SHOW_AGAIN";
const GO_TO_CHR_POSITION_IGV = "GO_TO_CHR_POSITION_IGV";
const SET_IGV_LAST_QUERY = "SET_IGV_LAST_QUERY";

// alert
const SET_ALERT = "SET_ALERT";

// resultConfig
const HANDLE_RESULT_CONFIG_IS_OPEN = "HANDLE_RESULT_CONFIG_IS_OPEN";
const HANDLE_RESULT_CONFIG_IS_HGVS_LOADED = "HANDLE_RESULT_CONFIG_IS_HGVS_LOADED";
const HANDLE_RESULT_CONFIG_IS_ON_EDIT = "HANDLE_RESULT_CONFIG_IS_ON_EDIT";
const HANDLE_RESULT_CONFIG_GENE = "HANDLE_RESULT_CONFIG_GENE";
const HANDLE_RESULT_CONFIG_CHROMOSOME = "HANDLE_RESULT_CONFIG_CHROMOSOME";
const HANDLE_RESULT_CONFIG_POSITION = "HANDLE_RESULT_CONFIG_POSITION";
const HANDLE_RESULT_CONFIG_ALLELE_TYPE = "HANDLE_RESULT_CONFIG_ALLELE_TYPE";
const HANDLE_RESULT_CONFIG_ALLELE_REFERENCE = "HANDLE_RESULT_CONFIG_ALLELE_REFERENCE";
const HANDLE_RESULT_CONFIG_ALLELE_ALTERNATIVE = "HANDLE_RESULT_CONFIG_ALLELE_ALTERNATIVE";
const HANDLE_RESULT_CONFIG_VAF = "HANDLE_RESULT_CONFIG_VAF";
const HANDLE_RESULT_CONFIG_COVERAGE = "HANDLE_RESULT_CONFIG_COVERAGE";
const HANDLE_RESULT_CONFIG_CODING = "HANDLE_RESULT_CONFIG_CODING";
const HANDLE_RESULT_CONFIG_PROTEIN = "HANDLE_RESULT_CONFIG_PROTEIN";
const RESULT_CONFIG_LOAD_HGVS = "RESULT_CONFIG_LOAD_HGVS";
const HANDLE_RESULT_CONFIG_VALIDATION_FAILD_FIELDS = "HANDLE_RESULT_CONFIG_VALIDATION_FAILD_FIELDS";
const RESULT_CONFIG_ADD_RESULT = "RESULT_CONFIG_ADD_RESULT";
const RESULT_CONFIG_EDIT_RESULT = "RESULT_CONFIG_EDIT_RESULT";
const RESULT_CONFIG_SET_INITIAL_STATE = "RESULT_CONFIG_SET_INITIAL_STATE";
const RESULT_CONFIG_SET_ID = "RESULT_CONFIG_SET_ID";

// Variant page
const SET_VARIANT_CLASSIFICATION = "SET_VARIANT_CLASSIFICATION";
const SET_VARIANT_ZYGOSITY_TYPE = "SET_VARIANT_ZYGOSITY_TYPE";
const SET_GENE = "SET_GENE";
const SET_EXTERNAL_RESOURCES = "SET_EXTERNAL_RESOURCES";
const FETCH_VARIANT_DATA = "FETCH_VARIANT_DATA";
const SET_VARIANT_DATA = "SET_VARIANT_DATA";
const SEND_VARIANT_CLASS = "SEND_VARIANT_CLASS";
const SET_VARIANT_LOADING = "SET_VARIANT_LOADING";
const SET_EVIDENCE_ACTION_DATA = "SET_EVIDENCE_ACTION_DATA";
// - evidence table
const SET_ACTION_MODE = "SET_ACTION_MODE";
const ADD_EVIDENCE_ENTRY = "ADD_EVIDENCE_ENTRY";
const EDIT_EVIDENCE_ENTRY = "EDIT_EVIDENCE_ENTRY";
const SET_NEW_EVIDENCE_ENTRY = "SET_NEW_EVIDENCE_ENTRY";
const SET_EDITED_EVIDENCE_ENTRY = "SET_EDITED_EVIDENCE_ENTRY";
const FETCH_EVIDENCE_DATA = "FETCH_EVIDENCE_DATA";
const SET_EVIDENCE_DATA = "SET_EVIDENCE_DATA";
const DELETE_EVIDENCE_ENTRY = "DELETE_EVIDENCE_ENTRY";
const DELETE_EVIDENCE_ENTRY_FROM_STORE = "DELETE_EVIDENCE_ENTRY_FROM_STORE";
const FETCH_CLASSIFICATION_HISTORY = "FETCH_CLASSIFICATION_HISTORY";
const SET_CLASSIFICATION_HISTORY_TO_STORE = "SET_CLASSIFICATION_HISTORY_TO_STORE";
const SET_VARIANT_PAGE_LOADING = "SET_VARIANT_PAGE_LOADING";

// Case (test)
const FETCH_TEST_METADATA = "FETCH_TEST_METADATA";
const SET_TEST_DATA = "SET_TEST_DATA";
const SET_TEST_INFORMATION = "SET_TEST_INFORMATION";

// Tests
const FETCH_TESTS = "FETCH_TESTS";
const SET_TESTS_TO_STORE = "SET_TESTS_TO_STORE";
const SET_TESTS_LOADING = "SET_TESTS_LOADING";

export default {
  SET_LOADING,
  // filters
  SET_FILTER_TYPE,
  SET_FILTER_VARIANT_CLASS_GERMLINE,
  SET_FILTER_VARIANT_CLASS_SOMATIC,
  SET_FILTER_HOT_SPOT,
  SET_FILTER_SNP,
  SET_FILTER_ROI,
  SET_FILTER_VAF,
  SET_FILTER_CANCER_DBS,
  SET_FILTER_GNOM_ID,
  GET_FILTERED_DATA,
  CLEAR_FILTER_SECTION,
  UPDATE_SEARCH,
  SET_DEFAULT_FILTERS,
  SET_FILTER_ZYGOSITY,
  SET_FILTER_EFFECT,

  // table
  HANDLE_SELECTED_ROW,
  HANDLE_SELECT_ALL_ROWS,
  HANDLE_ZYGOSITY,
  HANDLE_VARIANT_CLASS,
  APPLY_CONFIRMATION,
  HANDLE_CONFIRMATION_STATUS,
  HANDLE_UNCHECK_CONFIRMATION_DATA,
  FETCH_TABLE_DATA_SUCCESS,
  FETCH_TABLE_DATA,
  SET_SORT,
  TABLE_DATA_ADD_RESULT,
  TABLE_DATA_EDIT_RESULT,
  SET_ZYGOSITY,
  SET_PARSED_DATA_TO_STORE,
  SET_NOTES_TO_STORE,
  SET_TABLE_REDUCER_LOADING,
  SET_CONFIRMATION_STATUS_TO_STORE,

  // confirmation
  HANDLE_ON_CONFIRMATION,
  SEND_FOR_CONFIRMATION,
  SET_CONFIRMATION_DATA,
  REMOVE_CONFIRMATION_ROW,
  HANDLE_CONFIRMATION_NOTES,
  HANDLE_CONFIRMATION_PRIMER,
  HANDLE_CONFIRMATION_FRAGMENT_SIZE,
  ADD_ADDITIONAL_CONFIRMATION_DATA,
  REMOVE_ADDITIONAL_CONFIRMATION_DATA,

  // variants
  SET_MUTATION_TYPE,
  SET_NOTES,
  SET_TUMOR_INFO_MODE,
  SET_TUMOR_INFO,

  // activity log
  UPDATE_ACTIVITY_LOG,

  // IGV
  FETCH_BAM_FILE,
  FETCH_BAM_FILE_STATUS,
  HANDLE_IGV_ALERT_SHOW,
  HANDLE_IGV_ALERT_SHOW_AGAIN,
  GO_TO_CHR_POSITION_IGV,
  SET_IGV_LAST_QUERY,

  // alert
  SET_ALERT,

  // resultConfig
  HANDLE_RESULT_CONFIG_IS_OPEN,
  HANDLE_RESULT_CONFIG_IS_HGVS_LOADED,
  HANDLE_RESULT_CONFIG_IS_ON_EDIT,
  HANDLE_RESULT_CONFIG_GENE,
  HANDLE_RESULT_CONFIG_CHROMOSOME,
  HANDLE_RESULT_CONFIG_POSITION,
  HANDLE_RESULT_CONFIG_ALLELE_TYPE,
  HANDLE_RESULT_CONFIG_ALLELE_REFERENCE,
  HANDLE_RESULT_CONFIG_ALLELE_ALTERNATIVE,
  HANDLE_RESULT_CONFIG_VAF,
  HANDLE_RESULT_CONFIG_COVERAGE,
  HANDLE_RESULT_CONFIG_CODING,
  HANDLE_RESULT_CONFIG_PROTEIN,
  RESULT_CONFIG_LOAD_HGVS,
  HANDLE_RESULT_CONFIG_VALIDATION_FAILD_FIELDS,
  RESULT_CONFIG_ADD_RESULT,
  RESULT_CONFIG_EDIT_RESULT,
  RESULT_CONFIG_SET_INITIAL_STATE,
  RESULT_CONFIG_SET_ID,

  // Variant page
  SET_GENE,
  SET_VARIANT_CLASSIFICATION,
  SET_VARIANT_ZYGOSITY_TYPE,
  SET_EXTERNAL_RESOURCES,
  FETCH_VARIANT_DATA,
  SET_VARIANT_DATA,
  SEND_VARIANT_CLASS,
  SET_TEST_INFORMATION,
  // - evidence table
  SET_ACTION_MODE,
  SET_EVIDENCE_ACTION_DATA,
  ADD_EVIDENCE_ENTRY,
  EDIT_EVIDENCE_ENTRY,
  SET_NEW_EVIDENCE_ENTRY,
  SET_EDITED_EVIDENCE_ENTRY,
  FETCH_EVIDENCE_DATA,
  SET_EVIDENCE_DATA,
  DELETE_EVIDENCE_ENTRY,
  DELETE_EVIDENCE_ENTRY_FROM_STORE,
  FETCH_CLASSIFICATION_HISTORY,
  SET_CLASSIFICATION_HISTORY_TO_STORE,
  SET_VARIANT_PAGE_LOADING,

  SET_VARIANT_LOADING,
  
  // Case (test)
  FETCH_TEST_METADATA,
  SET_TEST_DATA,

  // Tests
  FETCH_TESTS,
  SET_TESTS_TO_STORE,
  SET_TESTS_LOADING
};
