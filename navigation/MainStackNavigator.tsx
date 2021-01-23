import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerList } from "../types";
import HomePage from "../screens/HomePage/HomePage";
import ItemListing from "../screens/Item Listing/ItemListing";
import EachItemInfo from "../screens/Item Listing/EachItemInfo";

const Stack = createStackNavigator();

const HomeStackNavigator = (props: any) => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen
        name="Home"
        component={HomePage}
        // options={({ navigation }) => ({
        //   title: "Nak Order!",
        // })}
      /> */}
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Item" component={ItemListing} />
      <Stack.Screen name=":Name" component={EachItemInfo} />
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} /> */}
    </Stack.Navigator>
  );
};

// const AboutNavigation = () => {
//   return (
//     <Stack.Navigator initialRouteName="About">
//       <Stack.Screen name="About" component={About} />
//       <Stack.Screen name="Account" component={Account} />
//     </Stack.Navigator>
//   );
// };

export { HomeStackNavigator };
