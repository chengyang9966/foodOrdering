import Header from "../../../components/Header/Header";
import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { SubCardContainer } from "../../../components/Card Container/OthersCard";
import AccountContext from "../../../State/Account/AccountContext";
import { BasicButton, FooterButton } from "../../../components/button/Button";
import { ScrollView } from "react-native-gesture-handler";
import { CardNumberConvert } from "../../../Helper/Function/AmountFunction";
const BankDetails = (props: any) => {
  const { colors, bodyFont, title } = useTheme();
  const { navigation, route } = props;
  const { Title } = route.params;
  const accountContext = useContext(AccountContext);
  const { Name, Email, PhoneNo, PaymentDetails } = accountContext;

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title={Title} stackScreen={navigation} />
      <ScrollView style={[styles.center]}>
        {Title === "Bank" &&
          PaymentDetails.BankDetails.sort((a, b) => {
            return Number(b.Primary) - Number(a.Primary);
          }).map((w, i) => {
            console.log(
              "🚀 ~ file: BankDetails.tsx ~ line 32 ~ PaymentDetails.BankDetails.sort ~ w",
              w
            );

            return (
              <View key={`${w},${i}`}>
                <SubCardContainer
                  Title={w.BankName}
                  wallet
                  Primary={w.Primary}
                  subTitle={CardNumberConvert(w.BankNumber)}
                  onClick={() =>
                    navigation.navigate("AddBank", {
                      Title: "Bank",
                      Type: "Edit",
                      Id: w.Id,
                    })
                  }
                />
              </View>
            );
          })}
        {Title === "Rewards" &&
          PaymentDetails.Rewards.sort((a, b) => {
            return Number(b.Primary) - Number(a.Primary);
          }).map((w, i) => {
            return (
              <View key={`${w},${i}`}>
                <SubCardContainer
                  Title={w.RewardName}
                  wallet
                  Primary={w.Primary}
                  subTitle={w.RewardNumber}
                  onClick={() =>
                    navigation.navigate("AddBank", {
                      Title: "Reward",
                      Type: "Edit",
                      Id: w.Id,
                    })
                  }
                />
              </View>
            );
          })}

        {/* <SubCardContainer Title="Voucher" wallet /> */}
      </ScrollView>
      <View>
        <BasicButton
          title={`Add ${Title}`}
          uppercase
          large
          Click={() => {
            Title === "Bank" &&
              navigation.navigate("AddBank", {
                Title: "Bank",
                Type: "Add",
                Id: undefined,
              });
            Title === "Rewards" &&
              navigation.navigate("AddBank", {
                Title: "Reward",
                Type: "Add",
                Id: undefined,
              });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    // flex: 1,
    marginTop: 65,

    marginLeft: 15,
    marginRight: 15,
  },
});

export default BankDetails;
