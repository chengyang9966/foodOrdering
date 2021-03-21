import React, { createContext } from "react";

export interface RestaurantProps {
  EachRestaurant: Array<eachItem>;
  SelectedItem: any;
  SelectItem: (StoreId: string, FoodId: string) => void;
  FilterItem: (props: string) => void;
  IncreaseNumber: (props: string) => void;
  Ready: () => void;
  loading: string;
  Tab: string;
}

interface eachItem {
  storeId: any;
  storeName: string;
  RunningNumber: number;
  key: any;
  Delivery: number;
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
  item: Array<eachFood>;
}

interface eachFood {
  id: string;
  itemName: string;
  Description: string;
  Price: number;
  Quantity: number;
  Allergy: string;
}
const RestaurantContext = createContext({} as RestaurantProps);

export default RestaurantContext;
