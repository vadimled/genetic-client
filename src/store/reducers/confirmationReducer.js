import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  isOnConfirmation: false,
  uncheckConfirmationData: null,
  data: []
};

const generateAdditionalConfirmationData = () => ({
  keyId: Math.random(),
  primer: "",
  fragmentSize: "",
  notes: ""
});

const confirmationReducer = createReducer(initialState, {
  [actionsTypes.HANDLE_ON_CONFIRMATION]: (state, { payload }) => {
    return {
      ...state,
      isOnConfirmation: payload
    };
  },

  [actionsTypes.HANDLE_UNCHECK_CONFIRMATION_DATA]: (state, { payload }) => {
    return {
      ...state,
      uncheckConfirmationData: payload
    };
  },

  [actionsTypes.SET_CONFIRMATION_DATA]: (state, { payload }) => {
    let preparedData = [];
    if (payload) {
      preparedData = payload.map(row => {
        if (!row.additionConfirmationData || !row.additionConfirmationData.length) {
          // initialize required filling out data
          row.additionConfirmationData = [generateAdditionalConfirmationData()];
        }
        return row;
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
        row.additionConfirmationData[index].primer = value;
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
        row.additionConfirmationData[index].fragmentSize = value;
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


