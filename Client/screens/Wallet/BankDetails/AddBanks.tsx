import Header from "../../../components/Header/Header";
import React, { Children, useContext, useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useTheme } from "react-native-paper";
import { SubCardContainer } from "../../../components/Card Container/OthersCard";
import AccountContext from "../../../State/Account/AccountContext";
import { CardNumberConvert } from "../../../Helper/Function/AmountFunction";
import { BasicButton, FooterButton } from "../../../components/button/Button";
import { ScrollView } from "react-native-gesture-handler";
import TextField from "../../../components/TextField/TextField";
const AddBank = (props: any) => {
  const { colors, bodyFont } = useTheme();
  const { navigation, route } = props;
  const { Title, Type, Id } = route.params;

  const accountContext = useContext(AccountContext);
  const {
    Name,
    Email,
    PhoneNo,
    PaymentDetails,
    AddReward,
    AddBank,
    EditBank,
    EditReward,
  } = accountContext;
  const [Item, SetItem] = useState({
    BankName: "",
    BankNumber: "",
    Primary: false,
  });
  const [Reward, SetReward] = useState({
    RewardName: "",
    RewardNumber: "",
    Primary: false,
  });

  const onChange = (name: string, value: any) => {
    SetItem({
      ...Item,
      [name]: value,
    });
    SetReward({
      ...Reward,
      [name]: value,
    });
  };
  useEffect(() => {
    if (Id !== undefined && Title === "Bank" && Type === "Edit") {
      let BankDetails = PaymentDetails.BankDetails.find((w) => w.Id === Id);

      SetItem({
        BankName: BankDetails?.BankName || "",
        BankNumber: BankDetails?.BankNumber || "",
        Primary: BankDetails?.Primary || false,
      });
    }
    if (Id !== undefined && Title === "Reward" && Type === "Edit") {
      let RewardDetails = PaymentDetails.Rewards.find((w) => w.Id === Id);
      console.log(
        "🚀 ~ file: AddBanks.tsx ~ line 49 ~ useEffect ~ BankDetails",
        RewardDetails
      );
      SetReward({
        RewardName: RewardDetails?.RewardName || "",
        RewardNumber: RewardDetails?.RewardNumber || "",
        Primary: RewardDetails?.Primary || false,
      });
    }
  }, [Title, Id, Type, PaymentDetails]);
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title={`${Type} ${Title}`} stackScreen={navigation} />
      <ScrollView style={[styles.center]}>
        {Title === "Bank" && (
          <TextField
            section={{
              Texts: [
                {
                  Title: {
                    Name: `${Title} Name`,
                  },
                  InputField: {
                    placeholder: `Please Insert The ${Title}'s Name`,
                    value: Item.BankName,
                    onChangeText: (text: string) => onChange("BankName", text),
                  },
                },

                {
                  Title: {
                    Name: "Card Number",
                  },
                  InputField: {
                    placeholder: `Please Insert ${Title} Number`,
                    value: CardNumberConvert(Item.BankNumber),
                    prefix: "BankNumber",
                    onChangeText: (text: string) =>
                      onChange("BankNumber", text.replace(/\s/g, "")),
                  },
                },
                {
                  ToggleButton: {
                    Title: "Primary Card",
                    value: Item.Primary,
                    onValueChange: (text: boolean) => onChange("Primary", text),
                  },
                },
              ],
            }}
          />
        )}
        {Title === "Reward" && (
          <TextField
            section={{
              Texts: [
                {
                  Title: {
                    Name: `${Title} Name`,
                  },
                  InputField: {
                    placeholder: `Please Insert The ${Title}'s Name`,
                    value: Reward.RewardName,
                    onChangeText: (text: string) =>
                      onChange("RewardName", text),
                  },
                },

                {
                  Title: {
                    Name: "Card Number",
                  },
                  InputField: {
                    placeholder: `Please Insert ${Title} Number`,
                    value: Reward.RewardNumber,
                    // prefix: "BankNumber",
                    onChangeText: (text: string) =>
                      onChange("RewardNumber", text),
                  },
                },
                {
                  ToggleButton: {
                    Title: "Primary Reward",
                    value: Reward.Primary,
                    onValueChange: (text: boolean) => onChange("Primary", text),
                  },
                },
              ],
            }}
          />
        )}
      </ScrollView>

      <FooterButton
        title={`${Type} ${Title}`}
        uppercase
        onClick={() => {
          Id !== undefined &&
            Title === "Bank" &&
            Type === "Edit" &&
            (EditBank({ ...Item, Id }),
            navigation.navigate("BankDetails", { Title: "Bank" }),
            SetItem({
              BankName: "",
              BankNumber: "",
              Primary: false,
            }));
          Id === undefined &&
            Title === "Bank" &&
            (AddBank(Item),
            navigation.navigate("BankDetails", { Title: "Bank" }),
            SetItem({
              BankName: "",
              BankNumber: "",
              Primary: false,
            }));
          Id !== undefined &&
            Title === "Reward" &&
            Type === "Edit" &&
            (EditReward({ ...Reward, Id }),
            navigation.navigate("BankDetails", { Title: "Rewards" }),
            SetReward({
              RewardName: "",
              RewardNumber: "",
              Primary: false,
            }));
          Id === undefined &&
            Title === "Reward" &&
            (AddReward(Reward),
            navigation.navigate("BankDetails", { Title: "Rewards" }),
            SetReward({
              RewardName: "",
              RewardNumber: "",
              Primary: false,
            }));
        }}
        disabled={
          (Title === "Bank" &&
            (Item.BankName === "" ||
              Item.BankNumber === "" ||
              Item.BankNumber.length < 16)) ||
          (Title === "Reward" &&
            (Reward.RewardName === "" || Reward.RewardNumber === ""))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    // flex: 1,
    marginTop: 65,
  },
});

export default AddBank;
