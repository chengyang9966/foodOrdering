import React, { createContext } from "react";

export interface RestaurantProps {
  EachRestaurant: Array<eachItem>;
}

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
  item: Array<any>;
}
const RestaurantContext = createContext({} as RestaurantProps);

export default RestaurantContext;
