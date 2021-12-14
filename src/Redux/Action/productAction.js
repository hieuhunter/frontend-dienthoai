import {
    CTPRODUCT_FAILED,
    CTPRODUCT_REQUESTED,
    CTPRODUCT_SUCCEED,
    PRODUCT_FAILED,
    PRODUCT_REQUESTED,
    PRODUCT_SUCCEED,
    SLPRODUCT_FAILED,
    SLPRODUCT_REQUESTED,
    SLPRODUCT_SUCCEED,
  } from "../Constants/constant";
  
  export const product_RequestedAction = () => ({
    type: PRODUCT_REQUESTED,
  });
  export const product_SucceedAction = (san_pham) => ({
    type: PRODUCT_SUCCEED,
    payload: {
      san_pham: san_pham,
    },
  });
  export const product_FailedAction = (errors) => ({
    type: PRODUCT_FAILED,
    payload: {
      errors: errors,
    },
  });
  // chi tiet san pham
  export const ctproduct_RequestedAction = (id) => ({
    type: CTPRODUCT_REQUESTED,
    payload: {
      id: id,
    },
  });
  export const ctproduct_SucceedAction = (san_pham) => ({
    type: CTPRODUCT_SUCCEED,
    payload: {
      san_pham: san_pham,
    },
  });
  export const ctproduct_FailedAction = (error) => ({
    type: CTPRODUCT_FAILED,
    payload: {
      error: error,
    },  
  });
  //carousel product
  export const slproduct_RequestedAction = () => ({
    type: SLPRODUCT_REQUESTED,
  });
  export const slproduct_SucceedAction = (san_pham) => ({
    type: SLPRODUCT_SUCCEED,
    payload: {
      san_pham: san_pham,
    },
  });
  export const slproduct_FailedAction = (errors) => ({
    type: SLPRODUCT_FAILED,
    payload: {
      errors: errors,
    },
  });
  