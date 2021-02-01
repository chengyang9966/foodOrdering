import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import Header from "../../components/Header/Header";
import { useTheme } from "react-native-paper";
import moment from "moment";
import Spinner from "../../components/Spinner/Spinner";
import { add_minutes, totalTimeNeeded } from "../../Function/TimeFunction";
import { FooterButton } from "../../components/button/Button";
import AccountContext from "../../State/Account/AccountContext";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Checkout = (props: any) => {
  const { navigation, route } = props;
  const { storeName, id } = route.params;
  const { colors } = useTheme();
  const [Amount, TotalAmount] = useState(0);
  const [Title, SetTiTle] = useState("");
  const accountContext = useContext(AccountContext);
  const { Item } = accountContext;
  useEffect(() => {
    var AMT = 0;
    var today = moment();

    Item.length > 0 &&
      Item.map((w) => {
        AMT = AMT + w.TotalAmount;
      });
    TotalAmount(AMT);
    SetTiTle(
      `Time : ${moment(
        add_minutes(today, totalTimeNeeded(Item.length, "first"))
      ).format("LT")} - ${moment(
        add_minutes(today, totalTimeNeeded(Item.length))
      ).format("LT")}`
    );
  }, [Item]);

  return (
    <>
      <SafeAreaView
        style={[{ backgroundColor: colors.background }, styles.container]}
      >
        <Header navigation={navigation} title={Title} />
        <ScrollView style={styles.View}>
          {/* <FooterButton title="CheckOut" amount={10} /> */}
        </ScrollView>
        <FooterButton title="CheckOut" amount={Amount} uppercase />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
    flex: 1,
  },
  View: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Checkout;
