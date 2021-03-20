import Header from "../../components/Header/Header";
import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { SubCardContainer } from "../../components/Card Container/OthersCard";
import AccountContext from "../../State/Account/AccountContext";
const Account = (props: any) => {
  const { colors, bodyFont, title } = useTheme();
  const { navigation } = props;
  const accountContext = useContext(AccountContext);
  const { Name, Email, PhoneNo } = accountContext;
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title="Account" stackScreen={navigation} disabledBack />
      <View style={[styles.center]}>
        <SubCardContainer
          Title="Name"
          subTitle={Name}
          center
          onClick={() =>
            navigation.navigate("EditAccount", {
              MainTitle: `${Name}`,
              TextTitle: "Name",
            })
          }
        />
        <SubCardContainer
          Title="Phone"
          subTitle={PhoneNo}
          center
          onClick={() =>
            navigation.navigate("EditAccount", {
              MainTitle: `${PhoneNo}`,
              TextTitle: "Phone",
            })
          }
        />
        <SubCardContainer
          Title="Email"
          subTitle={Email}
          center
          onClick={() =>
            navigation.navigate("EditAccount", {
              MainTitle: `${Email}`,
              TextTitle: "Email",
            })
          }
        />
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

export default Account;
