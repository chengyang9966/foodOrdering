import React, { useReducer } from "react";
import { SEARCH_LOCATION, SELECT_TAB, RESET, READY } from "../../types";
import LocationReducer from "./LocationReducer";
import LocationContext from "./LocationContext";

const LocationStore = (props: any) => {
  const initialState = {
    SelectedLocation: "",
    loading: true,
    list: [
      {
        id: 1,
        storeName: "The Hilton",
        halal: false,
        Vegetarian: false,
        cuisine: "European",
        distant: 5,
        time: 12,
      },
      // {
      //   id: 2,
      //   storeName: "Ah Meng Store",
      //   halal: false,
      //   Vegetarian: true,
      //   cuisine: "Chinese",
      //   distant: 5,
      //   time: 12,
      // },
      // {
      //   id: 3,
      //   storeName: "Roddy Ricch",
      //   halal: true,
      //   Vegetarian: false,
      //   cuisine: "Malay",
      //   distant: 2,
      //   time: 10,
      //   Drinks: true,
      // },
      // {
      //   id: 4,
      //   storeName: "Dua Lipa",
      //   halal: false,
      //   cuisine: "European",
      //   distant: 1.2,
      //   time: 12,
      //   Drinks: true,
      // },
    ],
    Tab: "",
  };
  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const SearchLocation = (props: string) => {
    dispatch({
      type: SEARCH_LOCATION,
      payload: props,
    });
  };
  const SelectItem = (props: string) => {
    dispatch({
      type: SELECT_TAB,
      payload: props,
    });
  };
  const Reset = () => {
    dispatch({
      type: RESET,
    });
  };

  const Ready = () => {
    dispatch({
      type: READY,
    });
  };
  return (
    <LocationContext.Provider
      value={{
        SelectedLocation: state?.SelectedLocation,
        loading: state.loading,
        list: state.list,
        Tab: state.Tab,
        SearchLocation,
        SelectItem,
        Reset,
        Ready,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
export default LocationStore;
