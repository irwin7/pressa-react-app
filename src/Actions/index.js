export const InitialRequest = (data) => {
  return {
    type: "DATA_LOAD",
    data,
  };
};

export const ChangeCategory = (category) => {
  return {
    type: "CATEGORY_CHANGE",
    category,
  };
};

export const StatusChange = (status) => {
  return {
    type: "STATUS_CHANGE",
    status,
  };
};

export const SpikerChange = (spiker) => {
  return {
    type: "SPIKER_CHANGE",
    spiker,
  };
};
