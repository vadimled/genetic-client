import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { generateDNAVariantTableMockData } from "Utils/mockdata-generator";
import { SOMATIC_CLASS, TAG_COLORS, VARIANT_CLASS, ZYGOSITY_OPTIONS } from "../../utils/constants";

const initialState = {
  data: generateDNAVariantTableMockData(200),
  selectedRowKeys: [],
  activityLog: {}
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

    // and always reset variantClass as a result of changing the zygosity
    // reset to
    if (
      value !== 'insignificant' &&
      value !== 'notReal' &&
      value !== 'unknown'
    ) {
      // unclassified is default for somatic & germline
      data[item.id].variantClass = 'unclassified';
    }
    else {
      data[item.id].variantClass = '';
    }

    return {
      ...state
    };
  },

  [actionsTypes.HANDLE_VARIANT_CLASS]: (state, { payload }) => {
    const {item, value} = payload;
    let data = state?.data;
    data[item.id].variantClass = value;

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
  },

  [actionsTypes.UPDATE_ACTIVITY_LOG]: (state, {payload}) => {

    console.log("--payload: ", payload);

    const {item, prevValue, changedField} = payload;


    let activityLog = state?.activityLog;


    // tags color setup
    let prevTagColor = "";

    let currTagColor = "";

    switch (prevValue) {
      case "unclassified":
        prevTagColor = TAG_COLORS.white;
        break;
      case "path":
      case "tier1":
        prevTagColor = TAG_COLORS.red;
        break;
      case "lpath":
      case "tier2":
        prevTagColor = TAG_COLORS.orange;
        break;
      case "vus":
      case "tier3":
        prevTagColor = TAG_COLORS.yellow;
        break;
      case "lben":
      case "tier4":
        prevTagColor = TAG_COLORS.blueLight;
        break;
      case "ben":
        prevTagColor = TAG_COLORS.blue;
        break;
    }

    switch (item[changedField]) {
      case "unclassified":
        currTagColor = TAG_COLORS.white;
        break;
      case "path":
      case "tier1":
        currTagColor = TAG_COLORS.red;
        break;
      case "lpath":
      case "tier2":
        currTagColor = TAG_COLORS.orange;
        break;
      case "vus":
      case "tier3":
        currTagColor = TAG_COLORS.yellow;
        break;
      case "lben":
      case "tier4":
        currTagColor = TAG_COLORS.blueLight;
        break;
      case "ben":
        currTagColor = TAG_COLORS.blue;
        break;
    }





    // titles setup
    let titleCurr = "";
    let titlePrev = "";

    if(changedField === "variantClass"){
      titleCurr = VARIANT_CLASS[item[changedField]]?.label || SOMATIC_CLASS[item[changedField]].label;
      console.log("--titleCurr: ", titleCurr);
    }
    else if(changedField === "zygosity"){
      titleCurr = ZYGOSITY_OPTIONS.find(option=> option.value === item[changedField]).label;
    }else if (changedField === "notes") {
      titleCurr = item[changedField];
    }





    if (changedField === "variantClass") {
      titlePrev =
        VARIANT_CLASS[prevValue]?.label ||
        SOMATIC_CLASS[prevValue].label;
      titleCurr =
        VARIANT_CLASS[item[changedField]]?.label ||
        SOMATIC_CLASS[item[changedField]].label;
    } else if (changedField === "zygosity") {
      if (prevValue) {
        titlePrev = ZYGOSITY_OPTIONS.find(
          option => option.value === prevValue
        ).label;
        titleCurr = ZYGOSITY_OPTIONS.find(
          option => option.value === item[changedField]
        ).label;
      } else {
        titleCurr = ZYGOSITY_OPTIONS.find(
          option => option.value === item[changedField]
        ).label;
      }
    } else if (changedField === "notes") {
      if (prevValue) {
        titlePrev = prevValue;
        titleCurr = item[changedField];
      } else {
        titleCurr = item[changedField];
      }
    }







    const changes = {
      titleCurr:  titleCurr,
      titlePrev: titlePrev,
      time: new Date(),
      type: changedField,
      prevTagColor: prevTagColor,
      currTagColor: currTagColor,
      status: item.status
    };

    let changesArr =  activityLog[item.id] && activityLog[item.id][changedField]
      ? activityLog[item.id][changedField] : [];
    console.log("--changesArr: ", changesArr);

    activityLog[item.id] = {
      ...activityLog[item.id],
      [changedField]: [...changesArr, changes]
    };

    return{
      ...state,
    };
  }
});

export default tableReducer;


