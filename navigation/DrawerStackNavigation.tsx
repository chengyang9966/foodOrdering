import React from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomePage from "../screens/HomePage/HomePage";
import About from "../screens/About/About";
import Account from "../screens/Account/Account";
import { View } from "../components/Themed";

const Drawer = createDrawerNavigator();

const DrawerConfig = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerComp {...props} />}
    >
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="About" component={About} />
      {/* <Drawer.Screen name="Help" component={ItemListing} /> */}
      {/* <Drawer.Screen name="Orders" component={About} /> */}
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
};
export const CustomDrawerComp = (props: any) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexGrow: 2 }}>
        <DrawerItem
          label="Início"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerConfig;
