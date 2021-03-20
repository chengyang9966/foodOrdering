import React, { useContext } from "react";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";

const Waze = (id: any) => {
  const restaurantContext = useContext(RestaurantContext);
  const { EachRestaurant } = restaurantContext;

  let Address: any;
  EachRestaurant.map((w) => {
    if (Number(w.storeId) === id) {
      Address = Object.values(w.Contact.Address);
    }
  });

  return {
    Address: Address.join("%20").replace(/[, ]+/g, "%20"),
  };
};

export default Waze;
