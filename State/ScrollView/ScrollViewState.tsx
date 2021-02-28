import React, { useReducer } from "react";
import ScrollViewContext from "./ScrollViewContext";
import ScrollViewReducer from "./ScrollViewReducer";

export interface ScrollViewProps {
  Restaurant: Array<any>;
  EachRestaurant: Array<any>;
  CheckOut: Array<any>;
}

const ScrollView = (props: any) => {
  const initialState: ScrollViewProps = {
    Restaurant: [
      { itemName: "halal", id: "2111" },
      { itemName: "Vegetarian", id: "2112" },
      { itemName: "Drinks", id: "2113" },
      { itemName: "Spicy", id: "123132" },
      { itemName: "Drinks", id: "2113" },
    ],

    EachRestaurant: [
      { itemName: "Info", id: "3111" },
      { itemName: "Noodle", id: "3112" },
      { itemName: "Drinks", id: "3113" },
      { itemName: "Snacks", id: "3114" },
    ],
    CheckOut: [
      { itemName: "Pick Up", id: "4111" },
      { itemName: "Delivery", id: "4112" },
      { itemName: "Eat In", id: "4113" },
    ],
  };

  const [state, dispatch] = useReducer(ScrollViewReducer, initialState);

  return (
    <ScrollViewContext.Provider
      value={{
        Restaurant: state?.Restaurant,
        EachRestaurant: state?.EachRestaurant,
        CheckOut: state?.CheckOut,
      }}
    >
      {props.children}
    </ScrollViewContext.Provider>
  );
};

export default ScrollView;
