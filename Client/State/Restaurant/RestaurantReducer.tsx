import { SELECETED_ITEM, SELECT_TAB, READY, INCREASENUMBER } from "../../types";

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
    case INCREASENUMBER:
      let temp = state.EachRestaurant.find(
        (w: any) => Number(w.storeId) === action.payload
      );
      temp.RunningNumber += 1;
      return {
        ...state,
        EachRestaurant: [...state.EachRestaurant, temp],
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
