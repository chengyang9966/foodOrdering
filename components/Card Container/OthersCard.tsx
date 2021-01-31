import * as React from "react";
import { Card, Title, Paragraph, useTheme } from "react-native-paper";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { Card as Cards, Divider } from "react-native-elements";
import { PhoneCall, Dialogbox } from "../../components/dialogBox/dialogbox";
import Header from "@react-navigation/stack/lib/typescript/src/views/Header/Header";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";
import { AmtStr } from "../../Function/AmountFunction";

export interface CardContainerProps {
  halal: boolean;
  cuisine: string;
  distant: number;
  time: number;
  id: number;
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InfoCardContainer = (props: CardContainerProps) => {
  const { id, halal, cuisine, distant, time, navigation } = props;
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();

  return (
    <Card>
      {/* <Card.Cover
        resizeMode={`cover`}
        source={{
          uri:
            "https://i.insider.com/59b9777c59d82e3f008b4745?width=1100&format=jpeg&auto=webp",
        }}
      /> */}
      <Title
        style={[
          {
            backgroundColor: colors.accent,
            fontFamily: fontFamily,
            fontSize: title,
            width: windowWidth,
            color: colors.text,
            fontWeight: "bold",
            padding: 10,
            margin: 0,
            marginTop: 0,
            marginLeft: 0,
          },
          style.card,
        ]}
      >
        INFO
      </Title>
      <Card.Content
        style={{
          backgroundColor: colors.cardBody,
          padding: 0,
          marginLeft: 0,
        }}
      >
        <Paragraph
          style={[
            {
              fontFamily: fontFamily,
              fontSize: title,
              color: colors.text,
              padding: 10,
            },
            style.card,
          ]}
        >
          ~ {halal ? "Halal" : "Non-Halal"} ~
          <Paragraph
            style={[
              {
                fontFamily: fontFamily,
                fontSize: title,
                color: colors.text,
              },
              style.cuisine,
            ]}
          >
            {cuisine} ~
          </Paragraph>
        </Paragraph>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Paragraph
            style={[
              {
                fontFamily: fontFamily,
                fontSize: SmallFont,
                color: colors.text,
              },
            ]}
          >
            {distant} KM
          </Paragraph>
          <Paragraph
            style={[
              {
                fontFamily: fontFamily,
                fontSize: SmallFont,
                color: colors.text,
              },
            ]}
          >
            {time} MINS
          </Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

const AllergyAdvice = (props: Contact) => {
  const { contact } = props;
  const text: string = `iF YOU HAVE A FOOD ALLERGY OR INTOLERANCE (OR SOMEONE YOU ARE ORDERING FOR HAS),`;
  const text2: string = ` PHONE THE RESTAURANT ON`;

  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <>
      <Cards containerStyle={{ margin: 0, marginTop: 5 }}>
        <View>
          <Image
            //   style={style.image}
            resizeMode="cover"
            source={{ uri: "asdadawdae" }}
          />
          <Text
            style={{
              fontSize: bodyFont,
              fontWeight: "normal",
              textTransform: "uppercase",
            }}
          >
            Allergy Advice
          </Text>
          <Text
            style={{
              color: colors.primary,
              textTransform: "uppercase",
              fontSize: SmallFont,
            }}
          >
            <PhoneCall
              title="Tap Here"
              text={text}
              phoneNo={contact.Tel}
              text2={text2}
            />
          </Text>
        </View>
      </Cards>
    </>
  );
};
interface Contact {
  contact: {
    Tel: string;
    FullName: string;
    Address: {
      address1: string;
      address2: string;
      state: string;
      county: string;
      postcode: number;
      country: string;
    };
  };
}

const AddressContainer = (props: Contact) => {
  //   const { id, halal, cuisine, distant, time, navigation } = props;
  const { contact } = props;
  // //   console.log(
  // //     "🚀 ~ file: OthersCard.tsx ~ line 137 ~ AddressContainer ~ contact",
  // //     contact
  // //   );
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <>
      <Cards containerStyle={{ margin: 0, marginTop: 5 }}>
        <View>
          <Image
            //   style={style.image}
            resizeMode="cover"
            source={{ uri: "asdadawdae" }}
          />
          <Text
            style={{
              fontSize: bodyFont,
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Address
          </Text>
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "500",
              fontSize: SmallFont,
            }}
          >
            {contact?.Address?.address1 +
              "," +
              contact?.Address?.address2 +
              "," +
              contact?.Address?.postcode +
              "," +
              contact?.Address?.county +
              "," +
              contact?.Address?.country}
          </Text>
        </View>
      </Cards>
    </>
  );
};

interface Food {
  TypesOfFood: Array<smallItem>;
  navigation: any;
  StoreName: any;
  id: any;
}
interface smallItem {
  itemName: string;
  id: string;
  item: Array<eachFood>;
}

interface eachFood {
  id: string;
  itemName: string;
  Description: string;
  Price: number;
  Quantity: number;
  Allergy: string;
}

const ItemContainer = (props: Food) => {
  const restaurantContext = React.useContext(RestaurantContext);
  const { SelectItem } = restaurantContext;
  const { TypesOfFood, navigation, StoreName, id } = props;

  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <>
      {TypesOfFood.map((w, index) => {
        return (
          <Cards
            key={index}
            containerStyle={{
              backgroundColor: colors.background,
              padding: 0,
              margin: 0,
            }}
          >
            <Title
              style={[
                {
                  backgroundColor: colors.accent,
                  fontFamily: fontFamily,
                  fontSize: title,
                  color: colors.text,
                  fontWeight: "bold",
                  padding: 10,
                  marginTop: 20,
                  marginBottom: 0,
                },
                style.card,
              ]}
            >
              {w.itemName}
            </Title>

            {w.item.map((k, i) => {
              return (
                <View
                  key={i}
                  style={{ backgroundColor: colors.cardBody, paddingBottom: 0 }}
                >
                  <View>
                    <Text
                      onPress={() => {
                        SelectItem(id, k.id);
                        navigation.navigate("FoodItem", {
                          id: id,
                          storeName: StoreName,
                          EachItem: k,
                          description: true,
                        });
                      }}
                      style={[
                        {
                          fontFamily: fontFamily,
                          fontSize: SmallFont,
                          color: colors.text,
                          fontWeight: "bold",
                          paddingLeft: 10,
                          paddingTop: 10,
                          marginTop: 0,
                        },
                      ]}
                    >
                      {k.itemName}
                    </Text>
                    <Text
                      style={[
                        {
                          fontFamily: fontFamily,
                          fontSize: SmallFont,
                          color: colors.text,
                          fontWeight: "bold",
                          paddingLeft: 10,
                          paddingBottom: 10,
                        },
                      ]}
                    >
                      {AmtStr(k.Price)}
                    </Text>
                  </View>
                  {i + 1 === w.item.length ? null : (
                    <Divider
                      style={{ height: 6, backgroundColor: colors.accent }}
                    />
                  )}
                  {/* <Cards.Divider style={{ height: 5 }} /> */}
                </View>
              );
            })}
          </Cards>
        );
      })}
    </>
  );
};

export { AllergyAdvice, AddressContainer, InfoCardContainer, ItemContainer };

const style = StyleSheet.create({
  card: {
    textAlign: "center",
  },
  cuisine: {
    marginLeft: 10,
    marginTop: 10,
  },
  distant: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
