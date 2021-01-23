import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header/Header";
import { useTheme } from "react-native-paper";
import ScrollView from "../../components/Slider/ScrollView";
import LocationContext from "../../State/Location/LocationContext";
import ScrollViewContext from "../../State/ScrollView/ScrollViewContext";
import {
  InfoCardContainer,
  AllergyAdvice,
  AddressContainer,
} from "../../components/Card Container/OthersCard";

const EachItemInfo = (props: any) => {
  console.log(
    "🚀 ~ file: EachItemInfo.tsx ~ line 10 ~ EachItemInfo ~ props",
    props
  );
  const { navigation, route } = props;
  const { storeName, id } = route.params;
  const { colors } = useTheme();
  const scrollViewContext = useContext(ScrollViewContext);
  const locationContext = useContext(LocationContext);
  const { EachRestaurant } = scrollViewContext;
  const { SelectedLocation, list, Tab, loading, Ready } = locationContext;
  const { primary, accent, text, background } = colors;
  return (
    <View
      style={[
        { backgroundColor: background, maxHeight: "100%" },
        styles.container,
      ]}
    >
      <Header title={storeName} navigation={navigation} />
      <ScrollView list={EachRestaurant} />
      <View style={{ backgroundColor: accent }}>
        {list.map((x, index) => {
          if (x.id === id) {
            return (
              <>
                <InfoCardContainer
                  key={index}
                  id={x?.id}
                  navigation={navigation}
                  halal={x?.halal}
                  cuisine={x?.cuisine}
                  distant={x?.distant}
                  time={x?.time}
                />
                <AllergyAdvice />
                <AddressContainer />
              </>
            );
          }
        })}
      </View>
    </View>
  );
};
export default EachItemInfo;

const styles = StyleSheet.create({
  container: {},
});
