import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initData = {};
for (let id = 0; id <= 500; id++) {
  initData[id] = {
    id: id,
    key: id,
    gene: "SDHA",
    chrPosition: "Chr5 : 236628",
    transcript: "NM_005591.3",
    exon: 7,
    alleleChange: "C > T",
    coding: "gCc/gTc",
    protein: "A449V",
    vaf: 33,
    zygosity: "",
    variantClass: "",
    coverage: 300,
    notes: "Test ID place Mutation data dropdown list"
  };
}

const initialState = {
  data: initData,
  selectedRowKeys: []
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.SELECT_ROW_KEY]: (state, { payload }) => {
    const selectedRowKeys = payload;

    return {
      ...state,
      selectedRowKeys
    };
  },

  [actionsTypes.HANDLE_ZYGOSITY]: (state, { payload }) => {
    const {item, value} = payload;
    let data = state?.data;
    data[item.id].zygosity = value;

    return {
      ...state
    };
  },

  [actionsTypes.SET_NOTES]: (state, { payload }) => {
    const { id, notes } = payload;
    let data = state?.data;
    data[id].notes = notes;

    return {
      ...state
    };
  }
});

export default tableReducer;
