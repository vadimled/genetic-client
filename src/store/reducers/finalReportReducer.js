import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { NAV_STATUS, TEXTAREA_NAME } from "Utils/constants";

const therapies = [
  {
    id: "source-description-textarea-0",
    drug_name: "Palbociclib (IBRANCE)",
    source_description:
      "Palbociclib is a CDK4/6 kinase inhibitor approved by the" +
      " FDA for the treatment of adult patients with hormone receptor (HR)-positive, " +
      "human epidermal growth factor receptor 2 (HER2)-negative advanced or metastatic " +
      "breast cancer in combination with:- an aromatase inhibitor as initial " +
      "endocrine-based therapy in postmenopausal women or in men; or- " +
      "Fulvestrant in patients with disease progression following endocrine therapy." +
      "Palbociclib is currently examined in a Phase I trial in combination with the " +
      "PI3K/mTOR Inhibitor Gedatolisib for Patients with advanced Squamous Cell Lung cancer (NCT03065062).",
    source_description_saved: false
  },
  {
    id: "source-description-textarea-1",
    drug_name: "Gedatolisib (PF-05212384)",
    source_description:
      "Gedatolisib is PI3K and mTOR kinase inhibitor " +
      "currently examined in multiple clinical trials for select solid " +
      "tumors including a phase I trial in combination with the CDK4/6 Inhibitor, " +
      "Palbociclib, for Patients with advanced Squamous Cell Lung cancer (NCT03065062). 3065062).",
    source_description_saved: false
  },
  {
    id: "source-description-textarea-2",
    drug_name: "MK-2206",
    source_description:
      "MK-2206 is a selective pan-AKT inhibitor currently examined " +
      "in multiple clinical trials for various solid tumors, including a phase " +
      "II trial for patientswith Advanced Non-Small Cell Lung Cancer (NCT01306045).",
    source_description_saved: false
  },
  {
    id: "source-description-textarea-3",
    drug_name: "Gedatolisib (PF-05212384)",
    source_description:
      "Gedatolisib is PI3K and mTOR kinase inhibitor " +
      "currently examined in multiple clinical trials for select solid " +
      "tumors including a phase I trial in combination with the CDK4/6 Inhibitor, " +
      "Palbociclib, for Patients with advanced Squamous Cell Lung cancer (NCT03065062). 3065062).",
    source_description_saved: false
  }
];

const initialState = {
  serverData: null,
  data: null,
  dna_variants: null,
  cna_variants: [],
  selectedVariants: [],
  actionableVariants: [],
  clinicalVariants: [],
  mutation_type: null,
  navigationStatus: NAV_STATUS.alterations,
  selectedUpperTableRowId: null,
  currentActionableTab: "1",
  selectedVariantsIds: [],
  selectVariants: true,
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

  [actionsTypes.REMOVE_ACTIONABLE_SELECTED_ROW_FROM_STORE]: (
    state,
    { payload }
  ) => {
    const newActionableVariants = state.actionableVariants.filter(
      obj => obj?.id !== payload?.id
    );
    return {
      ...state,
      actionableVariants: newActionableVariants,
      selectedVariantsIds: []
    };
  },

  [actionsTypes.REMOVE_CLINICAL_SELECTED_ROW_FROM_STORE]: (
    state,
    { payload }
  ) => {
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
      actionableVariants: payload
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

  [actionsTypes.SET_ACTIONABLE_DATA_TO_STORE]: (state, { payload }) => {
    const newVariants = payload.map(obj => {
      const cOb = state.actionableVariants.find( currObj => currObj.id === obj.id);
      if(cOb?.expanded_interpretation){
        return { ...obj, expanded_interpretation: cOb.expanded_interpretation };
      }
      else{
        return obj;
      }
    });
    // -- temp ---
    // TODO: therapies: [{evidence}] must be received from server
    newVariants.map(obj => obj.therapies = therapies);
    // -- temp ---
    return {
      ...state,
      actionableVariants: newVariants,
      selectedVariantsIds: []
    };
  },

  [actionsTypes.SET_NAVIGATION_STATUS]: (state, { payload }) => {
    return {
      ...state,
      navigationStatus: payload
    };
  },

  [actionsTypes.SET_SELECTED_UPPER_TABLE_ROW_ID]: (state, { payload }) => {
    return {
      ...state,
      selectedUpperTableRowId: payload,
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
    const getActionableVariant =
      state.actionableVariants
        .find(obj => obj.id === state.selectedUpperTableRowId);
  
    const cloneExpandedInterpretation =  {...getActionableVariant.expanded_interpretation};
  
    switch (payload) {
      case TEXTAREA_NAME.geneDescription:
        cloneExpandedInterpretation.geneDescriptionSaved = true;
        break;
      case TEXTAREA_NAME.variantDescription:
        cloneExpandedInterpretation.variantDescriptionSaved = true;
        break;
    }
  
    const newActionableVariant = Object.assign( {},
      getActionableVariant,
      {expanded_interpretation:cloneExpandedInterpretation} );
  
    const ind = state.actionableVariants
      .findIndex(obj => obj.id === state.selectedUpperTableRowId);
  
    state.actionableVariants[ind] = newActionableVariant;
    let newActionableVariants ={actionableVariants: [...state.actionableVariants]};
  
    return {
      ...state,
      ...newActionableVariants
    };
  },

  [actionsTypes.SET_EXPANDED_TAB_TEXTAREA]: (state, { payload }) => {
    const { name, value } = payload;
    const getActionableVariant =
      state.actionableVariants
        .find(obj => obj.id === state.selectedUpperTableRowId);

    const cloneExpandedInterpretation =  {...getActionableVariant.expanded_interpretation};
    
    switch (name) {
      case TEXTAREA_NAME.geneDescription:
        cloneExpandedInterpretation.geneDescription = value;
        cloneExpandedInterpretation.geneDescriptionSaved = false;
        break;
      case TEXTAREA_NAME.variantDescription:
        cloneExpandedInterpretation.variantDescription = value;
        cloneExpandedInterpretation.variantDescriptionSaved = false;
        break;
    }
  
    const newActionableVariant = Object.assign( {},
      getActionableVariant,
      {expanded_interpretation:cloneExpandedInterpretation} );
  
    const ind = state.actionableVariants
      .findIndex(obj => obj.id === state.selectedUpperTableRowId);
  
    state.actionableVariants[ind] = newActionableVariant;
    let newActionableVariants ={actionableVariants: [...state.actionableVariants]};
 
    return {
      ...state,
      ...newActionableVariants
    };
  },
 
  [actionsTypes.SET_THERAPIES_TAB_TEXTAREA_TO_STORE]: (state, { payload }) => {
    const { id, value } = payload;
    const getActionableVariant =
      state.actionableVariants
        .find(obj => obj.id === state.selectedUpperTableRowId);
  
    // -- temp ---
    // TODO: therapies: [{evidence}] must be received from server
    getActionableVariant.therapies = therapies;
    // -- temp ---
    
    let cloneTherapies = [...getActionableVariant.therapies]
      .map(therapy => {
        if(therapy.id === id){
          therapy.source_description = value;
          therapy.source_description_saved = false;
        }
        return therapy;
      });
  
  
    const newActionableVariant = Object.assign( {},
      getActionableVariant,
      {therapies:cloneTherapies} );
  
    const ind = state.actionableVariants
      .findIndex(obj => obj.id === state.selectedUpperTableRowId);
  
    state.actionableVariants[ind] = newActionableVariant;
    let newActionableVariants ={actionableVariants: [...state.actionableVariants]};
  
    return {
      ...state,
      ...newActionableVariants
    };
  },
  
  [actionsTypes.SET_THERAPIES_TAB_TEXTAREA_CONTENT_SAVED]: (state, { payload }) => {
    const getActionableVariant =
      state.actionableVariants
        .find(obj => obj.id === state.selectedUpperTableRowId);
    
    let cloneTherapies = [...getActionableVariant.therapies]
      .map(therapy => {
        if(therapy.id === payload){
          therapy.source_description_saved = true;
        }
        return therapy;
      });
  
    const newActionableVariant = Object.assign( {},
      getActionableVariant,
      {therapies:cloneTherapies} );
  
    const ind = state.actionableVariants
      .findIndex(obj => obj.id === state.selectedUpperTableRowId);
  
    state.actionableVariants[ind] = newActionableVariant;
    let newActionableVariants ={actionableVariants: [...state.actionableVariants]};
  
    return {
      ...state,
      ...newActionableVariants
    };
  },
  
  
  
  [actionsTypes.SET_SELECT_VARIANTS]: state => {
    return {
      ...state,
      selectVariants: !state.selectVariants,
      selectedUpperTableRowId: null
    };
  },
  
});

export default finalReportReducer;
