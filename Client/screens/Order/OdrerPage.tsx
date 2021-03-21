import React, { useContext } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import {
  NotesContainer,
  SubCardContainer,
} from "../../components/Card Container/OthersCard";
import Header from "../../components/Header/Header";
import AccountContext from "../../State/Account/AccountContext";
import moment from "moment";
import { AmtStr } from "../../Helper/Function/AmountFunction";
import PageSize from "../../Helper/PageSize";
const NavigationOrderPage = (props: any) => {
  const { navigation, route } = props;
  const { colors } = useTheme();
  const accountContext = useContext(AccountContext);
  const { PastOrder } = accountContext;
  const { windowHeight, windowWidth } = PageSize();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Header title={`Orders`} stackScreen={navigation} />
      <ScrollView
        style={{
          height: windowHeight,
          width: windowWidth,
          marginTop: 75,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {PastOrder.map((w, i) => {
          return (
            <View key={`${w}${i}`}>
              <SubCardContainer
                Title={w.storeName}
                center
                order={{
                  subRight: `${AmtStr(w[0].TotalAmount)}`,
                  subLeft: `${moment(w.TrxDate).format("MM-DD-YYYY")}`,
                }}
                onClick={() =>
                  navigation.navigate("EachOrder", {
                    navigation,
                    route,
                  })
                }
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NavigationOrderPage;
