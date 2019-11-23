import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { NAV_STATUS, ACTIONABLE_ALTERATIONS_EXPANDED_INTERPRETATION_TEXTAREA_NAME } from "Utils/constants";

const initialState = {
  serverData: null,
  data: null,
  dna_variants: null,
  cna_variants: [],
  selectedVariants: [],
  actionableAlterations: [],
  clinicalVariants: [],
  mutation_type: null,
  navigationStatus: NAV_STATUS.alterations,
  selectedActionableAlterationId: null,
  currentActionableTab: "1",
  selectedVariantsIds: [],
  isSelectVariants: false,
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
      selectedVariantsIds: [] // ? зачем
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
    let selectedVariants = state?.selectedVariantsIds;

    newData[item.id].selected = value;

    selectedVariants.push(item.id);

    return {
      ...state,
      data: { ...newData },
      selectedVariantsIds: [...selectedVariants]
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
    // const actionableAlterations = payload.map(obj => {
    //   const cOb = state.actionableAlterations.find(currObj => currObj.id === obj.id);

    //   if (cOb?.expanded_interpretation){
    //     return { ...obj, expanded_interpretation: cOb.expanded_interpretation };
    //   }
    //   else{
    //     return obj;
    //   }
    // });

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

  [actionsTypes.SET_CURRENT_ACTIONABLE_TAB]: (state, { payload }) => {
    return {
      ...state,
      currentActionableTab: payload.toString() || "1"
    };
  },

  [actionsTypes.SET_EXPANDED_TAB_TEXTAREA_CONTENT_SAVED]: (state, { payload }) => {
    const selectedActionableAlteration =
      state.actionableAlterations
        .find(obj => obj.id === state.selectedActionableAlterationId);

    const cloneExpandedInterpretation =  {...selectedActionableAlteration.expanded_interpretation};

    switch (payload) {
      case ACTIONABLE_ALTERATIONS_EXPANDED_INTERPRETATION_TEXTAREA_NAME.geneDescription:
        cloneExpandedInterpretation.actionableAlterationGeneDescriptionSaved = true;
        break;
      case ACTIONABLE_ALTERATIONS_EXPANDED_INTERPRETATION_TEXTAREA_NAME.variantDescription:
        cloneExpandedInterpretation.actionableAlterationVariantDescriptionSaved = true;
        break;
    }

    const newActionableVariant = Object.assign( {},
      selectedActionableAlteration,
      {expanded_interpretation:cloneExpandedInterpretation} );

    const ind = state.actionableAlterations
      .findIndex(obj => obj.id === state.selectedActionableAlterationId);

    state.actionableAlterations[ind] = newActionableVariant;
    let newActionableAlterations ={ actionableAlterations: [...state.actionableAlterations] };

    return {
      ...state,
      ...newActionableAlterations
    };
  },

  [actionsTypes.SET_ACTIONABLE_ALTERATION_EXPANDED_INTERPRETATION_TO_STORE]: (state, { payload }) => {
    const { name, value } = payload;
    const selectedActionableAlteration =
      state.actionableAlterations
        .find(obj => obj.id === state.selectedActionableAlterationId);

    const expandedInterpretation = { ...selectedActionableAlteration.expanded_interpretation };

    expandedInterpretation[name] = value;
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
      isSelectVariants: !state.isSelectVariants,
      selectedActionableAlterationId: null
    };
  },

});

export default finalReportReducer;
