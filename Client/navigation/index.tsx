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
import { Colors } from "react-native/Libraries/NewAppScreen";
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      background: string;
      primary: string;
      accent: string;
      text: string;
      headerBackground: string;
      cardBody: string;
      cardBackground: string;
    }
    interface Theme {
      myOwnProperty: boolean;
      roundness: number;
      title: number;
      fontFamily: string;
      bodyFont: number;
      SmallFont: number;
    }
  }
}
const theme = {
  ...MainTheme,
  myOwnProperty: true,
  roundness: 2,
  title: 25,
  fontFamily: "Roboto",
  bodyFont: 18,
  SmallFont: 15,
  colors: {
    ...Colors,
    background: "#FFBBA6",
    primary: "#A11D00",
    accent: "#E5E5E5",
    text: "#000000",
    headerBackground: "#E8E8E8",
    cardBody: "#FFFDFD",
    cardBackground: "#c4c4c4",
  },
};

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
                {/* <HomeStackNavigator /> */}
                <DrawerConfig />
              </PaperProvider>
            </NavigationContainer>
          </RestaurantState>
        </LocationStore>
      </AccountState>
    </ScrollView>
  );
}
