import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { FINAL_REPORT_NAVIGATION_VALUES } from "Utils/constants";

const initialSelectedActionableAlterationState = {
  selectedActionableAlterationId: null,
  currentActionableAlterationTab: "1",
};

const initSelectedVariantsForActionableAlterationsState = {
  selectedVariantsIdsForActionableAlterations: [],
  isSelectVariantsForActionableAlterations: false,
};

const initialSelectedUncertainClinicalSignificance = {
  selectedUncertainClinicalSignificanceId: null,
  currentUncertainClinicalSignificanceTab: "1",
};

const initSelectedVariantsForUncertainClinicalSignificanceState = {
  selectedVariantsIdsForUncertainClinicalSignificance: [],
  isSelectVariantsForUncertainClinicalSignificance: false,
};

const initialState = {
  dnaVariants: null,
  // cnvVariants: [],
  actionableAlterations: [],
  uncertainClinicalSignificance: [],
  mutation_type: null,
  finalReportNavigationValue: FINAL_REPORT_NAVIGATION_VALUES.actionableAlterations,
  ...initSelectedVariantsForActionableAlterationsState,
  ...initialSelectedActionableAlterationState,
  ...initSelectedVariantsForUncertainClinicalSignificanceState
};

const finalReportReducer = createReducer(initialState, {
  // [actionsTypes.FETCH_TABLE_DATA_SUCCESS]: (state, { payload }) => {
  //   return {
  //     ...state,
  //     serverData: payload
  //   };
  // },

  [actionsTypes.SET_FINAL_REPORT_DNA_VARIANTS_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      dnaVariants: payload
    };
  },

  [actionsTypes.DELETE_ACTIONABLE_ALTERATION_FROM_STORE]: (state, { payload }) => {
    const newActionableAlterations = state.actionableAlterations.filter(
      obj => obj?.id !== payload
    );
    return {
      ...state,
      actionableAlterations: newActionableAlterations,
      ...initSelectedVariantsForActionableAlterationsState,
      ...initialSelectedActionableAlterationState,
    };
  },

  [actionsTypes.HANDLE_FINAL_REPORT_SELECTED_VARIANTS_IDS_FOR_ACTIONABLE_ALTERATIONS]: (state, { payload }) => {
    const { item } = payload;

    let selectedVariantsIdsForActionableAlterations = state?.selectedVariantsIdsForActionableAlterations;

    const selectedVariantIndex = selectedVariantsIdsForActionableAlterations.indexOf(item.id);
    if (selectedVariantIndex === -1) {
      selectedVariantsIdsForActionableAlterations.push(item.id);
    }
    else {
      selectedVariantsIdsForActionableAlterations.splice(selectedVariantIndex, 1);
    }

    return {
      ...state,
      selectedVariantsIdsForActionableAlterations: [...selectedVariantsIdsForActionableAlterations]
    };
  },

  [actionsTypes.HANDLE_FINAL_REPORT_SELECT_ALL_VARIANTS_FOR_ACTIONABLE_ALTERATIONS]: (state, { payload }) => {
    const dnaVariants = state?.dnaVariants;
    let selectedVariantsIdsForActionableAlterationsSet = new Set();

    if (!payload) {
      for (let key in dnaVariants) {
        if (dnaVariants.hasOwnProperty(key)) {
          let item = dnaVariants[key];

          selectedVariantsIdsForActionableAlterationsSet.add(item.id);
        }
      }
    }
    else {
      selectedVariantsIdsForActionableAlterationsSet = new Set();
    }

    return {
      ...state,
      selectedVariantsIdsForActionableAlterations: [...selectedVariantsIdsForActionableAlterationsSet]
    };
  },

  [actionsTypes.SET_ACTIONABLE_ALTERATIONS]: (state, { payload }) => {
    return {
      ...state,
      actionableAlterations: payload,
      selectedVariantsIdsForActionableAlterations: []
    };
  },

  [actionsTypes.SET_FINAL_REPORT_NAVIGATION_VALUE]: (state, { payload }) => {
    return {
      ...state,
      finalReportNavigationValue: payload
    };
  },

  [actionsTypes.SET_SELECTED_ACTIONABLE_ALTERATION_ID]: (state, { payload }) => {
    return {
      ...state,
      selectedActionableAlterationId: payload,
      selectVariants: true
    };
  },

  [actionsTypes.SET_CURRENT_ACTIONABLE_ALTERATION_TAB]: (state, { payload }) => {
    return {
      ...state,
      currentActionableAlterationTab: payload.toString() || "1"
    };
  },

  // [actionsTypes.SET_EXPANDED_TAB_TEXTAREA_CONTENT_SAVED]: (state, { payload }) => {
  //   const selectedActionableAlteration =
  //     state.actionableAlterations
  //       .find(obj => obj.id === state.selectedActionableAlterationId);

  //   const cloneExpandedInterpretation =  {...selectedActionableAlteration.expanded_interpretation};

  //   switch (payload) {
  //     case ACTIONABLE_ALTERATIONS_EXPANDED_INTERPRETATION_TEXTAREA_NAME.geneDescription:
  //       cloneExpandedInterpretation.actionableAlterationGeneDescriptionSaved = true;
  //       break;
  //     case ACTIONABLE_ALTERATIONS_EXPANDED_INTERPRETATION_TEXTAREA_NAME.variantDescription:
  //       cloneExpandedInterpretation.actionableAlterationVariantDescriptionSaved = true;
  //       break;
  //   }

  //   const newActionableVariant = Object.assign( {},
  //     selectedActionableAlteration,
  //     {expanded_interpretation:cloneExpandedInterpretation} );

  //   const ind = state.actionableAlterations
  //     .findIndex(obj => obj.id === state.selectedActionableAlterationId);

  //   state.actionableAlterations[ind] = newActionableVariant;
  //   let newActionableAlterations ={ actionableAlterations: [...state.actionableAlterations] };

  //   return {
  //     ...state,
  //     ...newActionableAlterations
  //   };
  // },

  [actionsTypes.SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION_TO_STORE]: (state, { payload }) => {
    const { field, value } = payload;
    const selectedActionableAlteration =
      state.actionableAlterations
        .find(obj => obj.id === state.selectedActionableAlterationId);

    const expandedInterpretation = { ...selectedActionableAlteration.expanded_interpretation };

    expandedInterpretation[field] = value;
    expandedInterpretation.actionableAlterationVariantDescriptionSaved = false;


    const newActionableVariant = Object.assign({},
      selectedActionableAlteration,
      { expanded_interpretation: expandedInterpretation }
    );

    const ind = state.actionableAlterations
      .findIndex(obj => obj.id === state.selectedActionableAlterationId);

    state.actionableAlterations[ind] = newActionableVariant;

    return {
      ...state,
      actionableAlterations: [...state.actionableAlterations]
    };
  },

  [actionsTypes.SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_TO_STORE]: (state, { payload }) => {
    const { actionablealterationDrugId, value } = payload;
    const selectedActionableAlteration = state.actionableAlterations
      .find(obj => obj.id === state.selectedActionableAlterationId);

    let clonedDrugs = selectedActionableAlteration.drugs
      .map(drug => {
        if (drug.id === actionablealterationDrugId){
          drug.description = value;
          // drug.source_description_saved = false;
        }
        return drug;
      });

    const newActionableAlteration = Object.assign({},
      selectedActionableAlteration,
      { drugs: clonedDrugs }
    );

    const ind = state.actionableAlterations
      .findIndex(obj => obj.id === state.selectedActionableAlterationId);

    state.actionableAlterations[ind] = newActionableAlteration;

    return {
      ...state,
      actionableAlterations: [...state.actionableAlterations]
    };
  },

  [actionsTypes.SET_ACTIONABLE_ALTERATION_CLINICAL_TRIAL_TO_STORE]: (state, { payload }) => {
    const { actionablealterationClinicalTrialId, value } = payload;
    const selectedActionableAlteration = state.actionableAlterations
      .find(obj => obj.id === state.selectedActionableAlterationId);

    let newClinicalTrials = selectedActionableAlteration.clinical_trials
      .map(item => {
        if (item.id === actionablealterationClinicalTrialId){
          item.description = value;
          // item.source_description_saved = false;
        }
        return item;
      });

    const newActionableAlteration = Object.assign({},
      selectedActionableAlteration,
      { clinical_trials: newClinicalTrials }
    );

    const ind = state.actionableAlterations
      .findIndex(obj => obj.id === state.selectedActionableAlterationId);

    state.actionableAlterations[ind] = newActionableAlteration;

    return {
      ...state,
      actionableAlterations: [...state.actionableAlterations]
    };
  },

  // [actionsTypes.SET_ACTIONABLE_ALTERATION_DRUGS_DESCRIPTION_SAVED]: (state, { payload }) => {
  //   const selectedActionableAlteration =
  //     state.actionableAlterations
  //       .find(obj => obj.id === state.selectedActionableAlterationId);

  //   let cloneTherapies = [...selectedActionableAlteration.therapies]
  //     .map(therapy => {
  //       if(therapy.id === payload){
  //         therapy.source_description_saved = true;
  //       }
  //       return therapy;
  //     });

  //   const newActionableVariant = Object.assign( {},
  //     selectedActionableAlteration,
  //     {therapies:cloneTherapies} );

  //   const ind = state.actionableAlterations
  //     .findIndex(obj => obj.id === state.selectedActionableAlterationId);

  //   state.actionableAlterations[ind] = newActionableVariant;
  //   let newActionableAlterations ={ actionableAlterations: [...state.actionableAlterations] };

  //   return {
  //     ...state,
  //     ...newActionableAlterations
  //   };
  // },

  [actionsTypes.SET_IS_SELECT_VARIANTS_FOR_ACTIONABLE_ALTERATIONS]: state => {
    return {
      ...state,
      ...initSelectedVariantsForActionableAlterationsState,
      ...initialSelectedActionableAlterationState,
      isSelectVariantsForActionableAlterations: !state.isSelectVariantsForActionableAlterations,
    };
  },

  [actionsTypes.SET_FINAL_REPORT_UNCERTAIN_CLINICAL_SIGNIFICANCE_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      uncertainClinicalSignificance: payload,
      selectedVariantsIdsForUncertainClinicalSignificance: [],
    };
  },

  [actionsTypes.SET_IS_SELECT_VARIANTS_FOR_UNCERTAIN_CLINICAL_SIGNIFICANCE]: state => {
    return {
      ...state,
      ...initialSelectedUncertainClinicalSignificance,
      ...initSelectedVariantsForUncertainClinicalSignificanceState,
      isSelectVariantsForUncertainClinicalSignificance: !state.isSelectVariantsForUncertainClinicalSignificance,
    };
  },

  [actionsTypes.HANDLE_FINAL_REPORT_SELECTED_VARIANTS_IDS_FOR_UNCERTAIN_CLINICAL_SIGNIFICANCE]: (state, { payload }) => {
    const { item } = payload;

    let selectedVariantsIdsForUncertainClinicalSignificance = state?.selectedVariantsIdsForUncertainClinicalSignificance;

    const selectedVariantIndex = selectedVariantsIdsForUncertainClinicalSignificance.indexOf(item.id);
    if (selectedVariantIndex === -1) {
      selectedVariantsIdsForUncertainClinicalSignificance.push(item.id);
    }
    else {
      selectedVariantsIdsForUncertainClinicalSignificance.splice(selectedVariantIndex, 1);
    }

    return {
      ...state,
      selectedVariantsIdsForUncertainClinicalSignificance: [...selectedVariantsIdsForUncertainClinicalSignificance]
    };
  },

  [actionsTypes.HANDLE_FINAL_REPORT_SELECT_ALL_VARIANTS_FOR_UNCERTAIN_CLINICAL_SIGNIFICANCE]: (state, { payload }) => {
    const dnaVariants = state?.dnaVariants;
    let selectedVariantsIdsForUncertainClinicalSIgnificanceSet = new Set();

    if (!payload) {
      for (let key in dnaVariants) {
        if (dnaVariants.hasOwnProperty(key)) {
          let item = dnaVariants[key];

          selectedVariantsIdsForUncertainClinicalSIgnificanceSet.add(item.id);
        }
      }
    }
    else {
      selectedVariantsIdsForUncertainClinicalSIgnificanceSet = new Set();
    }

    return {
      ...state,
      selectedVariantsIdsForUncertainClinicalSignificance: [...selectedVariantsIdsForUncertainClinicalSIgnificanceSet]
    };
  },

  [actionsTypes.DELETE_UNCERTAIN_CLINICAL_SIGNIFICANCE_FROM_STORE]: (state, { payload }) => {
    const newUncertainClinicalSignificance = state.uncertainClinicalSignificance.filter(
      obj => obj?.id !== payload
    );
    return {
      ...state,
      uncertainClinicalSignificance: newUncertainClinicalSignificance,
      ...initialSelectedUncertainClinicalSignificance,
      ...initSelectedVariantsForUncertainClinicalSignificanceState,
    };
  },

});

export default finalReportReducer;
