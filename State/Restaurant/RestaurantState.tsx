import React, { useReducer } from "react";
import RestaurantContext from "./RestaurantContext";
import RestaurantReducer from "./RestaurantReducer";
import { SELECETED_ITEM, SELECT_TAB, READY } from "../../types";
const RestaurantState = (props: any) => {
  const initialState = {
    EachRestaurant: [
      {
        storeId: "1",
        storeName: "The Hilton",
        Delivery: 5,
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
                Description: "This is the description",
              },
              {
                id: "00002",
                itemName: "Ban Mian (M)",
                Price: 10,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
              {
                id: "00003",
                itemName: "Char Kuey Teow",
                Price: 5.5,
                Quantity: 50,
                Allergy: "Prawn",
                Description: "This is the description",
              },
              {
                id: "00004",
                itemName: "Ban Mian",
                Price: 5,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
              {
                id: "00005",
                itemName: "Ban Mian",
                Price: 5,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
              {
                id: "00006",
                itemName: "Char Key Tew",
                Price: 25,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
            ],
          },
          {
            itemName: "Drinks",
            id: "321213",
            item: [
              {
                id: "0001",
                itemName: "Coke",
                Price: 5,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
              {
                id: "0002",
                itemName: "Sprite",
                Price: 10,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
              {
                id: "0003",
                itemName: "Pepsi",
                Price: 5.5,
                Quantity: 50,
                Allergy: "Prawn",
                Description: "This is the description",
              },
              {
                id: "0004",
                itemName: "100 plus",
                Price: 5,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
              {
                id: "0005",
                itemName: "KiKappo",
                Price: 5,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
              {
                id: "0006",
                itemName: "A&W",
                Price: 5,
                Quantity: 50,
                Allergy: "",
                Description: "This is the description",
              },
            ],
          },
        ],
      },
      {
        storeId: "2",
        storeName: "asxas",
        Delivery: 5,
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
                Description: "This is the description",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00002",
                itemName: "Ban Mian (M)",
                Description: "This is the description",
                Price: 10,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00003",
                itemName: "Char Kuey Teow",
                Description: "This is the description",
                Price: 5.5,
                Quantity: 50,
                Allergy: "Prawn",
              },
              {
                id: "00004",
                itemName: "Ban Mian",
                Description: "This is the description",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
            ],
          },
          {
            itemName: "Drinks",
            id: "32123",
            item: [
              {
                id: "00001",
                itemName: "Ban Mian",
                Description: "This is the description",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00002",
                itemName: "Ban Mian (M)",
                Description: "This is the description",
                Price: 10,
                Quantity: 50,
                Allergy: "",
              },
              {
                id: "00003",
                itemName: "Char Kuey Teow",
                Description: "This is the description",
                Price: 5.5,
                Quantity: 50,
                Allergy: "Prawn",
              },
              {
                id: "00004",
                itemName: "Ban Mian",
                Description: "This is the description",
                Price: 5,
                Quantity: 50,
                Allergy: "",
              },
            ],
          },
        ],
      },
    ],
    loading: true,
    SelectedItem: "",
    Tab: "",
  };
  const [state, dispatch] = useReducer(RestaurantReducer, initialState);

  const FilterItem = (props: string) => {
    dispatch({
      type: SELECT_TAB,
      payload: props,
    });
  };

  const SelectItem = (StoreId: string, FoodId: string) => {
    var SelectedItem = null;
    //     initialState.EachRestaurant.map(k=>{
    //      if( k.storeId===StoreId){
    //        k.TypesOfFood?.map(w=>{
    //          w.id===
    //        })
    //      }
    //     })

    // dispatch({
    //   type:SELECETED_ITEM,
    //   action:
    // })
  };
  const Ready = () => {
    dispatch({
      type: READY,
    });
  };

  return (
    <RestaurantContext.Provider
      value={{
        Tab: state.Tab,
        loading: state.loading,
        SelectedItem: state.SelectedItem,
        EachRestaurant: state.EachRestaurant,
        SelectItem,
        FilterItem,
        Ready,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantState;
