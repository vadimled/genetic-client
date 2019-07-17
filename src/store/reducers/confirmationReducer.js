import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";
import { VALIDATION_FAILD_FIELDS } from "Utils/constants";

const initialState = {
  isOnConfirmation: false,
  data: []
};

const generateAdditionalConfirmationData = () => ({
  keyId: Math.random(),
  primer: "",
  fragmentSize: "",
  notes: "",
  validationFaildFields: []
});

const confirmationReducer = createReducer(initialState, {
  [actionsTypes.HANDLE_ON_CONFIRMATION]: (state, { payload }) => {
    return {
      ...state,
      isOnConfirmation: payload
    };
  },

  [actionsTypes.SET_CONFIRMATION_DATA]: (state, { payload }) => {
    let preparedData = [];
    if (payload) {
      preparedData = payload.map(row => {
        let newRow = {...row};
        if (!newRow.additionConfirmationData || !newRow.additionConfirmationData.length) {
          // initialize required filling out data
          newRow.additionConfirmationData = [generateAdditionalConfirmationData()];
        }
        return newRow;
      });
    }

    return {
      ...state,
      data: preparedData
    };
  },

  [actionsTypes.REMOVE_CONFIRMATION_ROW]: (state, { payload }) => {
    const filteredData = state.data.filter(row => row.id !== payload);

    return {
      ...state,
      data: filteredData
    };
  },

  [actionsTypes.HANDLE_CONFIRMATION_NOTES]: (state, { payload }) => {
    const { id, index, notes } = payload;
    const updatedData = state.data.map(row => {
      if (row.id === id) {
        row.additionConfirmationData[index].notes = notes;
      }
      return row;
    });

    return {
      ...state,
      data: updatedData
    };
  },

  [actionsTypes.HANDLE_CONFIRMATION_PRIMER]: (state, { payload }) => {
    const { id, index, value } = payload;
    const updatedData = state.data.map(row => {
      if (row.id === id) {
        let cRow = row.additionConfirmationData[index];
        cRow.primer = value;

        if (!cRow.primer || !/^[\d]*$/.test(cRow.primer)) {
          !cRow.validationFaildFields.includes(VALIDATION_FAILD_FIELDS.primer)
            && cRow.validationFaildFields.push(VALIDATION_FAILD_FIELDS.primer);
        }
        else {
          cRow.validationFaildFields = cRow.validationFaildFields
            .filter((key) => key !== VALIDATION_FAILD_FIELDS.primer);
        }
      }
      return row;
    });

    return {
      ...state,
      data: updatedData
    };
  },

  [actionsTypes.HANDLE_CONFIRMATION_FRAGMENT_SIZE]: (state, { payload }) => {
    const { id, index, value } = payload;
    const updatedData = state.data.map(row => {
      if (row.id === id) {
        let cRow = row.additionConfirmationData[index];
        cRow.fragmentSize = value;

        if (!cRow.fragmentSize || !/^[\d]*$/.test(cRow.fragmentSize)) {
          !cRow.validationFaildFields.includes(VALIDATION_FAILD_FIELDS.fragmentSize)
            && cRow.validationFaildFields.push(VALIDATION_FAILD_FIELDS.fragmentSize);
        }
        else {
          cRow.validationFaildFields = cRow.validationFaildFields
            .filter((key) => key !== VALIDATION_FAILD_FIELDS.fragmentSize);
        }
      }
      return row;
    });

    return {
      ...state,
      data: updatedData
    };
  },

  [actionsTypes.ADD_ADDITIONAL_CONFIRMATION_DATA]: (state, { payload }) => {
    const { id } = payload;
    const updatedData = state.data.map(row => {
      if (row.id === id) {
        row.additionConfirmationData.push(generateAdditionalConfirmationData());
      }
      return row;
    });

    return {
      ...state,
      data: updatedData
    };
  },

  [actionsTypes.REMOVE_ADDITIONAL_CONFIRMATION_DATA]: (state, { payload }) => {
    const { id, index } = payload;
    const updatedData = state.data.map(row => {
      if (row.id === id) {
        row.additionConfirmationData.splice(index, 1);
      }
      return row;
    });

    return {
      ...state,
      data: updatedData
    };
  },

});

export default confirmationReducer;


