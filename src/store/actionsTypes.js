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
const SAVE_USER_PREFERENCES_FILTERS = "SAVE_USER_PREFERENCES_FILTERS";

// table
const HANDLE_SELECTED_ROW = "HANDLE_SELECTED_ROW";
const HANDLE_SELECT_ALL_ROWS = "HANDLE_SELECT_ALL_ROWS";
const HANDLE_ZYGOSITY = "HANDLE_ZYGOSITY";
const HANDLE_VARIANT_CLASS = "HANDLE_VARIANT_CLASS";
const APPLY_CONFIRMATION = "APPLY_CONFIRMATION";
const HANDLE_CONFIRMATION_STATUS = "HANDLE_CONFIRMATION_STATUS";
const HANDLE_UNCHECK_CONFIRMATION_DATA = "HANDLE_UNCHECK_CONFIRMATION_DATA";
const FETCH_TABLE_DATA_SUCCESS = "FETCH_TABLE_DATA_SUCCESS";
const FETCH_TABLE_DATA = "FETCH_TABLE_DATA";
const SET_SORT = "SET_SORT";
const SET_PARSED_DATA_TO_STORE = "SET_PARSED_DATA_TO_STORE";
const TABLE_DATA_ADD_RESULT = "TABLE_DATA_ADD_RESULT";
const SET_TABLE_REDUCER_LOADING = "SET_TABLE_REDUCER_LOADING";
const SET_CONFIRMATION_STATUS_TO_STORE = "SET_CONFIRMATION_STATUS_TO_STORE";
const EXPORT_TABLE = "EXPORT_TABLE";
const UPDATE_VARIANT_IN_TABLE_DATA = "UPDATE_VARIANT_IN_TABLE_DATA";
const SAVE_USER_PREFERENCES_SORTING = "SAVE_USER_PREFERENCES_SORTING";
const FETCH_USER_PREFERENCES = "FETCH_USER_PREFERENCES";
const APPLY_CONFIRMATION_SUCCESS = "APPLY_CONFIRMATION_SUCCESS";
const SET_TABLE_CURRENT_PAGE = "SET_TABLE_CURRENT_PAGE";

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

// IGV
const FETCH_BAM_FILE = "FETCH_BAM_FILE";
const FETCH_BAM_FILE_STATUS = "FETCH_BAM_FILE_STATUS";
const HANDLE_IGV_ALERT_SHOW = "HANDLE_IGV_ALERT_SHOW";
const HANDLE_IGV_ALERT_SHOW_AGAIN = "HANDLE_IGV_ALERT_SHOW_AGAIN";
const GO_TO_CHR_POSITION_IGV = "GO_TO_CHR_POSITION_IGV";
const SET_IGV_LAST_QUERY = "SET_IGV_LAST_QUERY";
const SET_BAM_FILE_TO_STORE = "SET_BAM_FILE_TO_STORE";

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
const HANDLE_RESULT_CONFIG_TRANSCRIPT = "HANDLE_RESULT_CONFIG_TRANSCRIPT";
const RESULT_CONFIG_LOAD_HGVS = "RESULT_CONFIG_LOAD_HGVS";
const HANDLE_RESULT_CONFIG_VALIDATION_FAILD_FIELDS = "HANDLE_RESULT_CONFIG_VALIDATION_FAILD_FIELDS";
const RESULT_CONFIG_ADD_RESULT = "RESULT_CONFIG_ADD_RESULT";
const RESULT_CONFIG_EDIT_RESULT = "RESULT_CONFIG_EDIT_RESULT";
const RESULT_CONFIG_SET_INITIAL_STATE = "RESULT_CONFIG_SET_INITIAL_STATE";
const RESULT_CONFIG_SET_ID = "RESULT_CONFIG_SET_ID";

// Variant page
const SET_VARIANT_CLASS = "SET_VARIANT_CLASS";
const SET_VARIANT_ZYGOSITY_TYPE = "SET_VARIANT_ZYGOSITY_TYPE";
const SET_GENE = "SET_GENE";
const SET_EXTERNAL_RESOURCES = "SET_EXTERNAL_RESOURCES";
const FETCH_VARIANT_METADATA = "FETCH_VARIANT_METADATA";
const SET_VARIANT_METADATA = "SET_VARIANT_METADATA";
const SET_SERVER_VARIANT_METADATA = "SET_SERVER_VARIANT_METADATA";
const SEND_VARIANT_CLASS = "SEND_VARIANT_CLASS";
const SET_VARIANT_LOADING = "SET_VARIANT_LOADING";
const SET_EVIDENCE_ACTION_DATA = "SET_EVIDENCE_ACTION_DATA";
const CLEAN_EVIDENCE_ACTION_DATA = "CLEAN_EVIDENCE_ACTION_DATA";
const SET_HISTORY_TABLE_DATA = "SET_HISTORY_TABLE_DATA";
const SET_CURRENT_VARIANT_CLASS = "SET_CURRENT_VARIANT_CLASS";
const SET_RECONFIRM_STATUS = "SET_RECONFIRM_STATUS";
const SET_TEST_INFORMATION = "SET_TEST_INFORMATION";
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
const SET_CURRENT_EVIDENCE_TAB = "SET_CURRENT_EVIDENCE_TAB";

// Case (test)
const FETCH_TEST_METADATA = "FETCH_TEST_METADATA";
const SET_TEST_DATA = "SET_TEST_DATA";
const SAVE_TEST_PHENOTYPE = "SAVE_TEST_PHENOTYPE";

// Tests
const FETCH_TESTS = "FETCH_TESTS";
const SET_TESTS_TO_STORE = "SET_TESTS_TO_STORE";
const SET_TESTS_LOADING = "SET_TESTS_LOADING";
const SET_TUMOR_INFO_LOADING = "SET_TUMOR_INFO_LOADING";

// Confirmation Page
const FETCH_CONFIRMATION_PAGE_METADATA = "FETCH_CONFIRMATION_PAGE_METADATA";
const SET_CONFIRMATION_PAGE_METADATA = "SET_CONFIRMATION_PAGE_METADATA";

// Coverage Page
const HANDLE_SELECTED_ROW_COVERAGE = "HANDLE_SELECTED_ROW_COVERAGE";
const HANDLE_SELECT_ALL_ROWS_COVERAGE = "HANDLE_SELECT_ALL_ROWS_COVERAGE";
const SET_COVERAGE_TABLE_REDUCER_LOADING = "SET_COVERAGE_TABLE_REDUCER_LOADING";
const FETCH_COVERAGE_TABLE_DATA_SUCCESS = "FETCH_COVERAGE_TABLE_DATA_SUCCESS";
const FETCH_COVERAGE_TABLE_DATA = "FETCH_COVERAGE_TABLE_DATA";


// Final report page
const SET_FINAL_REPORT_DNA_VARIANTS_TO_STORE = "SET_FINAL_REPORT_DNA_VARIANTS_TO_STORE";
const SET_ACTIONABLE_ALTERATIONS = "SET_ACTIONABLE_ALTERATIONS";
const ADD_ROW = "ADD_ROW";
const REMOVE_SELECTED_TABLE_ROW = "REMOVE_SELECTED_TABLE_ROW";
const POST_ACTIONABLE_ALTERATIONS = "POST_ACTIONABLE_ALTERATIONS";
const FETCH_FINAL_REPORT_VARIANTS = "FETCH_FINAL_REPORT_VARIANTS";
const SET_FINAL_REPORT_VARIANTS_TO_STORE = "SET_FINAL_REPORT_VARIANTS_TO_STORE";
const DELETE_ACTIONABLE_ALTERATION = "DELETE_ACTIONABLE_ALTERATION";
const DELETE_ACTIONABLE_ALTERATION_FROM_STORE = "DELETE_ACTIONABLE_ALTERATION_FROM_STORE";
const REMOVE_CLINICAL_SELECTED_ROW_FROM_STORE = "REMOVE_CLINICAL_SELECTED_ROW_FROM_STORE";
const FETCH_ACTIONABLE_ALTERATIONS = "FETCH_ACTIONABLE_ALTERATIONS";
const FETCH_FINAL_REPORT_CLINICAL_DATA = "FETCH_FINAL_REPORT_CLINICAL_DATA";
const SET_FINAL_REPORT_ACTIONABLE_DATA_TO_STORE = "SET_FINAL_REPORT_ACTIONABLE_DATA_TO_STORE";
const SET_FINAL_REPORT_CLINICAL_DATA_TO_STORE = "SET_FINAL_REPORT_CLINICAL_DATA_TO_STORE";
const SET_SELECTED_ACTIONABLE_ALTERATION_ID = "SET_SELECTED_ACTIONABLE_ALTERATION_ID";
const SET_FINAL_REPORT_NAVIGATION_VALUE = "SET_FINAL_REPORT_NAVIGATION_VALUE";
const SET_CURRENT_ACTIONABLE_ALTERATION_TAB = "SET_CURRENT_ACTIONABLE_ALTERATION_TAB";
const SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION_TO_STORE = "SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION_TO_STORE";
const SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION = "SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION";
const SET_EXPANDED_TAB_TEXTAREA_CONTENT_SAVED = "SET_EXPANDED_TAB_TEXTAREA_CONTENT_SAVED";
const SET_IS_SELECT_VARIANTS_FOR_ACTIONABLE_ALTERATIONS = "SET_IS_SELECT_VARIANTS_FOR_ACTIONABLE_ALTERATIONS";
const SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION = "SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION";
const SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_SAVED = "SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_SAVED";
const SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_TO_STORE = "SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_TO_STORE";
const SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL = "SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL";
const SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL_TO_STORE = "SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL_TO_STORE";
const HANDLE_FINAL_REPORT_SELECTED_VARIANTS_IDS_FOR_ACTIONABLE_ALTERATIONS = "HANDLE_FINAL_REPORT_SELECTED_VARIANTS_IDS_FOR_ACTIONABLE_ALTERATIONS";
const HANDLE_FINAL_REPORT_SELECT_ALL_VARIANTS_FOR_ACTIONABLE_ALTERATIONS = "HANDLE_FINAL_REPORT_SELECT_ALL_VARIANTS_FOR_ACTIONABLE_ALTERATIONS";

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
  SAVE_USER_PREFERENCES_FILTERS,

  // table
  HANDLE_SELECTED_ROW,
  HANDLE_SELECT_ALL_ROWS,
  HANDLE_ZYGOSITY,
  HANDLE_VARIANT_CLASS,
  APPLY_CONFIRMATION,
  APPLY_CONFIRMATION_SUCCESS,
  HANDLE_CONFIRMATION_STATUS,
  HANDLE_UNCHECK_CONFIRMATION_DATA,
  FETCH_TABLE_DATA_SUCCESS,
  FETCH_TABLE_DATA,
  SET_SORT,
  TABLE_DATA_ADD_RESULT,
  SET_PARSED_DATA_TO_STORE,
  SET_TABLE_REDUCER_LOADING,
  SET_CONFIRMATION_STATUS_TO_STORE,
  EXPORT_TABLE,
  UPDATE_VARIANT_IN_TABLE_DATA,
  SAVE_USER_PREFERENCES_SORTING,
  FETCH_USER_PREFERENCES,
  SET_TABLE_CURRENT_PAGE,

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

  // IGV
  FETCH_BAM_FILE,
  FETCH_BAM_FILE_STATUS,
  HANDLE_IGV_ALERT_SHOW,
  HANDLE_IGV_ALERT_SHOW_AGAIN,
  GO_TO_CHR_POSITION_IGV,
  SET_IGV_LAST_QUERY,
  SET_BAM_FILE_TO_STORE,

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
  HANDLE_RESULT_CONFIG_TRANSCRIPT,
  RESULT_CONFIG_LOAD_HGVS,
  HANDLE_RESULT_CONFIG_VALIDATION_FAILD_FIELDS,
  RESULT_CONFIG_ADD_RESULT,
  RESULT_CONFIG_EDIT_RESULT,
  RESULT_CONFIG_SET_INITIAL_STATE,
  RESULT_CONFIG_SET_ID,

  // Variant page
  SET_GENE,
  SET_VARIANT_CLASS,
  SET_VARIANT_ZYGOSITY_TYPE,
  SET_EXTERNAL_RESOURCES,
  FETCH_VARIANT_METADATA,
  SET_VARIANT_METADATA,
  SET_SERVER_VARIANT_METADATA,
  SEND_VARIANT_CLASS,
  SET_TEST_INFORMATION,
  SET_HISTORY_TABLE_DATA,
  SET_CURRENT_VARIANT_CLASS,
  SET_RECONFIRM_STATUS,
  // - evidence table
  SET_ACTION_MODE,
  SET_EVIDENCE_ACTION_DATA,
  CLEAN_EVIDENCE_ACTION_DATA,
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
  SET_CURRENT_EVIDENCE_TAB,

  SET_VARIANT_LOADING,

  // Case (test)
  FETCH_TEST_METADATA,
  SET_TEST_DATA,
  SAVE_TEST_PHENOTYPE,

  // Tests
  FETCH_TESTS,
  SET_TESTS_TO_STORE,
  SET_TESTS_LOADING,
  SET_TUMOR_INFO_LOADING,

  // Confirmation Page
  FETCH_CONFIRMATION_PAGE_METADATA,
  SET_CONFIRMATION_PAGE_METADATA,

  // CoveragePage
  HANDLE_SELECTED_ROW_COVERAGE,
  HANDLE_SELECT_ALL_ROWS_COVERAGE,
  FETCH_COVERAGE_TABLE_DATA_SUCCESS,
  SET_COVERAGE_TABLE_REDUCER_LOADING,
  FETCH_COVERAGE_TABLE_DATA,

  // Final report
  FETCH_ACTIONABLE_ALTERATIONS,
  FETCH_FINAL_REPORT_CLINICAL_DATA,
  ADD_ROW,
  REMOVE_SELECTED_TABLE_ROW,
  POST_ACTIONABLE_ALTERATIONS,
  FETCH_FINAL_REPORT_VARIANTS,
  SET_FINAL_REPORT_VARIANTS_TO_STORE,
  SET_ACTIONABLE_ALTERATIONS,
  DELETE_ACTIONABLE_ALTERATION,
  DELETE_ACTIONABLE_ALTERATION_FROM_STORE,
  REMOVE_CLINICAL_SELECTED_ROW_FROM_STORE,
  SET_FINAL_REPORT_DNA_VARIANTS_TO_STORE,
  SET_FINAL_REPORT_ACTIONABLE_DATA_TO_STORE,
  SET_FINAL_REPORT_CLINICAL_DATA_TO_STORE,
  SET_SELECTED_ACTIONABLE_ALTERATION_ID,
  SET_FINAL_REPORT_NAVIGATION_VALUE,
  SET_CURRENT_ACTIONABLE_ALTERATION_TAB,
  SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION_TO_STORE,
  SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION,
  SET_EXPANDED_TAB_TEXTAREA_CONTENT_SAVED,
  SET_IS_SELECT_VARIANTS_FOR_ACTIONABLE_ALTERATIONS,
  SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION,
  SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_SAVED,
  SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_TO_STORE,
  SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL,
  SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL_TO_STORE,
  HANDLE_FINAL_REPORT_SELECTED_VARIANTS_IDS_FOR_ACTIONABLE_ALTERATIONS,
  HANDLE_FINAL_REPORT_SELECT_ALL_VARIANTS_FOR_ACTIONABLE_ALTERATIONS,
};
