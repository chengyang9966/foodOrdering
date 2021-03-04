import React from "react";
import { useTheme } from "react-native-paper";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomePage from "../screens/HomePage/HomePage";
import About from "../screens/About/About";
import Account from "../screens/Account/Account";
// import { View } from "../components/Themed";
import { View, StyleSheet } from "react-native";
import { HomeStackNavigator } from "./MainStackNavigator";
import Wallet from "../screens/Wallet/Wallet";

const Drawer = createDrawerNavigator();

const DrawerConfig = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerPosition="left"
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerComp {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="About" component={About} />
      {/* <Drawer.Screen name="Help" component={ItemListing} /> */}
      {/* <Drawer.Screen name="Orders" component={About} /> */}
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Wallet" component={Wallet} />
    </Drawer.Navigator>
  );
};
export const CustomDrawerComp = (props: any) => {
  const { navigation } = props;
  const { colors, title, fontFamily, bodyFont } = useTheme();
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: colors.background }}
    >
      <View style={{ flexGrow: 10, backgroundColor: colors.background }}>
        <DrawerItem
          label="Nak Order"
          labelStyle={[
            {
              color: colors.primary,
              fontSize: title,
              fontFamily,
              paddingLeft: 60,
            },
            Style.bodyCard,
          ]}
          onPress={() => navigation.navigate("Home")}
        />
        <DrawerItem
          label="Orders"
          labelStyle={[
            {
              color: colors.text,
              fontSize: bodyFont,
              fontFamily,

              paddingLeft: 85,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: colors.cardBody }}
          onPress={() => navigation.navigate("EachItem")}
        />
        <DrawerItem
          label="Account"
          labelStyle={[
            {
              color: colors.text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 80,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: colors.cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
        <DrawerItem
          label="Wallet"
          labelStyle={[
            {
              color: colors.text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 85,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: colors.cardBody }}
          onPress={() => navigation.navigate("Wallet")}
        />
        <DrawerItem
          label="Nak Tolong"
          labelStyle={[
            {
              color: colors.text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 70,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: colors.cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
        <DrawerItem
          label="Help"
          labelStyle={[
            {
              color: colors.text,
              fontSize: bodyFont,
              fontFamily,

              paddingLeft: 100,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: colors.cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
        <DrawerItem
          label="About"
          labelStyle={[
            {
              color: colors.text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 90,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: colors.cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
        <DrawerItem
          label="LogOut"
          labelStyle={[
            {
              color: colors.text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 85,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: colors.cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerConfig;

const Style = StyleSheet.create({
  bodyCard: {
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "justify",
  },
});
