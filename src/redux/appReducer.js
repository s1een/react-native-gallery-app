import {
  CHANGE_PAGE,
  ERROR_OFF,
  ERROR_ON,
  LOADER_OFF,
  LOADER_ON,
  LOAD_PHOTO_LIST,
  RESET_PAGE,
} from "./types";

const initialState = {
  photo: [],
  loading: false,
  error: false,
  page: 1,
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTO_LIST:
      const newPosts = action.data.map((el, index) => {
        return {
          id: el.id,
          url: el.urls.small,
          name: el.description,
          user: el.user.username,
          date: el.created_at,
        };
      });
      return {
        ...state,
        photo: newPosts,
      };
    case LOADER_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      };
    case ERROR_ON:
      return {
        ...state,
        error: true,
      };
    case ERROR_OFF:
      return {
        ...state,
        error: false,
      };
    case CHANGE_PAGE:
      let newPage = action.data ? state.page + 1 : state.page - 1;
      if (newPage <= 0) {
        newPage = state.page;
      }
      return {
        ...state,
        page: newPage,
      };
    case RESET_PAGE:
      return {
        ...state,
        page: 1,
      };
    default:
      return state;
  }
};
