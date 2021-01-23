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
      { itemName: "halal", id: "1" },
      { itemName: "Vegetarian", id: "2" },
      { itemName: "Drinks", id: "3" },
    ],
    EachRestaurant: [
      { itemName: "Info", id: "1" },
      { itemName: "Noodle", id: "2" },
      { itemName: "Drinks", id: "3" },
      { itemName: "Snacks", id: "4" },
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
