import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  dataId: "k5wp5amernh84pvsygjji9ljz", // null,
  type: "somatic",
  valueSomatic: "unclassified",
  valueGermline: "unclassified"
};

const variantPageReducer = createReducer(initialState, {
  [actionsTypes.SET_GENE]: (state, { payload }) => {
    return {
      ...state,
      dataId: payload
    };
  },

  [actionsTypes.SET_VARIANT_CLASSIFICATION]: (state, { payload }) => {
    const { value, name } = payload;
    return {
      ...state,
      valueSomatic: name === "somatic" ? value : state.valueSomatic,
      valueGermline: name === "germline" ? value : state.valueGermline
    };
  },

  [actionsTypes.SET_VARIANT_ZYGOSITY_TYPE]: (state, { payload }) => {
    return {
      ...state,
      type: payload
    };
  }
});

export default variantPageReducer;
