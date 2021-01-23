import * as React from "react";
import { Card, Title, Paragraph, useTheme } from "react-native-paper";
import { StyleSheet, View, Image, Text } from "react-native";
import { Card as Cards } from "react-native-elements";
export interface CardContainerProps {
  halal: boolean;
  cuisine: string;
  distant: number;
  time: number;
  id: number;
  navigation: any;
}
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
      <Card.Content
        style={{
          backgroundColor: colors.cardBody,
          padding: 0,
          marginBottom: 10,
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
              marginTop: 0,
            },
            style.card,
          ]}
        >
          INFO
        </Title>
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

        <Paragraph
          style={[
            { fontFamily: fontFamily, fontSize: SmallFont, color: colors.text },
            style.distant,
          ]}
        >
          {distant} KM
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
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const AllergyAdvice = (props: any) => {
  //   const { id, halal, cuisine, distant, time, navigation } = props;

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
            Tap Here
          </Text>
        </View>
      </Cards>
    </>
  );
};
const AddressContainer = (props: any) => {
  //   const { id, halal, cuisine, distant, time, navigation } = props;

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
            26,Jalan Jernai 9, Medan Idaman 53100 K.L.
          </Text>
        </View>
      </Cards>
    </>
  );
};

const itemContainer = (props: any) => {
  const { id, halal, cuisine, distant, time, navigation } = props;

  const { colors, title, bodyFont, SmallFont, fontFamily } = useTheme();
  <Cards
    containerStyle={{
      backgroundColor: colors.cardBody,
      padding: 0,
    }}
  >
    <Cards.Divider />
    <Card.Content
      style={{
        backgroundColor: colors.cardBody,
        padding: 0,
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
            marginTop: 0,
          },
          style.card,
        ]}
      >
        INFO
      </Title>
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

      <Paragraph
        style={[
          { fontFamily: fontFamily, fontSize: SmallFont, color: colors.text },
          style.distant,
        ]}
      >
        {distant} KM
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
      </Paragraph>
    </Card.Content>
  </Cards>;
};

export { AllergyAdvice, AddressContainer, InfoCardContainer, itemContainer };

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
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
