import { SELECETED_ITEM, SELECT_TAB, READY } from "../../types";

export default (state: any, action: any) => {
  switch (action.type) {
    case SELECETED_ITEM:
      return {
        ...state,
        SelectedItem: action.payload,
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
