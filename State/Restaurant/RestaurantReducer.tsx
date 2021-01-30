import { SELECETED_ITEM, SELECT_TAB } from "../../types";

interface eachItem {
  storeId: any;
  storeName: string;
  key: any;
  Contact: {
    Tel: string;
    FullName: string;
    Address: {
      address1: string;
      address2: string;
      state: string;
      county: string;
      postcode: number;
      country: string;
    };
  };
  TypesOfFood: Array<smallItem>;
  // Snacks: any;
  // Drinks: any;
}

interface smallItem {
  itemName: string;
  id: string;
  item: Array<item>;
}
interface item {
  id: string;
  itemName: string;
  Description: string;
  Price: number;
  Quantity: number;
  Allergy: string;
}

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

    default:
      return state;
  }
};
