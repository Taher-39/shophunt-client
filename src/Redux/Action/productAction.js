import axios from "axios";
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  PRODUCTS_DELETE_REQUEST,
  PRODUCTS_DELETE_SUCCESS,
  PRODUCTS_DELETE_FAIL,
  PRODUCTS_CREATE_REQUEST,
  PRODUCTS_CREATE_SUCCESS,
  PRODUCTS_CREATE_FAIL,
  PRODUCTS_UPDATE_FAIL,
  PRODUCTS_UPDATE_SUCCESS,
  PRODUCTS_UPDATE_REQUEST,
  PRODUCTS_REVIEW_CREATE_REQUEST,
  PRODUCTS_REVIEW_CREATE_SUCCESS,
  PRODUCTS_REVIEW_CREATE_FAIL,
  PRODUCTS_TOP_REQUEST,
  PRODUCTS_TOP_SUCCESS,
  PRODUCTS_TOP_FAIL,
} from "../Constant/ProductsConstants";

export const listProducts =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCTS_LIST_REQUEST });

      const { data } = await axios.get(
        `https://warm-coast-97287.herokuapp.com/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: PRODUCTS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const detailsProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://warm-coast-97287.herokuapp.com/api/products/${id}`
    );

    dispatch({
      type: PRODUCTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCTS_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(
      `https://warm-coast-97287.herokuapp.com/api/products/${id}`,
      config
    );

    dispatch({
      type: PRODUCTS_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCTS_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `https://warm-coast-97287.herokuapp.com/api/products`,
      {},
      config
    );

    dispatch({
      type: PRODUCTS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProductAction = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCTS_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `https://warm-coast-97287.herokuapp.com/api/products/${product._id}`,
      product,
      config
    );

    dispatch({
      type: PRODUCTS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProductReviewAction =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCTS_REVIEW_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(
        `https://warm-coast-97287.herokuapp.com/api/products/${productId}/reviews`,
        review,
        config
      );

      dispatch({
        type: PRODUCTS_REVIEW_CREATE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_REVIEW_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const topProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_TOP_REQUEST });

    const { data } = await axios.get(
      `https://warm-coast-97287.herokuapp.com/api/products/top`
    );

    dispatch({
      type: PRODUCTS_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
