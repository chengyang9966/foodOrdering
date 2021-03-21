import React, { useEffect, useContext } from "react";
import { StyleSheet, Button, ScrollView } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Search Bar/SearchBar";
import ScrollViewContainer from "../../components/Slider/ScrollView";
import CardContainer from "../../components/Card Container/CardContainer";
import { View, Text, TextInput, Dimensions } from "react-native";
import {
  SearchFunction,
  SelectTab,
} from "../../Helper/Function/Searchfunction";

import LocationContext from "../../State/Location/LocationContext";
import ScrollViewContext from "../../State/ScrollView/ScrollViewContext";
import { useTheme } from "react-native-paper";
import Spinner from "../../components/Spinner/Spinner";
import PageSize from "../../Helper/PageSize";

const ItemListing = (props: any) => {
  const { navigation } = props;
  const locationContext = useContext(LocationContext);
  const scrollViewContext = useContext(ScrollViewContext);
  const { Restaurant } = scrollViewContext;
  const { SelectedLocation, list, Tab, loading, Ready } = locationContext;
  const { colors } = useTheme();
  const { windowHeight, windowWidth } = PageSize();

  useEffect(() => {
    list.length > 0 && Ready();
  }, [list]);

  return loading ? (
    <Spinner title="Nak Order" />
  ) : (
    <View
      style={[
        {
          backgroundColor: colors.background,
        },
        styles.container,
      ]}
    >
      <SearchBar
        navigation={navigation}
        placeholder="Food That You are desired..."
      />

      <ScrollViewContainer list={Restaurant} styles={{ marginBottom: 21 }} />
      <ScrollView style={{ marginBottom: 100 }}>
        {SearchFunction(SelectedLocation, SelectTab(Tab, list), [
          "storeName",
          "cuisine",
        ]).map((listItem, index) => (
          <CardContainer
            key={index}
            id={listItem?.id}
            navigation={navigation}
            storeName={listItem?.storeName}
            halal={listItem?.halal}
            cuisine={listItem?.cuisine}
            distant={listItem?.distant}
            time={listItem?.time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ItemListing;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    marginTop: 20,
    marginBottom: 20,
  },
});
