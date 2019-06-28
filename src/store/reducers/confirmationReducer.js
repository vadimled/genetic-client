import createReducer from "./createReducer";
import actionsTypes from "../actionsTypes";

const initialState = {
  isOnConfirmation: false,
  uncheckConfirmationData: null,
  data: []
};

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
          // initialize required to fill out data
          row.additionConfirmationData = [
            {
              keyId: Math.random(),
              primer: "123",
              fragmentSize: "234",
              notes: "some note"
            },
            {
              keyId: Math.random(),
              primer: "123",
              fragmentSize: "234",
              notes: "some note"
            },
          ];
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
    const updatedData = state.data.map(row => {
      if (row.id !== payload.id) return row;
      row.confirmationNotes = payload.notes;
      return row;
    });

    return {
      ...state,
      data: updatedData
    };
  },

});

export default confirmationReducer;


