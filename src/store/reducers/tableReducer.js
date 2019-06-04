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
      zygosity: "somatic",
      variantClass: "",
      coverage: 300,
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
      zygosity: "homo",
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
      zygosity: "notReal",
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

  [actionsTypes.HANDLE_ZYGOSITY]: (state, {payload}) => {
    const {item, value} = payload;
    let data = JSON.parse(JSON.stringify(state.data));

    data = data.map((row) => {
      if (row.key !== item.key) return row;
      row.zygosity = value;
      return row;
    });

    return {
      ...state,
      data
    };
  },
});

export default tableReducer;
