import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { TEXTS } from "Utils/constants";

const initialState = {
  actionSlideBarStatus: false, // false === closed
  currentEvidenceTab: "1",
  mode: null,
  id: null,
  evidenceTypeSelect: null,
  evidenceSourceInput: null,
  evidenceLevelSelect: null,
  evidenceDescriptionTextarea: null,
  evidenceReferenceInput: null,
  evidenceDrugNameInput: null,
  evidenceIndicationInput: null,
  evidenceTrialIdInput: null,
  evidenceIsPhenotypeAndIndicationMatchSelect: null,
  evidenceLocationSelect: null,
  evidencePhenotypeInput: null,
};

const evidenceConfigReducer = createReducer(initialState, {
  [actionsTypes.SET_ACTION_MODE]: (state, { payload }) => {
    let status = {};
    if (!payload.actionSlideBarStatus && payload.mode !== TEXTS.delete) {
      status = Object.assign(
        {},
        { actionSlideBarStatus: false },
        { id: null },
        { mode: null },
        { evidenceTypeSelect: null },
        { evidenceSourceInput: null },
        { evidenceLevelSelect: null },
        { evidenceDescriptionTextarea: null }
      );
    } else if (payload.data) {
      const { data, id, mode, actionSlideBarStatus } = payload;
      status = Object.assign(
        {},
        { actionSlideBarStatus, id, mode },
        { evidenceTypeSelect: data.category },
        { evidenceSourceInput: data.source },
        { evidenceLevelSelect: data.level },
        { evidenceDescriptionTextarea: data.description },
        { evidenceReferenceInput: data.reference || null },
        { evidenceDrugNameInput: data.drug_name || null },
        { evidenceIndicationInput: data.indication || null },
        { evidenceTrialIdInput: data.trial_id || null },
        { evidenceIsPhenotypeAndIndicationMatchSelect:
          // transform boolean values true or false into string 'true' or 'false'
          data.is_phenotype_and_indication_match !== undefined && data.is_phenotype_and_indication_match !== null
            ? data.is_phenotype_and_indication_match.toString()
            : null
        },
        { evidenceLocationSelect: data.location || null },
        { evidencePhenotypeInput: data.phenotype || null },
      );
    } else {
      status = Object.assign({}, payload);
    }
    return {
      ...state,
      ...status
    };
  },

  [actionsTypes.SET_EVIDENCE_ACTION_DATA]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },

  [actionsTypes.CLEAN_EVIDENCE_ACTION_DATA]: state => {
    return {
      ...initialState,
      currentEvidenceTab: state.currentEvidenceTab
    };
  },

  [actionsTypes.SET_CURRENT_EVIDENCE_TAB]: (state, { payload }) => {
    return {
      ...state,
      currentEvidenceTab: payload || "1"
    };
  }
});

export default evidenceConfigReducer;
