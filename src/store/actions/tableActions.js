import actionsTypes from "../actionsTypes";

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

