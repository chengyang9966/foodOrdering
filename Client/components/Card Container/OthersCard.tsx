import * as React from "react";
import { Card, Title, Paragraph, useTheme } from "react-native-paper";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Card as Cards, Divider } from "react-native-elements";
import { PhoneCall, Dialogbox } from "../../components/dialogBox/dialogbox";
import Header from "@react-navigation/stack/lib/typescript/src/views/Header/Header";
import RestaurantContext from "../../State/Restaurant/RestaurantContext";
import AccountContext from "../../State/Account/AccountContext";
import { AmtStr } from "../../Helper/Function/AmountFunction";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface CardContainerProps {
  startDate?: {
    props: any;
  };
  halal: boolean;
  cuisine: string;
  distant: number;
  time: number;
  id: number;
  navigation: any;
}

const InfoCardContainer = (props: CardContainerProps) => {
  const { id, halal, cuisine, distant, time, navigation, startDate } = props;
  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  const { windowHeight, windowWidth } = PageSize();
  return (
    <Card {...startDate?.props}>
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
  const { contact, Title } = props;
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
            {Title}
          </Text>
          <Text
            style={{
              color: colors.primary,
              textTransform: "uppercase",
              fontSize: SmallFont,
            }}
          >
            {contact && (
              <PhoneCall
                title="Tap Here"
                text={text}
                phoneNo={contact.Tel}
                text2={text2}
              />
            )}
          </Text>
        </View>
      </Cards>
    </>
  );
};
interface Contact {
  onClick?: () => void;
  center?: boolean;
  Primary?: boolean;
  wallet?: boolean;
  order?: {
    subLeft: string;
    subRight: string;
  };

  subTitle?: string | number;
  Title: string;
  contact?: {
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

const SubCardContainer = (props: Contact) => {
  const {
    contact,
    Title,
    center,
    subTitle,
    wallet,
    order,
    onClick,
    Primary,
  } = props;

  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <>
      <Cards
        containerStyle={[
          {
            margin: 0,
            marginTop: 5,
            marginBottom: 0,
          },
          center && {
            marginTop: 15,
            marginBottom: 15,
          },
          wallet && {
            marginTop: 20,
            marginBottom: 20,
          },
          order && {
            marginTop: 20,
            marginBottom: 20,
          },
          Primary && {
            backgroundColor: colors.cardBackground,
            borderColor: colors.cardBackground,
          },
        ]}
      >
        <TouchableOpacity
          disabled={!onClick}
          style={[Primary && { backgroundColor: colors.cardBackground }]}
          onPress={() => {
            onClick && onClick();
          }}
        >
          <Image
            //   style={style.image}
            resizeMode="cover"
            source={{ uri: "asdadawdae" }}
          />
          <Text
            style={[
              {
                fontSize: bodyFont,
                fontWeight: "500",
                textTransform: "uppercase",
                textAlign: "auto",
              },
              center && {
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                padding: 10,
              },
              wallet && {
                marginTop: 10,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              },
              order && {
                marginTop: -10,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              },
            ]}
          >
            {Title}
          </Text>
          {contact && subTitle && (
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
          )}
          {center && subTitle && (
            <Text
              style={[
                {
                  textTransform: "uppercase",
                  fontWeight: center ? "600" : "500",
                  fontSize: SmallFont,
                  textAlign: center ? "center" : "auto",
                  padding: center ? 10 : 0,
                },
              ]}
            >
              {subTitle}
            </Text>
          )}
          {wallet && subTitle && (
            <Text
              style={[
                {
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontSize: SmallFont,
                  textAlign: "center",
                  paddingTop: 10,
                },
              ]}
            >
              {subTitle}
            </Text>
          )}
          {order && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "space-between",
              }}
            >
              <Text
                style={[
                  {
                    display: "flex",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: SmallFont,

                    paddingTop: 10,
                  },
                ]}
              >
                {order.subLeft}
              </Text>
              <Text
                style={[
                  {
                    paddingTop: 10,
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: SmallFont,
                  },
                ]}
              >
                {order.subRight}
              </Text>
            </View>
          )}
        </TouchableOpacity>
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
interface CheckOut {
  styles?: StyleProp<ViewStyle>;
  TypesOfFood: Array<CheckOutItem>;
  navigation: any;
  StoreName: any;
  Name: string;
  Amount: any;
  Delivery: any;
  id: any;
}
interface Notes {
  styles?: StyleProp<ViewStyle>;
  TypesOfFood: Array<CheckOutItem>;
  navigation: any;
  StoreName: any;
  Name: string;
  id: any;
}
interface Payment {
  styles?: StyleProp<ViewStyle>;
  PaymentDetails?: {
    Name: string;
    Number: number | string;
  };
  navigation: any;
  StoreName: any;
  Name: string;
  onPress?: (event: any) => void;
  SubTitle?: string;
  id: any;
}
interface CheckOutItem {
  Allergy: string;
  Description: string;
  Max: Number;
  Price: string | number;
  Quantity: Number;
  TotalAmount: string | number;
  id: string;
  itemName: string;
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
  Price: string | number;
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
            key={`${w}${index}`}
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
                  key={`${k}${i}`}
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
const NotesContainer = (props: Notes) => {
  const accountContext = React.useContext(AccountContext);
  const { Item, SumAmount } = accountContext;

  const { TypesOfFood, navigation, StoreName, id, Name } = props;

  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <>
      <Cards
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
              // fontFamily: fontFamily,
              // fontSize: title,
              color: colors.text,
              fontWeight: "bold",
              padding: 10,
              marginTop: 20,
              marginBottom: 0,
            },
            style.card,
          ]}
        >
          <Dialogbox Title={Name} SubTitle={Item[0]} />
        </Title>

        {Item[0].Notes !== undefined && (
          <Text
            style={[
              {
                backgroundColor: colors.cardBody,
                fontFamily: fontFamily,
                fontSize: SmallFont,
                color: colors.text,
                fontWeight: "bold",
                padding: 10,
              },
            ]}
          >
            {Item[0].Notes}
          </Text>
        )}
      </Cards>
    </>
  );
};
const PaymentContainer = (props: Payment) => {
  const accountContext = React.useContext(AccountContext);
  const { Item, SumAmount } = accountContext;

  const {
    PaymentDetails,
    navigation,
    StoreName,
    id,
    Name,
    styles,
    SubTitle,
    onPress,
  } = props;

  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <>
      <Cards
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
              // fontFamily: fontFamily,
              // fontSize: title,
              textTransform: "uppercase",
              color: colors.text,
              fontWeight: "bold",
              padding: 10,
              marginTop: 20,
              marginBottom: 0,
            },
            style.card,
          ]}
          onPress={onPress}
        >
          {Name}
        </Title>

        {PaymentDetails !== undefined && (
          <View
            style={[
              style.CheckOutItem,
              {
                backgroundColor: colors.cardBody,
              },
            ]}
          >
            <Text
              style={[
                {
                  backgroundColor: colors.cardBody,
                  fontFamily: fontFamily,
                  fontSize: bodyFont,
                  color: colors.text,
                  fontWeight: "bold",
                },
              ]}
            >
              {PaymentDetails?.Name}
            </Text>
            <Text
              style={[
                {
                  backgroundColor: colors.cardBody,
                  fontFamily: fontFamily,
                  fontSize: bodyFont,
                  color: colors.text,
                  fontWeight: "bold",
                },
              ]}
            >
              {PaymentDetails?.Number}
            </Text>
          </View>
        )}
        {SubTitle !== undefined && (
          <View
            style={[
              style.CheckOutItem,
              {
                backgroundColor: colors.cardBody,
                justifyContent: "center",
              },
            ]}
          >
            <Text
              style={[
                {
                  textTransform: "uppercase",
                  backgroundColor: colors.cardBody,
                  fontFamily: fontFamily,
                  fontSize: SmallFont,
                  color: colors.primary,
                  fontWeight: "bold",
                },
              ]}
            >
              {SubTitle}
            </Text>
          </View>
        )}
      </Cards>
    </>
  );
};
const CheckOutContainer = (props: CheckOut) => {
  const restaurantContext = React.useContext(RestaurantContext);
  const { SelectItem } = restaurantContext;
  const {
    TypesOfFood,
    navigation,
    StoreName,
    id,
    Name,
    styles,
    Amount,
    Delivery,
  } = props;

  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  return (
    <View style={{ borderRadius: 0 }}>
      <Cards
        containerStyle={{
          backgroundColor: colors.background,
          padding: 0,
          margin: 0,
          borderRadius: 0,
          borderColor: colors.background,
        }}
      >
        <Cards.Title
          style={[
            {
              backgroundColor: colors.accent,
              fontFamily: fontFamily,
              fontSize: title,
              color: colors.text,
              fontWeight: "bold",
              padding: 10,
              // marginTop: 20,
              marginBottom: 0,
              borderRadius: 0,
            },
            // style.card,
          ]}
        >
          {Name}
        </Cards.Title>
        {TypesOfFood.map((w, index) => (
          <React.Fragment key={`${w}${index}`}>
            <View
              style={[style.CheckOutItem, { backgroundColor: colors.cardBody }]}
            >
              <Text
                style={[
                  {
                    fontFamily: fontFamily,
                    fontSize: bodyFont,
                    color: colors.text,
                    fontWeight: "bold",
                    backgroundColor: colors.accent,
                    borderColor: colors.accent,
                    padding: 5,
                  },
                ]}
              >
                {w.Quantity}
              </Text>
              <Text
                onPress={() => {
                  SelectItem(id, w.id);
                  navigation.navigate("FoodItem", {
                    id: id,
                    storeName: StoreName,
                    EachItem: Object.assign({}, TypesOfFood[index], {
                      PageName: "CheckOut",
                    }),
                    description: true,
                  });
                }}
                style={{
                  fontFamily: fontFamily,
                  fontSize: bodyFont,
                  color: colors.text,
                  fontWeight: "bold",
                  position: "relative",
                  right: 55,
                }}
              >
                {w.itemName}
              </Text>
              <Text
                style={[
                  {
                    fontFamily: fontFamily,
                    fontSize: bodyFont,
                    color: colors.text,
                    fontWeight: "bold",
                  },
                ]}
              >
                {AmtStr(w.Price)}
              </Text>
            </View>
            {index + 1 === TypesOfFood.length ? null : (
              <Divider style={{ height: 6, backgroundColor: colors.accent }} />
            )}
          </React.Fragment>
        ))}
        <Divider style={{ height: 6, backgroundColor: colors.accent }} />
        <View style={[style.AddDishes, { backgroundColor: colors.cardBody }]}>
          <Text
            onPress={() => {
              navigation.navigate("EachItem", {
                id: id,
                storeName: StoreName,
              });
            }}
            style={[
              {
                fontFamily: fontFamily,
                fontSize: bodyFont,
                color: colors.primary,
                fontWeight: "bold",
                textTransform: "uppercase",
                // backgroundColor: colors.accent,
                // borderColor: colors.accent,
                // padding: 5,
              },
            ]}
          >
            Add Dishes
          </Text>
        </View>
        <Divider style={{ height: 6, backgroundColor: colors.accent }} />
        <View
          style={[style.CheckOutItem, { backgroundColor: colors.cardBody }]}
        >
          <Text
            style={[
              {
                fontFamily: fontFamily,
                fontSize: bodyFont,
                color: colors.text,
                fontWeight: "bold",
                // backgroundColor: colors.accent,
                // borderColor: colors.accent,
                // padding: 5,
              },
            ]}
          >
            SubTotal
          </Text>
          <Text
            style={[
              {
                fontFamily: fontFamily,
                fontSize: bodyFont,
                color: colors.text,
                fontWeight: "bold",
                // backgroundColor: colors.accent,
                // borderColor: colors.accent,
                // padding: 5,
              },
            ]}
          >
            {AmtStr(Amount)}
          </Text>
        </View>
        {Delivery !== 0 && (
          <>
            {/* <Divider style={{ height: 6, backgroundColor: colors.accent }} /> */}
            <View
              style={[style.AddDishes, { backgroundColor: colors.cardBody }]}
            >
              <Text
                style={[
                  {
                    fontFamily: fontFamily,
                    fontSize: bodyFont,
                    color: colors.text,
                    fontWeight: "bold",
                    // backgroundColor: colors.accent,
                    // borderColor: colors.accent,
                    // padding: 5,
                  },
                ]}
              >
                Delivery Fees
              </Text>
              <Text
                style={[
                  {
                    fontFamily: fontFamily,
                    fontSize: bodyFont,
                    color: colors.text,
                    fontWeight: "bold",
                    // backgroundColor: colors.accent,
                    // borderColor: colors.accent,
                    // padding: 5,
                  },
                ]}
              >
                {AmtStr(Delivery)}
              </Text>
            </View>
          </>
        )}
        <Divider style={{ height: 6, backgroundColor: colors.accent }} />
        <View style={[style.AddDishes, { backgroundColor: colors.cardBody }]}>
          <Text
            style={[
              {
                fontFamily: fontFamily,
                fontSize: bodyFont,
                color: colors.primary,
                fontWeight: "bold",
                textTransform: "uppercase",
                // backgroundColor: colors.accent,
                // borderColor: colors.accent,
                // padding: 5,
              },
            ]}
          >
            Add Voucher
          </Text>
        </View>
      </Cards>
    </View>
  );
};

export {
  AllergyAdvice,
  SubCardContainer,
  InfoCardContainer,
  ItemContainer,
  CheckOutContainer,
  NotesContainer,
  PaymentContainer,
};

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
  CheckOutItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  AddDishes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
