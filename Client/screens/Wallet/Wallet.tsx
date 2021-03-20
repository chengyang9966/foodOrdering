import Header from "../../components/Header/Header";
import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { SubCardContainer } from "../../components/Card Container/OthersCard";
import AccountContext from "../../State/Account/AccountContext";
const Wallet = (props: any) => {
  const { colors, bodyFont, title } = useTheme();
  const { navigation } = props;
  const accountContext = useContext(AccountContext);
  const { Name, Email, PhoneNo } = accountContext;
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title="Wallet" stackScreen={navigation} disabledBack />
      <View style={[styles.center]}>
        <SubCardContainer
          Title="Bank"
          wallet
          onClick={() =>
            navigation.navigate("BankDetails", {
              Title: "Bank",
            })
          }
        />
        <SubCardContainer
          Title="Rewards"
          wallet
          onClick={() =>
            navigation.navigate("BankDetails", {
              Title: "Rewards",
            })
          }
        />
        <SubCardContainer Title="Voucher" wallet />
      </View>
      {/* <Text>This is the Account screen</Text> */}
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

export default Wallet;
