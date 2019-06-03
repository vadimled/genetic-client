import createReducer from './createReducer';
import actionsTypes from '../actionsTypes';

const initialState = {
  data: [
    { key: "1",
      gene: 'SDHA',
      chrPosition: 'Chr5 : 236628',
      transcript: 'NM_005591.3',
      exon: 7,
      alleleChange: 'C > T',
      coding: 'gCc/gTc',
      protein: 'A449V',
      vaf: 33,
      zygosity: "Hom",
      variantClass: "",
      coverage: 300,
      notes: "Test ID place Mutation data dropdown list"
    },
    {
      key: "2",
      gene: 'SDHA',
      chrPosition: 'Chr5 : 236628',
      transcript: 'NM_005591.3',
      exon: 7,
      alleleChange: 'C > T',
      coding: 'gCc/gTc',
      protein: 'A449V',
      vaf: 33,
      zygosity: "Hom",
      variantClass: "",
      coverage: 300,
    },
    {
      key: "3",
      gene: 'SDHA',
      chrPosition: 'Chr5 : 236628',
      transcript: 'NM_005591.3',
      exon: 7,
      alleleChange: 'C > T',
      coding: 'gCc/gTc',
      protein: 'A449V',
      vaf: 33,
      zygosity: "Hom",
      variantClass: "",
      coverage: 300,
    },
  ],
  selectedRowKeys: [],
};

const tableReducer = createReducer(initialState, {
  [actionsTypes.SELECT_ROW_KEY]: (state, {payload}) => {
    const selectedRowKeys = payload;

    return {
      ...state,
      selectedRowKeys
    };
  },
  
  [actionsTypes.SET_NOTES]: (state, {payload}) => {
    const {id, notes} = payload;

    const newObj = state.table?.data[id];
  
    if(newObj)  newObj.notes = notes;
  
    console.log(newObj);
    return {
      ...state,
  
    };
  },
});

export default tableReducer;
