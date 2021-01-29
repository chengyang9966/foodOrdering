import React, { useReducer } from "react";
import RestaurantContext from "./RestaurantContext";
import RestaurantReducer from "./RestaurantReducer";

const RestaurantState = (props: any) => {
  const initialState = {
    EachRestaurant: [
      {
        storeId: "1",
        storeName: "The Hilton",
        Contact: {
          Tel: "012-6963982",
          FullName: "Cheng Yang",
          Address: {
            address1: "27,Jalan Jernai 9",
            address2: "Medan Idaman",
            state: "Willayah Persekutuan",
            county: "Kuala Lumpur",
            postcode: 531000,
            country: "Malaysia",
          },
        },
        TypesOfFood: [
          {
            itemName: "Noodles",
            id: "123323",
            item: [
              {
                id: "00001",
                Name: "Ban Mian",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00002",
                Name: "Ban Mian (M)",
                Price: 10,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00003",
                Name: "Char Kuey Teow",
                Price: 5.5,
                Quantity: 50,
                Allergy: "Prawn",
              },
              {
                id: "00004",
                Name: "Ban Mian",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00004",
                Name: "Ban Mian",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00004",
                Name: "Ban Mian",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
            ],
          },
        ],
      },
      {
        storeId: "2",
        storeName: "asxas",
        Contact: {
          Tel: "012-6963982",
          FullName: "Cheng Yang",
          Address: {
            address1: "27,Jalan Jernai 9",
            address2: "Medan Idaman",
            state: "Willayah Persekutuan",
            county: "Kuala Lumpur",
            postcode: 531000,
            country: "Malaysia",
          },
        },
        TypesOfFood: [
          {
            itemName: "Noodles",
            id: "123323",
            item: [
              {
                id: "00001",
                itemName: "Ban Mian",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00002",
                itemName: "Ban Mian (M)",
                Price: 10,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00003",
                itemName: "Char Kuey Teow",
                Price: 5.5,
                Quantity: 50,
                Allergy: "Prawn",
              },
              {
                id: "00004",
                Name: "Ban Mian",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
            ],
          },
        ],
      },
    ],
  };
  const [state, dispatch] = useReducer(RestaurantReducer, initialState);
  return (
    <RestaurantContext.Provider
      value={{
        EachRestaurant: state.EachRestaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantState;
