import axios from "axios";
import {
  CHANGE_PAGE,
  ERROR_OFF,
  ERROR_ON,
  LOADER_OFF,
  LOADER_ON,
  LOAD_PHOTO_LIST,
  RESET_PAGE,
} from "./types";

const API_KEY = "rrX4OhnV0ZM0HXepM-WPOptexo4d9TEMi1TjRv_R4k0";

// Fetch Posts
export function postsLoad(page) {
  return async (dispatch) => {
    dispatch(cancelError());
    try {
      dispatch(loadingStart());
      const response = await axios.get(
        `https://api.unsplash.com/photos/?page=${
          page || 1
        }&client_id=${API_KEY}`
      );
      dispatch({
        type: LOAD_PHOTO_LIST,
        data: response.data,
      });
      dispatch(loadingEnd());
    } catch (error) {
      console.log(error);
      dispatch(setError());
    }
  };
}

// Page Reload
export function resetPage() {
  return {
    type: RESET_PAGE,
  };
}

// True => Next | False => Prev
export function changePage(next) {
  return {
    type: CHANGE_PAGE,
    data: next,
  };
}

// Start Loader
export function loadingStart() {
  return {
    type: LOADER_ON,
  };
}

// End Loader
export function loadingEnd() {
  return {
    type: LOADER_OFF,
  };
}

// Set Error
export function setError() {
  return {
    type: ERROR_ON,
  };
}

// Del Error
export function cancelError() {
  return {
    type: ERROR_OFF,
  };
}
