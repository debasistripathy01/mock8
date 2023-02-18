import axios from "axios";
import * as Types from "./products.actionTypes";

export const getDogData = () => (dispatch) => {
  dispatch({ type: Types.GET_PRODUCTS_LOADING });
  axios
    .get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    .then((res) => dispatch({ type: Types.GET_PRODUCTS_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: Types.GET_PRODUCTS_ERROR }));
};

