import Header from "../../components/Header/Header";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import AccountContext from "../../State/Account/AccountContext";
import { ScrollView } from "react-native-gesture-handler";
import { FooterButton } from "../../components/button/Button";
import TextField from "../../components/TextField/TextField";
import Spinner from "../../components/Spinner/Spinner";
const EditAccount = (props: any) => {
  const { colors, bodyFont } = useTheme();
  const { navigation, route } = props;
  const { MainTitle, TextTitle } = route.params;
  interface EditAccount {
    Text: string | undefined;
    selected: boolean;
  }
  const [loading, SetLoading] = useState(false);
  const [Main, setMain] = useState<EditAccount>({
    Text: "",
    selected: false,
  });
  const accountContext = useContext(AccountContext);
  const { Name, Email, PhoneNo, EditContact } = accountContext;
  useEffect(() => {
    MainTitle !== undefined &&
      (setMain({
        selected: false,
        Text: MainTitle,
      }),
      SetLoading(true));
  }, [MainTitle]);

  const onChange = (name: string, value: string) => {
    setMain({
      ...Main,
      [name]: value,
      selected: true,
    });
  };
  return !loading ? (
    <Spinner />
  ) : (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title={`Edit ${TextTitle}`} stackScreen={navigation} />
      <ScrollView style={[styles.center]}>
        <TextField
          section={{
            Texts: [
              {
                Title: {
                  Name: `${TextTitle}`,
                },
                InputField: {
                  placeholder: `Please Insert Your ${TextTitle} `,
                  value: Main.Text,
                  onChangeText: (text: string) => onChange(`Text`, text),
                },
              },
            ],
          }}
        />
      </ScrollView>
      <FooterButton
        title={`Save ${TextTitle}`}
        disabled={!Main.selected}
        onClick={() => {
          EditContact({ Name: TextTitle, Value: Main.Text });
          navigation.navigate("Account");
        }}
      />
      {/* <Text>This is the Account screen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    marginTop: 65,
  },
});

export default EditAccount;
