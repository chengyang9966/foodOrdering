import React, { useReducer } from "react";
import ScrollViewContext from "./ScrollViewContext";
import ScrollViewReducer from "./ScrollViewReducer";

export interface ScrollViewProps {
  Restaurant: Array<any>;
  EachRestaurant: Array<any>;
}

const ScrollView = (props: any) => {
  const initialState: ScrollViewProps = {
    Restaurant: [
      { itemName: "halal", id: "2111" },
      { itemName: "Vegetarian", id: "2112" },
      { itemName: "Drinks", id: "2113" },
    ],

    EachRestaurant: [
      { itemName: "Info", id: "3111" },
      { itemName: "Noodle", id: "3112" },
      { itemName: "Drinks", id: "3113" },
      { itemName: "Snacks", id: "3114" },
    ],
  };

  const [state, dispatch] = useReducer(ScrollViewReducer, initialState);

  return (
    <ScrollViewContext.Provider
      value={{
        Restaurant: state?.Restaurant,
        EachRestaurant: state?.EachRestaurant,
      }}
    >
      {props.children}
    </ScrollViewContext.Provider>
  );
};

export default ScrollView;
