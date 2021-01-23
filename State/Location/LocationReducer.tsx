import { SEARCH_LOCATION, SELECT_TAB, RESET, READY } from "../../types";

export default (state: any, action: any) => {
  switch (action.type) {
    case SEARCH_LOCATION:
      return {
        ...state,
        SelectedLocation: action.payload,
        loading: false,
      };
    case RESET:
      return {
        ...state,
        SelectedLocation: "",
        Tab: "",
      };
    case SELECT_TAB:
      return {
        ...state,
        Tab: action.payload,
        loading: false,
      };
    case READY:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
