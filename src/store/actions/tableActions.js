import actionsTypes from "../actionsTypes";


export const setNotes = data => {
  return {
    type: actionsTypes.SET_NOTES,
    payload: data
  };
};

export const onSelectRowKey = data => {
  return {
    type: actionsTypes.SELECT_ROW_KEY,
    payload: data
  };
};

export const handleZygosity = data => {
  return {
    type: actionsTypes.HANDLE_ZYGOSITY,
    payload: data
  };
};

