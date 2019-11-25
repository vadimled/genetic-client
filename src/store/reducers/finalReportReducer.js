import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { NAV_STATUS } from "Utils/constants";

const initialSelectedActionableAlterationState = {
  selectedActionableAlterationId: null,
  currentActionableAlterationTab: "1",
};

const initSelectedVariantsState = {
  selectedVariantsIds: [],
  isSelectVariants: false,
};

const initialState = {
  serverData: null,
  data: null,
  dna_variants: null,
  cna_variants: [],
  actionableAlterations: [],
  clinicalVariants: [],
  mutation_type: null,
  navigationStatus: NAV_STATUS.alterations,
  ...initSelectedVariantsState,
  ...initialSelectedActionableAlterationState,
};

const finalReportReducer = createReducer(initialState, {
  [actionsTypes.FETCH_TABLE_DATA_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      serverData: payload
    };
  },

  [actionsTypes.SET_PARSED_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      data: payload
    };
  },

  [actionsTypes.ADD_ROW]: (state, { payload }) => {
    return {
      ...state,
      selectedData: state.selectedData.push(payload)
    };
  },

  [actionsTypes.DELETE_ACTIONABLE_ALTERATION_FROM_STORE]: (state, { payload }) => {
    const newActionableAlterations = state.actionableAlterations.filter(
      obj => obj?.id !== payload
    );
    return {
      ...state,
      actionableAlterations: newActionableAlterations,
      ...initSelectedVariantsState,
      ...initialSelectedActionableAlterationState,
    };
  },

  [actionsTypes.REMOVE_CLINICAL_SELECTED_ROW_FROM_STORE]: (state, { payload }) => {
    const newClinicalVariants = state.clinicalVariants.filter(
      obj => obj?.id !== payload?.id
    );
    return {
      ...state,
      clinicalVariants: newClinicalVariants
    };
  },

  [actionsTypes.HANDLE_SELECTED_ROW]: (state, { payload }) => {
    const { item, value } = payload;

    let newData = state?.data;
    let selectedVariantsIds = state?.selectedVariantsIds;

    newData[item.id].selected = value;

    const selectedVariantIndex = selectedVariantsIds.indexOf(item.id);
    if (selectedVariantIndex === -1) {
      selectedVariantsIds.push(item.id);
    }
    else {
      selectedVariantsIds.splice(selectedVariantIndex, 1);
    }

    return {
      ...state,
      data: { ...newData },
      selectedVariantsIds: [...selectedVariantsIds]
    };
  },

  [actionsTypes.HANDLE_SELECT_ALL_ROWS]: (state, { payload }) => {
    let data = state?.data;

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];

        item.selected = !payload;
      }
    }

    return {
      ...state,
      dna_variants: { ...data }
    };
  },

  [actionsTypes.SET_VARIANTS_DATA_TO_STORE]: (state, { payload }) => {
    return {
      ...state,
      dna_variants: payload,
      actionableAlterations: payload
    };
  },

  [actionsTypes.SET_FINAL_REPORT_CLINICAL_DATA_TO_STORE]: (
    state,
    { payload }
  ) => {
    return {
      ...state,
      clinicalVariants: payload
    };
  },

  [actionsTypes.SET_ACTIONABLE_ALTERATIONS]: (state, { payload }) => {
    return {
      ...state,
      actionableAlterations: payload,
      selectedVariantsIds: []
    };
  },

  [actionsTypes.SET_NAVIGATION_STATUS]: (state, { payload }) => {
    return {
      ...state,
      navigationStatus: payload
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

  [actionsTypes.SET_IS_SELECT_VARIANTS]: state => {
    return {
      ...state,
      ...initSelectedVariantsState,
      ...initialSelectedActionableAlterationState,
      isSelectVariants: !state.isSelectVariants,
    };
  },

});

export default finalReportReducer;
