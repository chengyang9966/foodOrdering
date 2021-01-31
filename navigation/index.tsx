import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import {
  DefaultTheme as MainTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { RootStackParamList } from "../types";
import ItemListing from "../screens/Item Listing/ItemListing";
import LinkingConfiguration from "./LinkingConfiguration";
import { HomeStackNavigator } from "./MainStackNavigator";
import DrawerConfig from "./DrawerStackNavigation";
import LocationStore from "../State/Location/LocationState";
import ScrollView from "../State/ScrollView/ScrollViewState";
import RestaurantState from "../State/Restaurant/RestaurantState";
import AccountState from "../State/Account/AccountState";
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <ScrollView>
      <AccountState>
        <LocationStore>
          <RestaurantState>
            <NavigationContainer
              // linking={LinkingConfiguration}
              theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <PaperProvider theme={theme}>
                <HomeStackNavigator />
              </PaperProvider>
            </NavigationContainer>
          </RestaurantState>
        </LocationStore>
      </AccountState>
    </ScrollView>
  );
}

const theme = {
  ...MainTheme,
  roundness: 2,
  title: 25,
  fontFamily: "Roboto",
  bodyFont: 18,
  SmallFont: 15,
  colors: {
    ...MainTheme.colors,
    background: "#FFBBA6",
    primary: "#A11D00",
    accent: "#E5E5E5",
    text: "#000000",
    headerBackground: "#E8E8E8",
    cardBody: "#FFFDFD",
    cardBackground: "#c4c4c4",
  },
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
// const Stack = createStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator
//       initialRouteName="HomePage"
//       screenOptions={{ headerShown: false }}
//     >
//       {/* <Stack.Screen name="HomePage" component={BottomTabNavigator} /> */}
//       <Stack.Screen
//         name="HomePage"
//         component={HomePage}
//         options={({ navigation }) => ({
//           title: "Nak Order!",
//         })}
//       />
//       <Stack.Screen name="Item" component={ItemListing} />
//       <Stack.Screen name="Test" component={DrawerSide} />
//       <Stack.Screen
//         name="NotFound"
//         component={NotFoundScreen}
//         options={{ title: "Oops!" }}
//       />
//     </Stack.Navigator>
//   );
// }
