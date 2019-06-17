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

export const handleVariantClass = data => {
  return {
    type: actionsTypes.HANDLE_VARIANT_CLASS,
    payload: data
  };
};

export const updateSearch = data => {
  return {
    type: actionsTypes.UPDATE_SEARCH,
    payload: data
  };
};

export const updateActivityLog = data => {

  console.log("-data: ", data)

  return{
    type: actionsTypes.UPDATE_ACTIVITY_LOG,
    payload: data
  }
}